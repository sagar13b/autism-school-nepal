// ============================================================
//  Siddhartha Autism Care Center — script.js
//  Fetches data.json and populates all DOM elements dynamically.
// ============================================================

const DATA_URL = "data.json";

// ── Language State ─────────────────────────────────────────
let currentLanguage = localStorage.getItem("sacc-language") || "en";
let translationData = null;

// ── Utility: encode text for WhatsApp URL ──────────────────
const waEncode = (text) => encodeURIComponent(text);

// ── Build WhatsApp link ────────────────────────────────────
function buildWaLink(number, message = "") {
  const clean = number.replace(/\D/g, "");
  return `https://wa.me/${clean}${message ? "?text=" + waEncode(message) : ""}`;
}

// ── Populate helpers ───────────────────────────────────────
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setAttr(id, attr, value) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, value);
}

function setHref(id, value) {
  setAttr(id, "href", value);
}

// ── Render Programs grid ───────────────────────────────────
function renderPrograms(programs) {
  const grid = document.getElementById("programs-grid");
  if (!grid) return;
  grid.innerHTML = programs
    .map(
      (p) => `
    <div class="program-card program-card--${p.color}" role="article" aria-label="${p.title} program">
      <div class="program-icon" aria-hidden="true">${p.icon}</div>
      <div class="program-age">${p.age_range}</div>
      <h3 class="program-title">${p.title}</h3>
      <p class="program-desc">${p.description}</p>
    </div>
  `,
    )
    .join("");
}

// ── Render Stats row ───────────────────────────────────────
function renderStats(stats) {
  const row = document.getElementById("stats-row");
  if (!row) return;
  row.innerHTML = stats
    .map(
      (s) => `
    <div class="stat-item">
      <span class="stat-value" aria-label="${s.value} ${s.label}">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `,
    )
    .join("");
}

// ── Render Founder credentials ─────────────────────────────
function renderCredentials(credentials) {
  const list = document.getElementById("founder-credentials");
  if (!list) return;
  list.innerHTML = credentials.map((c) => `<li>${c}</li>`).join("");
}

// ── Render Testimonials ────────────────────────────────────
function renderTestimonials(testimonials) {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;

  if (!testimonials || testimonials.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">No testimonials available yet.</p>';
    return;
  }

  grid.innerHTML = testimonials
    .map(
      (t) => `
    <div class="testimonial-card" role="article">
      <div class="testimonial-quote-icon" aria-hidden="true">"</div>
      <p class="testimonial-text">${t.quote}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar" aria-hidden="true">${t.avatar || "👤"}</div>
        <div class="testimonial-author-info">
          <h4>${t.name}</h4>
          <p class="testimonial-author-role">${t.role}</p>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// ── Render Gallery ─────────────────────────────────────────
function renderGallery(gallery) {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  if (!gallery || gallery.length === 0) {
    grid.innerHTML = `
      <div class="gallery-item">
        <div class="gallery-placeholder" aria-label="No photos available">📸</div>
      </div>
      <div class="gallery-item">
        <div class="gallery-placeholder" aria-label="No photos available">🖼️</div>
      </div>
      <div class="gallery-item">
        <div class="gallery-placeholder" aria-label="No photos available">🎨</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = gallery
    .map(
      (img) => `
    <div class="gallery-item" role="listitem">
      <img src="${img.url}" alt="${img.alt}" loading="lazy" />
      <div class="gallery-item-overlay">
        <p class="gallery-item-caption">${img.caption}</p>
      </div>
    </div>
  `,
    )
    .join("");
}

// ── Contact form → WhatsApp ────────────────────────────────
function initContactForm(waNumber) {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const inquiry = document.getElementById("form-inquiry").value.trim();
    const topic = document.getElementById("form-topic").value;

    // Get current language strings
    const ui = translationData?.ui_strings?.[currentLanguage]?.contact;
    const errorMsg = ui?.validation_error || "Please fill in your name and message.";
    const successMsg = ui?.success_message || "Opening WhatsApp… 🎉";

    if (!name || !inquiry) {
      showFormFeedback(errorMsg, "error");
      return;
    }

    // Use language-specific message template
    let message;
    if (ui?.wa_message_template) {
      message = ui.wa_message_template
        .replace("{name}", name)
        .replace("{topic}", topic)
        .replace("{message}", inquiry);
    } else {
      // Fallback to English
      message =
        `Hello, I am *${name}*.\n` +
        `Topic: ${topic}\n\n` +
        `${inquiry}\n\n` +
        `_(Sent via Siddhartha Autism Care Center website)_`;
    }

    const url = buildWaLink(waNumber, message);
    window.open(url, "_blank", "noopener,noreferrer");
    showFormFeedback(successMsg, "success");
    form.reset();
  });
}

function showFormFeedback(msg, type) {
  let fb = document.getElementById("form-feedback");
  if (!fb) return;
  fb.textContent = msg;
  fb.className = `form-feedback form-feedback--${type}`;
  fb.removeAttribute("hidden");
  setTimeout(() => fb.setAttribute("hidden", ""), 5000);
}

// ── Floating WhatsApp button ───────────────────────────────
function initFloatingWa(number) {
  const btn = document.getElementById("wa-float");
  if (!btn) return;

  // Get language-specific message
  const ui = translationData?.ui_strings?.[currentLanguage]?.contact;
  const message = ui?.wa_float_message || "Hello! I would like to learn more about Siddhartha Autism Care Center programs.";

  btn.href = buildWaLink(number, message);
  btn.setAttribute("aria-label", "Contact us on WhatsApp");
}

// ── Dark mode / contrast toggle ────────────────────────────
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const stored = localStorage.getItem("sacc-theme");
  if (stored === "dark")
    document.documentElement.setAttribute("data-theme", "dark");

  btn.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "light" : "dark",
    );
    localStorage.setItem("sacc-theme", isDark ? "light" : "dark");
    btn.setAttribute("aria-pressed", String(!isDark));
    btn.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
  });

  // Set initial label
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  btn.setAttribute("aria-pressed", String(isDark));
}

// ── Smooth scroll for nav links ────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Move focus to section for accessibility
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });
}

// ── Map embed ──────────────────────────────────────────────
function initMap(url) {
  const frame = document.getElementById("map-frame");
  if (!frame) return;
  // Only set src after page load to avoid blocking render
  frame.src = url;
}

// ── Language Switching ─────────────────────────────────────
function applyTranslations(lang) {
  if (!translationData) return;

  const ui = translationData.ui_strings[lang];
  if (!ui) return;

  // Navigation links
  const navLinks = document.querySelectorAll("nav a");
  if (navLinks.length >= 5) {
    navLinks[0].textContent = ui.nav.about;
    navLinks[1].textContent = ui.nav.programs;
    navLinks[2].textContent = ui.nav.testimonials;
    navLinks[3].textContent = ui.nav.gallery;
    navLinks[4].textContent = ui.nav.contact;
  }

  // Hero badge
  const heroBadge = document.querySelector(".hero-badge");
  if (heroBadge) heroBadge.textContent = ui.hero.badge;

  // Hero CTA buttons
  const ctaButtons = document.querySelectorAll(".hero-cta-group .cta-btn");
  if (ctaButtons.length >= 2) {
    ctaButtons[0].textContent = ui.hero.cta_programs;
    ctaButtons[1].textContent = ui.hero.cta_contact;
  }

  // Contact form labels
  const nameLabel = document.querySelector('label[for="form-name"]');
  if (nameLabel) {
    nameLabel.innerHTML = ui.contact.form_name_label + ' <span aria-hidden="true">*</span>';
  }

  const topicLabel = document.querySelector('label[for="form-topic"]');
  if (topicLabel) topicLabel.textContent = ui.contact.form_topic_label;

  const messageLabel = document.querySelector('label[for="form-inquiry"]');
  if (messageLabel) {
    messageLabel.innerHTML = ui.contact.form_message_label + ' <span aria-hidden="true">*</span>';
  }

  const nameInput = document.getElementById("form-name");
  if (nameInput) nameInput.placeholder = ui.contact.form_name_placeholder;

  const messageInput = document.getElementById("form-inquiry");
  if (messageInput) messageInput.placeholder = ui.contact.form_message_placeholder;

  // Contact form topic options
  const topicSelect = document.getElementById("form-topic");
  if (topicSelect && topicSelect.options.length >= 5) {
    topicSelect.options[0].textContent = ui.contact.topic_enrollment;
    topicSelect.options[1].textContent = ui.contact.topic_general;
    topicSelect.options[2].textContent = ui.contact.topic_therapy;
    topicSelect.options[3].textContent = ui.contact.topic_visit;
    topicSelect.options[4].textContent = ui.contact.topic_general;
  }

  // Contact form submit button
  const submitBtn = document.querySelector("#contact-form button[type='submit'] span");
  if (submitBtn) submitBtn.textContent = ui.contact.form_submit;

  // Contact info labels
  const contactLabels = document.querySelectorAll(".contact-info .info-label");
  if (contactLabels.length >= 3) {
    contactLabels[0].textContent = ui.contact.address_label;
    contactLabels[1].textContent = ui.contact.email_label;
  }

  // Footer navigation links
  const footerNavLinks = document.querySelectorAll(".footer-links a");
  if (footerNavLinks.length >= 5) {
    footerNavLinks[0].textContent = ui.nav.about;
    footerNavLinks[1].textContent = ui.nav.programs;
    footerNavLinks[2].textContent = ui.nav.testimonials;
    footerNavLinks[3].textContent = ui.nav.gallery;
    footerNavLinks[4].textContent = ui.nav.contact;
  }

  // Footer tagline and copyright
  const footerTagline = document.querySelector("footer p[style*='font-size:0.88rem']");
  if (footerTagline) {
    const si = translationData.school_info[currentLanguage];
    if (si) {
      if (currentLanguage === "ne") {
        footerTagline.textContent = si.tagline + " • स्थापना मार्च २०२६";
      } else {
        footerTagline.textContent = si.tagline + " • Established March 2026";
      }
    }
  }

  const footerCopy = document.querySelector(".footer-copy");
  if (footerCopy) {
    const year = new Date().getFullYear();
    const si = translationData.school_info[currentLanguage];
    if (si && currentLanguage === "ne") {
      footerCopy.innerHTML = `© <span id="footer-year">${year}</span> ${si.name}। नेपालका बालबालिका र परिवारहरूको लागि ❤️ सँग निर्मित।`;
    } else if (si) {
      footerCopy.innerHTML = `© <span id="footer-year">${year}</span> ${si.name}. Built with ❤️ for children and families in Nepal.`;
    }
  }
}

function updateMetaTags(lang) {
  if (!translationData) return;

  const si = translationData.school_info[lang];
  const content = translationData.content[lang];

  if (!si || !content) return;

  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Update title
  document.title = si.name;

  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = content.hero_subtitle;

  // Update OG tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = si.name;

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    document.head.appendChild(ogDesc);
  }
  ogDesc.content = content.hero_subtitle;
}

function renderContentWithLanguage(lang) {
  if (!translationData) return;

  const si = translationData.school_info[lang];
  const content = translationData.content[lang];
  const founder = translationData.founder[lang];
  const programs = translationData.programs[lang];
  const stats = translationData.stats[lang];
  const testimonials = translationData.testimonials[lang];
  const gallery = translationData.gallery[lang];

  if (!si || !content || !founder || !programs || !stats || !testimonials || !gallery) return;

  // School info
  setText("school-name", si.name);
  setText("school-name-footer", si.name);
  setText("school-location", si.location);
  setText("school-tagline", si.tagline);
  setText("school-address", si.address);

  // Hero
  setText("hero-title", content.hero_title);
  setText("hero-subtitle", content.hero_subtitle);

  // About
  setText("about-heading", content.about_heading);
  setText("about-body", content.about_body);
  setText("mission-text", content.mission);

  // Founder
  setText("founder-name", founder.name);
  setText("founder-title", founder.title);
  setText("founder-bio", founder.bio);
  renderCredentials(founder.credentials);

  // Section headings
  setText("programs-heading", content.programs_heading);
  setText("testimonials-heading", content.testimonials_heading);
  setText("gallery-heading", content.gallery_heading);
  setText("contact-heading", content.contact_heading);

  // Re-render dynamic content
  renderPrograms(programs);
  renderStats(stats);
  renderTestimonials(testimonials);
  renderGallery(gallery);
}

function switchLanguage(lang) {
  if (!translationData || !translationData.ui_strings[lang]) return;

  currentLanguage = lang;
  localStorage.setItem("sacc-language", lang);

  // Update all content
  updateMetaTags(lang);
  renderContentWithLanguage(lang);
  applyTranslations(lang);

  // Update WhatsApp messages
  const ui = translationData.ui_strings[lang];
  const waNumber = translationData.school_info.whatsapp_number;

  if (ui && waNumber) {
    // Update floating WhatsApp button
    const waBtn = document.getElementById("wa-float");
    if (waBtn) {
      waBtn.href = buildWaLink(waNumber, ui.contact.wa_float_message);
    }
  }
}

function initLanguageToggle() {
  const btn = document.getElementById("language-toggle");
  if (!btn) return;

  // Set initial button text and state
  updateLanguageButton(btn, currentLanguage);

  // Listen for clicks
  btn.addEventListener("click", () => {
    const newLang = currentLanguage === "en" ? "ne" : "en";
    switchLanguage(newLang);
    updateLanguageButton(btn, newLang);
  });
}

function updateLanguageButton(btn, lang) {
  if (lang === "ne") {
    btn.textContent = "🇳🇵 नेपाली";
    btn.setAttribute("aria-pressed", "true");
  } else {
    btn.textContent = "🇬🇧 English";
    btn.setAttribute("aria-pressed", "false");
  }
}

// ── Main bootstrap ─────────────────────────────────────────
async function init() {
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Store data globally for language switching
    translationData = data;

    // Extract language-specific data
    const si = data.school_info[currentLanguage];
    const founder = data.founder[currentLanguage];
    const content = data.content[currentLanguage];
    const programs = data.programs[currentLanguage];
    const stats = data.stats[currentLanguage];
    const testimonials = data.testimonials[currentLanguage];
    const gallery = data.gallery[currentLanguage];

    // Language-independent data
    const siCommon = data.school_info;
    const founderCommon = data.founder;

    // ── School meta
    setText("school-name", si.name);
    setText("school-name-footer", si.name);
    setText("school-location", si.location);
    setText("school-tagline", si.tagline);
    setText("school-address", si.address);
    setText("school-email", siCommon.email);
    setHref("footer-email-link", `mailto:${siCommon.email}`);
    setHref("footer-fb-link", siCommon.facebook_page);
    setHref("footer-fb-link-2", siCommon.facebook_page);
    document.title = si.name;

    // ── Logo
    if (siCommon.logo_url) {
      const logoImg = document.getElementById("header-logo");
      if (logoImg) {
        logoImg.src = siCommon.logo_url;
        logoImg.alt = `${si.name} Logo`;
      }
    }

    // ── Hero
    setText("hero-title", content.hero_title);
    setText("hero-subtitle", content.hero_subtitle);

    // ── About
    setText("about-heading", content.about_heading);
    setText("about-body", content.about_body);
    setText("mission-text", content.mission);

    // ── Founder
    setText("founder-name", founder.name);
    setText("founder-title", founder.title);
    setText("founder-bio", founder.bio);
    const img = document.getElementById("founder-img");
    if (img) {
      img.src = founderCommon.image_url;
      img.alt = `Portrait of ${founder.name}`;
    }
    renderCredentials(founder.credentials);

    // ── Programs
    setText("programs-heading", content.programs_heading);
    renderPrograms(programs);

    // ── Stats
    renderStats(stats);

    // ── Testimonials
    setText("testimonials-heading", content.testimonials_heading || "Testimonials");
    renderTestimonials(testimonials);

    // ── Gallery
    setText("gallery-heading", content.gallery_heading || "Photo Gallery");
    renderGallery(gallery);

    // ── Contact
    setText("contact-heading", content.contact_heading);

    // ── Interactive
    initFloatingWa(siCommon.whatsapp_number);
    initContactForm(siCommon.whatsapp_number);
    initMap(siCommon.map_embed_url);

    // Update any wa-link hrefs
    document.querySelectorAll(".wa-link").forEach((el) => {
      el.href = buildWaLink(siCommon.whatsapp_number);
    });

    // Apply UI translations
    applyTranslations(currentLanguage);
    updateMetaTags(currentLanguage);
  } catch (err) {
    console.error("Failed to load data.json:", err);
    // Graceful degradation — static fallback text already in HTML
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initLanguageToggle();
  initSmoothScroll();
  init();
});
