document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinks = document.querySelector(".navbar-links");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
});
////////////////////////////////////////
//scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-up");

  const fadeUpOnScroll = () => {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", fadeUpOnScroll);
  fadeUpOnScroll();
});

/////////////////////////

// scrolling into the links
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href*="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      const href = this.getAttribute('href');
      const targetId = href.split('#')[1];

      // Check if the current page is 'services.html'
      const isOnServicesPage = window.location.pathname.includes('services.html');

      if (!isOnServicesPage) {
        // If not on 'services.html', navigate to 'services.html' with the targetId as hash
        window.location.href = `services.html#${targetId}`;
      } else {
        // If already on 'services.html', prevent default anchor behavior
        event.preventDefault();

        // Scroll to the element
        scrollToElement(targetId);
      }
    });
  });

  // Check if we have a hash in the URL when loading 'services.html'
  const hash = window.location.hash.substring(1);
  if (hash) {
    // Scroll to the element with a delay to ensure the page has loaded
    setTimeout(() => {
      scrollToElement(hash);
    }, 10); // Adjust this timeout as needed
  }

  // Function to scroll to the element
  function scrollToElement(id) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 270, // Adjust this offset for your header height
        behavior: 'smooth'
      });
    }
  }
});


/////////////////////////////////
// navigation items
const NavItems = [
  {
    name: "Home",
    href: "index.html",
  },
  {
    name: "Who am I?",
    href: "about.html",
  },
  {
    name: "Services",
    dropdown: [
      { name: "Translation", href: "services.html#translation" },
      { name: "SEO Localisation", href: "services.html#seo-localisation" },
      { name: "Content Writing", href: "services.html#content-writing" },
      { name: "Editing", href: "services.html#editing" },
    ],
  },
  {
    name: "Language",
    dropdown: [
      { name: "Francais", href: "service1.html" },
      { name: "Espanol", href: "service2.html" },
    ],
    icon: "material-symbols-outlined",
    iconName: "Language",
  },
  {
    name: "Contact me",
    href: "contact.html",
  },
];

let NavbarHtml = "";

NavItems.forEach((navItem) => {
  if (navItem.dropdown) {
    NavbarHtml += `
        <li class="dropdown">
          <a href="#" class="dropbtn">
            ${
              navItem.icon
                ? `<span class="${navItem.icon}">${navItem.iconName}</span>`
                : ""
            }${navItem.name}
          </a>
          <div class="dropdown-content">
            ${navItem.dropdown
              .map((item) => `<a href="${item.href}">${item.name}</a>`)
              .join("")}
          </div>
        </li>
      `;
  } else {
    NavbarHtml += `<li><a href="${navItem.href}">${navItem.name}</a></li>`;
  }
});

document.querySelector(".navbar-link-container").innerHTML = NavbarHtml;

////////////////////////
// cards

const cardItems = [
  {
    title: "Translation and Transcreation",
    description:
      "Do you need a human to translate your French or Spanish content into English?",
    link: "accordion.html",
    svgPaths: "1.svg",
  },
  {
    title: "Content Writing",
    description:
      "Do you need written content for your English-speaking audience? Whether it's a news article, a blog post, or content for your website, I can help.",
    link: "tabgallery.html",
    svgPaths: "2.svg",
  },
  {
    title: "Editing and Proofreading",
    description:
      "Do you have some English content that you need a native speaker to take a final look at?",
    link: "review.html",
    svgPaths: "3.svg",
  },
  {
    title: "SEO Localisation",
    description:
      "Need guidance on how to present your content effectively? Schedule a consultation for personalized advice and strategies.",
    link: "review.html",
    svgPaths: "4.svg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let cardHtml = "";

  cardItems.forEach((cardItem) => {
    cardHtml += `
      <div class="card" data-id="${cardItem.id}">
        <div class="card-content">
           <img id="my-svg-image" src=${cardItem.svgPaths} alt="SVG Image" >
          <h3>${cardItem.title}</h3>
          <p>${cardItem.description}</p>
          <a href="#" class="primary-button">Learn more</a>
        </div>
      </div>
    `;
  });
  document.querySelector(".card-container").innerHTML = cardHtml;
});
