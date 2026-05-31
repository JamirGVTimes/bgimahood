import { mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const outputDir = path.join(root, "public", "og");
const logoUrl = pathToFileURL(path.join(root, "public", "bgimahood_logo.png"));

const routes = [
  {
    slug: "home",
    title: "BGIMAHOOD TECHNOLOGIES",
    eyebrow: "SOFTWARE • EVENTS • SOUND",
    description:
      "All-in-one technology partner for software, events, professional sound, and online services in Uganda.",
    features: [
      ["SOFTWARE", "Custom systems"],
      ["EVENTS", "Seamless planning"],
      ["SOUND", "Clear powerful audio"],
    ],
    accent: "#ff9800",
  },
  {
    slug: "about",
    title: "ABOUT BGIMAHOOD",
    eyebrow: "REGISTERED UGANDA TECHNOLOGY COMPANY",
    description:
      "A trusted team building digital products, event experiences, and government online service support since 2022.",
    features: [
      ["2022", "Registered company"],
      ["150+", "Happy clients"],
      ["UGANDA", "Local expertise"],
    ],
    accent: "#00d4ff",
  },
  {
    slug: "services",
    title: "SOFTWARE & DIGITAL SERVICES",
    eyebrow: "WEB APPS • SAAS • APIS",
    description:
      "Modern software, dashboards, portals, workflow automation, cloud applications, and payment integrations.",
    features: [
      ["WEB APPS", "Responsive builds"],
      ["SAAS", "Scalable products"],
      ["APIS", "Clean integrations"],
    ],
    accent: "#10b981",
  },
  {
    slug: "booking",
    title: "BOOKING",
    eyebrow: "ADMARK BASS • WEDDINGS • CORPORATE EVENTS",
    description:
      "Professional sound systems and event management for weddings, concerts, conferences, and outdoor functions.",
    features: [
      ["ADMARK", "Bass box power"],
      ["EVENTS", "Full coordination"],
      ["AUDIO", "Clear sound"],
    ],
    accent: "#ff9800",
  },
  {
    slug: "online-services",
    title: "ONLINE GOVERNMENT SERVICES",
    eyebrow: "URA • URSB • NIRA • NSSF",
    description:
      "Fast assistance with TIN registration, tax returns, logbook transfers, company registration, and online forms.",
    features: [
      ["URA", "TIN and returns"],
      ["URSB", "Business support"],
      ["NIRA", "ID services"],
    ],
    accent: "#10b981",
  },
  {
    slug: "portfolio",
    title: "PROJECT PORTFOLIO",
    eyebrow: "WEB APPS • PORTALS • SAAS",
    description:
      "Selected technology projects, dashboards, portals, SaaS products, and real-time systems built for East Africa.",
    features: [
      ["DASHBOARDS", "Data clarity"],
      ["PORTALS", "Business workflows"],
      ["REAL-TIME", "Live systems"],
    ],
    accent: "#00d4ff",
  },
  {
    slug: "team",
    title: "MEET THE TEAM",
    eyebrow: "DEVELOPERS • DESIGNERS • EVENT SPECIALISTS",
    description:
      "The people behind Bgimahood Technologies: software engineers, designers, project leads, and service experts.",
    features: [
      ["CODE", "React and APIs"],
      ["DESIGN", "Clean interfaces"],
      ["SERVICE", "Client support"],
    ],
    accent: "#ff9800",
  },
  {
    slug: "contact",
    title: "CONTACT BGIMAHOOD",
    eyebrow: "KAMPALA • UGANDA • EAST AFRICA",
    description:
      "Talk to us for software development, sound system hire, event management, and online service support.",
    features: [
      ["PHONE", "+256 768 683 090"],
      ["EMAIL", "info@bgimahood.com"],
      ["QUOTE", "Free consultation"],
    ],
    accent: "#00d4ff",
  },
];

const template = (route) => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        width: 1536px;
        height: 1024px;
        overflow: hidden;
        background:
          radial-gradient(circle at 18% 82%, rgba(0, 212, 255, 0.32), transparent 31%),
          radial-gradient(circle at 86% 70%, rgba(255, 152, 0, 0.28), transparent 29%),
          linear-gradient(135deg, #02090b 0%, #06242d 50%, #02090b 100%);
        color: white;
        font-family: "DejaVu Sans", Arial, sans-serif;
      }
      .frame {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 74px 110px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .frame::before,
      .frame::after {
        content: "";
        position: absolute;
        bottom: 78px;
        width: 520px;
        height: 420px;
        border-radius: 50%;
        opacity: 0.55;
        filter: blur(0.2px);
        background-image:
          repeating-radial-gradient(ellipse at center, transparent 0 25px, rgba(0, 212, 255, 0.32) 26px 27px, transparent 28px 44px);
      }
      .frame::before {
        left: -170px;
        transform: rotate(-18deg);
      }
      .frame::after {
        right: -170px;
        transform: rotate(18deg);
        background-image:
          repeating-radial-gradient(ellipse at center, transparent 0 25px, rgba(255, 152, 0, 0.32) 26px 27px, transparent 28px 44px);
      }
      .dots {
        position: absolute;
        inset: 0;
        background-image:
          radial-gradient(circle, rgba(0, 212, 255, 0.5) 0 2px, transparent 3px),
          radial-gradient(circle, rgba(255, 152, 0, 0.45) 0 2px, transparent 3px);
        background-size: 86px 86px, 112px 112px;
        background-position: 20px 90px, 52px 24px;
        opacity: 0.12;
      }
      .logo {
        width: 280px;
        height: 150px;
        object-fit: cover;
        object-position: center;
        margin-bottom: 20px;
        filter: drop-shadow(0 0 26px rgba(0, 212, 255, 0.3));
      }
      .brand {
        display: flex;
        align-items: baseline;
        gap: 26px;
        margin-bottom: 30px;
        text-shadow: 0 12px 30px rgba(0, 0, 0, 0.75);
      }
      .brand-main {
        font-size: 62px;
        line-height: 1;
        font-weight: 900;
        letter-spacing: 6px;
      }
      .brand-accent {
        font-size: 62px;
        line-height: 1;
        font-weight: 900;
        letter-spacing: 4px;
        color: ${route.accent};
      }
      .eyebrow {
        display: flex;
        align-items: center;
        gap: 26px;
        color: #f4f7f8;
        font-size: 28px;
        font-weight: 800;
        letter-spacing: 12px;
        margin-bottom: 28px;
      }
      .eyebrow::before,
      .eyebrow::after {
        content: "";
        width: 120px;
        height: 3px;
        border-radius: 999px;
        background: linear-gradient(90deg, transparent, #00d4ff);
      }
      .eyebrow::after {
        background: linear-gradient(90deg, ${route.accent}, transparent);
      }
      .title {
        max-width: 1120px;
        margin: 0 auto 22px;
        text-align: center;
        font-size: 58px;
        line-height: 1.08;
        font-weight: 900;
        letter-spacing: 2px;
      }
      .description {
        max-width: 980px;
        margin: 0 auto 46px;
        text-align: center;
        color: #f3f7f8;
        font-size: 30px;
        line-height: 1.42;
        text-shadow: 0 8px 22px rgba(0, 0, 0, 0.9);
      }
      .features {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 34px;
        width: 100%;
        max-width: 1160px;
        z-index: 1;
      }
      .feature {
        min-height: 142px;
        display: grid;
        grid-template-columns: 94px 1fr;
        align-items: center;
        gap: 22px;
        padding: 22px 26px;
        border-left: 3px solid rgba(0, 212, 255, 0.8);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025));
        border-radius: 22px;
        box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
      }
      .icon {
        width: 86px;
        height: 86px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        border: 3px solid ${route.accent};
        color: ${route.accent};
        font-size: 38px;
        font-weight: 900;
      }
      .feature-title {
        color: ${route.accent};
        font-size: 25px;
        font-weight: 900;
        letter-spacing: 2px;
        margin-bottom: 8px;
      }
      .feature-text {
        color: #ffffff;
        font-size: 21px;
        line-height: 1.25;
      }
      .tagline {
        position: absolute;
        bottom: 34px;
        left: 0;
        right: 0;
        text-align: center;
        color: #ffffff;
        font-size: 24px;
        font-weight: 900;
        letter-spacing: 16px;
      }
      .tagline span {
        color: ${route.accent};
      }
    </style>
  </head>
  <body>
    <div class="frame">
      <div class="dots"></div>
      <img class="logo" src="${logoUrl.href}" alt="" />
      <div class="brand">
        <div class="brand-main">BGIMAHOOD</div>
        <div class="brand-accent">TECHNOLOGIES</div>
      </div>
      <div class="eyebrow">${route.eyebrow}</div>
      <h1 class="title">${route.title}</h1>
      <p class="description">${route.description}</p>
      <div class="features">
        ${route.features
          .map(
            ([title, text]) => `
              <div class="feature">
                <div class="icon">${title.slice(0, 2)}</div>
                <div>
                  <div class="feature-title">${title}</div>
                  <div class="feature-text">${text}</div>
                </div>
              </div>`,
          )
          .join("")}
      </div>
      <div class="tagline">INNOVATE <span>•</span> INSPIRE <span>•</span> ELEVATE</div>
    </div>
  </body>
</html>`;

mkdirSync(outputDir, { recursive: true });

for (const route of routes) {
  const htmlPath = path.join(tmpdir(), `bgimahood-og-${route.slug}.html`);
  const outputPath = path.join(outputDir, `${route.slug}.png`);

  writeFileSync(htmlPath, template(route), "utf8");

  const result = spawnSync(
    "google-chrome",
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--hide-scrollbars",
      "--window-size=1536,1024",
      `--screenshot=${outputPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "inherit" },
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
