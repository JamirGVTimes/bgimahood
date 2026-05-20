import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  contactDetails,
  getCanonicalUrl,
  getPageByPath,
  navLinks,
} from "../config/site.js";

function upsertMeta(attribute, key, content) {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function upsertJsonLd(page, canonicalUrl) {
  const id = "bgimahood-structured-data";
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/bgimahood_logo.png`,
    image: page.ogImage || DEFAULT_OG_IMAGE,
    description: page.description,
    telephone: contactDetails.phone,
    email: contactDetails.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    areaServed: ["Uganda", "East Africa"],
    makesOffer: [
      "Software Development",
      "Sound System Hire",
      "Event Management",
      "Online Government Services",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: page.title,
    description: page.description,
    image: page.ogImage || DEFAULT_OG_IMAGE,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  };

  const siteNavigation = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: navLinks.map((link) => link.label),
    url: navLinks.map((link) => getCanonicalUrl(link.path)),
  };

  script.textContent = JSON.stringify([organization, webPage, siteNavigation]);
}

export function SEO() {
  const location = useLocation();

  useEffect(() => {
    const page = getPageByPath(location.pathname);
    const canonicalUrl = getCanonicalUrl(page.path);
    const ogImage = page.ogImage || DEFAULT_OG_IMAGE;
    const isNotFound = page.path === "/404";

    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "keywords", page.keywords);
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta(
      "name",
      "robots",
      isNotFound ? "noindex, follow" : "index, follow",
    );
    upsertMeta("name", "theme-color", "#071921");

    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:secure_url", ogImage);
    upsertMeta("property", "og:image:type", "image/png");
    upsertMeta("property", "og:image:width", "1536");
    upsertMeta("property", "og:image:height", "1024");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertCanonical(canonicalUrl);
    upsertJsonLd(page, canonicalUrl);
  }, [location.pathname]);

  return null;
}
