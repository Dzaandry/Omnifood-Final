// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Making mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.remove("nav-open");

    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else if (href.startsWith("#")) {
      console.log(document.querySelector(href));
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky navigation

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.querySelector(".header").classList.add("sticky");
      sectionHero.style.marginTop = "9.6rem";
    } else {
      document.querySelector(".header").classList.remove("sticky");
      sectionHero.style.marginTop = 0;
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

//

/*

*/
