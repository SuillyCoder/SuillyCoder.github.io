// ============================================================
// RESUME INTERACTIVE JAVASCRIPT
// Jesus Lorenzo C. Basuil
// ============================================================

// ============================================================
// SECTION 1: EDUCATION — Click to visit school page
// ============================================================
const educationLinks = {
  "University of San Carlos; Talamban Campus": "https://www.usc.edu.ph/",
  "Don Bosco Technical College Cebu, Inc.": "https://dbtc-cebu.edu.ph/"
};

function initEducationLinks() {
  document.querySelectorAll(".section:has(.entry) .entry").forEach(entry => {
    const titleEl = entry.querySelector(".entry-title");
    if (!titleEl) return;

    const name = titleEl.textContent.trim();
    const url = educationLinks[name];
    if (!url) return;

    entry.style.cursor = "pointer";
    entry.setAttribute("title", `Visit ${name}`);
    entry.addEventListener("click", () => window.open(url, "_blank"));
  });
}

// ============================================================
// SECTION 2: SKILLS — Click skill tag to open its docs
// ============================================================
const skillLinks = {
  // Frontend & Frameworks
  "HTML5": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "React": "https://react.dev/",
  "NextJS": "https://nextjs.org/docs",
  "Tailwind CSS": "https://tailwindcss.com/docs",

  // Backend
  "Python": "https://docs.python.org/3/",
  "C": "https://en.cppreference.com/w/c",
  "Java": "https://docs.oracle.com/en/java/",
  "Javascript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",

  // Data Analysis
  "Numpy": "https://numpy.org/doc/",
  "Matplotlib": "https://matplotlib.org/stable/index.html",
  "Pandas": "https://pandas.pydata.org/docs/",
  "Seaborn": "https://seaborn.pydata.org/",

  // Database
  "MySQL": "https://dev.mysql.com/doc/",
  "Prisma": "https://www.prisma.io/docs",
  "Firebase": "https://firebase.google.com/docs",
  "Supabase": "https://supabase.com/docs",

  // Circuitry
  "KiCad 9.0": "https://docs.kicad.org/",
  "Proteus 8.17": "https://www.labcenter.com/",
  "TinkerCad": "https://www.tinkercad.com/",

  // Miscellaneous Software
  "Github": "https://docs.github.com/en",
  "Jira": "https://support.atlassian.com/jira-software-cloud/",
  "Postman": "https://learning.postman.com/docs/"
};

function initSkillTags() {
  document.querySelectorAll(".skill-category:not(.full-width) .skill-tag").forEach(tag => {
    const skill = tag.textContent.trim();
    const url = skillLinks[skill];
    if (!url) return;

    tag.style.cursor = "pointer";
    tag.setAttribute("title", `View ${skill} documentation`);

    tag.addEventListener("click", () => window.open(url, "_blank"));

    // Hover color boost
    tag.addEventListener("mouseenter", () => {
      tag.style.background = "linear-gradient(135deg, #4a9eff 0%, #2563eb 100%)";
      tag.style.color = "#ffffff";
      tag.style.borderColor = "#2563eb";
      tag.style.transform = "translateY(-2px)";
      tag.style.boxShadow = "0 4px 12px rgba(74, 158, 255, 0.4)";
    });
    tag.addEventListener("mouseleave", () => {
      tag.style.background = "";
      tag.style.color = "";
      tag.style.borderColor = "";
      tag.style.transform = "";
      tag.style.boxShadow = "";
    });
  });
}

// ============================================================
// SECTION 3: ORGANIZATIONS — Click to visit org page
// ============================================================
const orgLinks = {
  "USC Computer Engineering Council (CPEC)": "https://www.facebook.com/USCCpEC/",
  "USC Computer Driven Enthusiasts (CoDE)": "https://www.facebook.com/USCCoDE/",
  "USC Innovare Competition Guild": "https://www.facebook.com/USCInnovare/",
  "USC Google Developers on Campus (GDGoC)": "https://gdg.community.dev/gdg-on-campus-university-of-san-carlos-cebu-city-philippines/"
};

function initOrgLinks() {
  const orgSection = [...document.querySelectorAll(".section")].find(s =>
    s.querySelector(".section-title")?.textContent.trim() === "ORGANIZATIONS"
  );
  if (!orgSection) return;

  orgSection.querySelectorAll(".entry").forEach(entry => {
    const titleEl = entry.querySelector(".entry-title");
    if (!titleEl) return;

    const name = titleEl.textContent.trim();
    const url = orgLinks[name];
    if (!url) return;

    entry.style.cursor = "pointer";
    entry.setAttribute("title", `Visit ${name}`);
    entry.addEventListener("click", () => window.open(url, "_blank"));
  });
}

// ============================================================
// SECTION 4: PROFESSIONAL EXPERIENCE — Click to open photo popup
// ============================================================

// TODO: Replace these placeholder image paths with your actual job photos
const experiencePhotos = {
  "Cebu City Hall: OBO Department": {
    image: "/Assets/OBO.jpg",     // ← replace with your actual image file
    caption: "Work Immersion at Cebu City Hall OBO Department"
  },
  "Don Bosco Technical College, Cebu Inc.": {
    image: "/Assets/Harmuni.png",    // ← replace with your actual image file
    caption: "Harmuni 2022 – Program Head, Don Bosco Technical College"
  }
};

function createPhotoModal() {
  const modal = document.createElement("div");
  modal.id = "photo-modal";
  modal.innerHTML = `
    <div id="photo-modal-overlay">
      <div id="photo-modal-card">
        <button id="photo-modal-close" title="Close">✕</button>
        <img id="photo-modal-img" src="" alt="Experience Photo" />
        <p id="photo-modal-caption"></p>
      </div>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = `
    #photo-modal {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 9999;
    }
    #photo-modal-overlay {
      width: 100%; height: 100%;
      background: rgba(10, 22, 40, 0.85);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.25s ease;
    }
    #photo-modal-card {
      background: #ffffff;
      border-radius: 14px;
      padding: 28px;
      max-width: 480px;
      width: 90%;
      box-shadow: 0 24px 64px rgba(0,0,0,0.5);
      position: relative;
      text-align: center;
      animation: slideUp 0.3s ease;
    }
    #photo-modal-close {
      position: absolute;
      top: 12px; right: 14px;
      background: #eff6ff;
      border: none;
      color: #1e3a5f;
      font-size: 1.1em;
      width: 32px; height: 32px;
      border-radius: 50%;
      cursor: pointer;
      font-weight: 700;
      transition: background 0.2s;
    }
    #photo-modal-close:hover { background: #bae6fd; }
    #photo-modal-img {
      width: 100%;
      max-height: 320px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 14px;
      border: 3px solid #4a9eff;
    }
    #photo-modal-caption {
      color: #475569;
      font-size: 0.95em;
      font-weight: 600;
      font-family: 'Segoe UI', sans-serif;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  `;

  document.head.appendChild(style);
  document.body.appendChild(modal);

  document.getElementById("photo-modal-close").addEventListener("click", closePhotoModal);
  document.getElementById("photo-modal-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("photo-modal-overlay")) closePhotoModal();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closePhotoModal(); });
}

function openPhotoModal(imageSrc, caption) {
  document.getElementById("photo-modal-img").src = imageSrc;
  document.getElementById("photo-modal-caption").textContent = caption;
  document.getElementById("photo-modal").style.display = "block";
}

function closePhotoModal() {
  document.getElementById("photo-modal").style.display = "none";
}

function initExperiencePhotos() {
  const expSection = [...document.querySelectorAll(".section")].find(s =>
    s.querySelector(".section-title")?.textContent.trim() === "PROFESSIONAL EXPERIENCE"
  );
  if (!expSection) return;

  expSection.querySelectorAll(".entry").forEach(entry => {
    const titleEl = entry.querySelector(".entry-title");
    if (!titleEl) return;

    const name = titleEl.textContent.trim();
    const data = experiencePhotos[name];
    if (!data) return;

    entry.style.cursor = "pointer";
    entry.setAttribute("title", "Click to see a photo from this experience");

    // Small hint badge
    const badge = document.createElement("span");
    badge.textContent = "📷 View Photo";
    badge.style.cssText = `
      display: inline-block;
      margin-top: 10px;
      font-size: 0.8em;
      color: #3b82f6;
      font-weight: 600;
      background: #eff6ff;
      padding: 3px 10px;
      border-radius: 20px;
      border: 1px solid #bae6fd;
    `;
    entry.appendChild(badge);

    entry.addEventListener("click", () => openPhotoModal(data.image, data.caption));
  });
}

// ============================================================
// SECTION 5: SOFTWARE PROJECTS — Click to open GitHub repo
// ============================================================
// These already use <a> tags in experience.html, so this just
// enhances the whole entry card to be clickable too.

function initProjectLinks() {
  document.querySelectorAll(".project-entry").forEach(entry => {
    const link = entry.querySelector(".project-link");
    if (!link) return;

    const url = link.href;
    entry.style.cursor = "pointer";
    entry.setAttribute("title", `View on GitHub: ${link.textContent.trim()}`);

    entry.addEventListener("click", e => {
      // Avoid double-firing when the <a> itself is clicked
      if (e.target.closest(".project-link")) return;
      window.open(url, "_blank");
    });
  });
}

// ============================================================
// SECTION 6: SOCIAL LINKS — Already <a> tags; add hover glow
// ============================================================
function initSocialButtons() {
  document.querySelectorAll(".social-btn").forEach(btn => {
    // Assign distinct hover colors per platform
    const text = btn.textContent.trim().toLowerCase();
    const colors = {
      github:   { bg: "linear-gradient(135deg, #24292e, #444d56)", shadow: "rgba(36,41,46,0.5)" },
      linkedin: { bg: "linear-gradient(135deg, #0a66c2, #004182)", shadow: "rgba(10,102,194,0.5)" },
      facebook: { bg: "linear-gradient(135deg, #1877f2, #0c5dd4)", shadow: "rgba(24,119,242,0.5)" }
    };

    const key = Object.keys(colors).find(k => text.includes(k));
    if (!key) return;

    btn.addEventListener("mouseenter", () => {
      btn.style.background = colors[key].bg;
      btn.style.boxShadow = `0 6px 20px ${colors[key].shadow}`;
      btn.style.transform = "translateY(-3px) scale(1.04)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.background = "";
      btn.style.boxShadow = "";
      btn.style.transform = "";
    });
  });
}

// ============================================================
// SECTION 7: CARD HOVER COLORS — Entry cards pulse accent
// ============================================================
function initCardHoverEffects() {
  document.querySelectorAll(".entry").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.borderLeftColor = "#87ceeb";
      card.style.boxShadow = "0 6px 24px rgba(74, 158, 255, 0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.borderLeftColor = "";
      card.style.boxShadow = "";
    });
  });
}

// ============================================================
// INIT — Run everything on DOM ready
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  createPhotoModal();       // Must be first (modal DOM setup)

  initEducationLinks();
  initSkillTags();
  initOrgLinks();
  initExperiencePhotos();
  initProjectLinks();
  initSocialButtons();
  initCardHoverEffects();
});