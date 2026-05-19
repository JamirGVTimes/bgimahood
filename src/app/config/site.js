export const SITE_URL = "https://bgimahood.com";
export const SITE_NAME = "Bgimahood Technologies";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const contactDetails = {
  phone: "+256 768 683 090",
  email: "info@bgimahood.com",
  location: "Kampala, Uganda",
  whatsapp:
    "https://wa.me/256768683090?text=Hello%20Bgimahood%20Technologies,%20I%E2%80%99m%20interested%20in%20your%20software%20and%20event%20services.",
};

export const pages = [
  {
    label: "Home",
    path: "/",
    title: "Bgimahood Technologies | Software, Events & Online Services Uganda",
    description:
      "Bgimahood Technologies is a Uganda-based technology company offering custom software development, sound systems, event management, and online government services.",
    keywords:
      "Bgimahood Technologies, software development Uganda, sound system hire Uganda, event management Kampala, URA TIN registration, URSB registration",
    nav: true,
  },
  {
    label: "About",
    path: "/about",
    title: "About Bgimahood Technologies | Uganda Technology Company",
    description:
      "Learn about Bgimahood Technologies, a registered Ugandan company delivering software, events, sound systems, and government online service support since 2022.",
    keywords:
      "about Bgimahood Technologies, Uganda technology company, Kampala software company, registered company Uganda",
    nav: true,
  },
  {
    label: "Services",
    path: "/services",
    title: "Software & Digital Services in Uganda | Bgimahood Technologies",
    description:
      "Explore Bgimahood Technologies services including web applications, SaaS platforms, APIs, portals, workflow automation, sound systems, events, and e-government support.",
    keywords:
      "software services Uganda, web app development Kampala, SaaS development Uganda, API development, workflow automation Uganda",
    nav: true,
  },
  {
    label: "Sound & Events",
    path: "/sound-and-events",
    title: "Sound System Hire & Event Management Uganda | Bgimahood",
    description:
      "Hire professional Admark sound systems and event management support for weddings, corporate events, concerts, church services, and outdoor functions in Uganda.",
    keywords:
      "sound system hire Uganda, Admark speakers Uganda, event management Kampala, wedding sound hire, corporate event sound",
    nav: true,
  },
  {
    label: "Online Services",
    path: "/online-services",
    title: "URA, URSB, NIRA & Online Government Services Uganda | Bgimahood",
    description:
      "Fast assistance with URA TIN registration, tax returns, vehicle logbook transfers, URSB company registration, NIRA, NSSF, and other online services in Uganda.",
    keywords:
      "URA TIN registration Uganda, tax return filing Uganda, logbook transfer Uganda, URSB company registration, NIRA services",
    nav: true,
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    title: "Portfolio | Web Apps, SaaS & Digital Projects by Bgimahood",
    description:
      "View selected software, portal, SaaS, real-time application, and event technology projects delivered by Bgimahood Technologies in Uganda and East Africa.",
    keywords:
      "Bgimahood portfolio, software projects Uganda, web app portfolio, SaaS projects Uganda, digital projects Kampala",
    nav: true,
  },
  {
    label: "Team",
    path: "/team",
    title: "Our Team | Bgimahood Technologies Uganda",
    description:
      "Meet the developers, designers, event specialists, and online service experts behind Bgimahood Technologies in Uganda.",
    keywords:
      "Bgimahood team, software developers Uganda, event specialists Kampala, technology team Uganda",
    nav: true,
  },
  {
    label: "Contact",
    path: "/contact",
    title: "Contact Bgimahood Technologies | Free Quote in Uganda",
    description:
      "Contact Bgimahood Technologies in Kampala, Uganda for software development, sound system hire, event management, and online government service support.",
    keywords:
      "contact Bgimahood Technologies, software quote Uganda, sound hire quote Kampala, event management quote, Bgimahood phone",
    nav: true,
  },
];

export const navLinks = pages.filter((page) => page.nav);

export const notFoundPage = {
  label: "Not Found",
  path: "/404",
  title: "Page Not Found | Bgimahood Technologies",
  description:
    "The Bgimahood Technologies page you requested could not be found. Visit the homepage or contact our team for assistance.",
  keywords: "Bgimahood Technologies, page not found",
};

export function getPageByPath(pathname) {
  const normalized =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;

  return pages.find((page) => page.path === normalized) || notFoundPage;
}

export function getCanonicalUrl(path) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
