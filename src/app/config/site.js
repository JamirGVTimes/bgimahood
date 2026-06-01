function getEnvValue(key) {
  const viteEnv =
    typeof import.meta !== "undefined" && import.meta.env
      ? import.meta.env
      : {};
  const nodeEnv = typeof process !== "undefined" ? process.env : {};

  return viteEnv[key] || nodeEnv[key] || "";
}

function normalizeSiteUrl(url) {
  return url.replace(/\/+$/, "");
}

export const SITE_URL = normalizeSiteUrl(
  getEnvValue("VITE_SITE_URL") || "https://bgimahood.com",
);
export const SITE_NAME = "Bgimahood Technologies";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/home.jpg`;

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
    title: "Bgimahood Technologies | Software, Events & Sound Systems Uganda",
    description:
      "Bgimahood Technologies is a Uganda-based technology company offering custom software development, software products, sound systems, and event management.",
    keywords:
      "Bgimahood Technologies, software development Uganda, software products Uganda, sound system hire Uganda, event management Kampala",
    ogImage: `${SITE_URL}/og/home.jpg`,
    nav: true,
  },
  {
    label: "About",
    path: "/about",
    title: "About Bgimahood Technologies | Uganda Technology Company",
    description:
      "Learn about Bgimahood Technologies, a registered Ugandan company delivering software products, events, and sound systems since 2022.",
    keywords:
      "about Bgimahood Technologies, Uganda technology company, Kampala software company, registered company Uganda",
    ogImage: `${SITE_URL}/og/about.jpg`,
    nav: true,
  },
  {
    label: "Services",
    path: "/services",
    title: "Software & Digital Services in Uganda | Bgimahood Technologies",
    description:
      "Explore Bgimahood Technologies services including web applications, SaaS platforms, APIs, portals, workflow automation, sound systems, and events.",
    keywords:
      "software services Uganda, web app development Kampala, SaaS development Uganda, API development, workflow automation Uganda",
    ogImage: `${SITE_URL}/og/services.jpg`,
    nav: true,
  },
  {
    label: "Booking",
    path: "/book-sound-system",
    title: "Book a Sound System or Event Management now | Bgimahood",
    description:
      "Hire professional sound systems and event management support for weddings, corporate events, concerts, School parties, church services, and outdoor functions in Uganda.",
    keywords:
      "sound system hire Uganda, speakers Uganda, event management Kampala, wedding sound hire, corporate event sound",
    ogImage: `${SITE_URL}/og/booking.jpg`,
    nav: true,
  },
  {
    label: "Products",
    path: "/products",
    title: "Products | Software Platforms by Bgimahood Technologies",
    description:
      "Explore Bgimahood Technologies software products, APIs, dashboards, integrations, and platforms built with React, Next.js, Node.js, MongoDB, and Firebase.",
    keywords:
      "software products Uganda, API development Uganda, React developer Kampala, Node.js APIs Uganda, Next.js apps, MongoDB Firebase software",
    ogImage: `${SITE_URL}/og/products.jpg`,
    nav: true,
  },
  {
    label: "Team",
    path: "/team",
    title: "Our Team | Bgimahood Technologies Uganda",
    description:
      "Meet the developers, designers, product specialists, and event experts behind Bgimahood Technologies in Uganda.",
    keywords:
      "Bgimahood team, software developers Uganda, event specialists Kampala, technology team Uganda",
    ogImage: `${SITE_URL}/og/team.jpg`,
    nav: true,
  },
  {
    label: "Contact",
    path: "/contact",
    title: "Contact Bgimahood Technologies | Free Quote in Uganda",
    description:
      "Contact Bgimahood Technologies in Kampala, Uganda for software development, software products, sound system hire, and event management.",
    keywords:
      "contact Bgimahood Technologies, software quote Uganda, website development, Web app development, Software Engineers, Full-stack Developers, sound hire quote Kampala, sound engineers, event management quote, Bgimahood phone",
    ogImage: `${SITE_URL}/og/contact.jpg`,
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
  ogImage: DEFAULT_OG_IMAGE,
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
