// ============================================================
//  Nepal Center for Autism Excellence — script.js
//  Fetches data.json and populates all DOM elements dynamically.
// ============================================================

const DATA_URL = "data.json";

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

    if (!name || !inquiry) {
      showFormFeedback("Please fill in your name and message.", "error");
      return;
    }

    const message =
      `Hello, I am *${name}*.\n` +
      `Topic: ${topic}\n\n` +
      `${inquiry}\n\n` +
      `_(Sent via NCAE website)_`;

    const url = buildWaLink(waNumber, message);
    window.open(url, "_blank", "noopener,noreferrer");
    showFormFeedback("Opening WhatsApp… 🎉", "success");
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
  btn.href = buildWaLink(
    number,
    "Hello! I would like to learn more about NCAE programs.",
  );
  btn.setAttribute("aria-label", "Contact us on WhatsApp");
}

// ── Dark mode / contrast toggle ────────────────────────────
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const stored = localStorage.getItem("ncae-theme");
  if (stored === "dark")
    document.documentElement.setAttribute("data-theme", "dark");

  btn.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "light" : "dark",
    );
    localStorage.setItem("ncae-theme", isDark ? "light" : "dark");
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

// ── Main bootstrap ─────────────────────────────────────────
async function init() {
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const { school_info: si, founder, content, programs, stats, testimonials, gallery } = data;

    // ── School meta
    setText("school-name", si.name);
    setText("school-name-footer", si.name);
    setText("school-location", si.location);
    setText("school-tagline", si.tagline);
    setText("school-address", si.address);
    setText("school-email", si.email);
    setHref("footer-email-link", `mailto:${si.email}`);
    setHref("footer-fb-link", si.facebook_page);
    setHref("footer-fb-link-2", si.facebook_page);
    document.title = si.name;

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
      img.src = founder.image_url;
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
    initFloatingWa(si.whatsapp_number);
    initContactForm(si.whatsapp_number);
    initMap(si.map_embed_url);

    // Update any wa-link hrefs
    document.querySelectorAll(".wa-link").forEach((el) => {
      el.href = buildWaLink(si.whatsapp_number);
    });
  } catch (err) {
    console.error("Failed to load data.json:", err);
    // Graceful degradation — static fallback text already in HTML
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initSmoothScroll();
  init();
});
