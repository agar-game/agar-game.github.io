/**
 * MathPulse K-12 - Master Application Controller (2026 Edition)
 */

import { MATH_TOPICS, GRADE_BANDS, CATEGORIES } from "./data/math-topics.js";
import { storage } from "./modules/storage.js";
import { sounds } from "./audio.js";
import { QuizEngine } from "./modules/quiz-engine.js";

class MathPulseApp {
  constructor() {
    this.quizEngine = new QuizEngine();
    this.init();
  }

  init() {
    this.initTheme();
    this.initNavbarStats();
    this.initSoundToggle();
    this.initMobileNav();
    this.initModalEngine();
    this.listenToCustomEvents();
  }

  // -------------------------------------------------------------------------
  // THEME MANAGEMENT (Dark / Light with 2026 auto-detect)
  // -------------------------------------------------------------------------
  initTheme() {
    const savedTheme = storage.getTheme();
    document.documentElement.setAttribute("data-theme", savedTheme);

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    if (themeToggleBtn) {
      this.updateThemeButtonIcon(themeToggleBtn, savedTheme);
      themeToggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const nextTheme = current === "light" ? "dark" : "light";
        storage.setTheme(nextTheme);
        this.updateThemeButtonIcon(themeToggleBtn, nextTheme);
        sounds.playClick();
      });
    }
  }

  updateThemeButtonIcon(btn, theme) {
    btn.innerHTML = theme === "light" ? "🌙" : "☀️";
    btn.setAttribute("aria-label", `Switch to ${theme === "light" ? "Dark" : "Light"} Mode`);
    btn.title = `Switch to ${theme === "light" ? "Dark" : "Light"} Mode`;
  }

  // -------------------------------------------------------------------------
  // AUDIO TOGGLE
  // -------------------------------------------------------------------------
  initSoundToggle() {
    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      this.updateSoundButtonIcon(soundBtn, sounds.isMuted());
      soundBtn.addEventListener("click", () => {
        const isMuted = sounds.toggleMute();
        this.updateSoundButtonIcon(soundBtn, isMuted);
        if (!isMuted) sounds.playTone(500, "sine", 0.1);
      });
    }
  }

  updateSoundButtonIcon(btn, isMuted) {
    btn.innerHTML = isMuted ? "🔇" : "🔊";
    btn.title = isMuted ? "Unmute sound effects" : "Mute sound effects";
    btn.setAttribute("aria-label", isMuted ? "Unmute sound effects" : "Mute sound effects");
  }

  // -------------------------------------------------------------------------
  // NAVBAR GAMIFIED STATS
  // -------------------------------------------------------------------------
  initNavbarStats() {
    this.updateStatsDisplay();
  }

  updateStatsDisplay() {
    const stats = storage.getStats(MATH_TOPICS.length);

    const starsEl = document.getElementById("nav-stars-count");
    const streakEl = document.getElementById("nav-streak-count");
    const completedEl = document.getElementById("nav-completed-count");

    if (starsEl) starsEl.textContent = stats.stars;
    if (streakEl) streakEl.textContent = `${stats.streak}d`;
    if (completedEl) completedEl.textContent = `${stats.completed}/${MATH_TOPICS.length}`;
  }

  // -------------------------------------------------------------------------
  // MOBILE NAVIGATION DRAWER
  // -------------------------------------------------------------------------
  initMobileNav() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const closeDrawerBtn = document.getElementById("close-drawer-btn");

    if (menuBtn && mobileDrawer) {
      menuBtn.addEventListener("click", () => {
        sounds.playClick();
        mobileDrawer.classList.toggle("open");
      });
    }

    if (closeDrawerBtn && mobileDrawer) {
      closeDrawerBtn.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
      });
    }

    // Close on backdrop click
    document.addEventListener("click", (e) => {
      if (mobileDrawer && mobileDrawer.classList.contains("open")) {
        if (!mobileDrawer.contains(e.target) && !menuBtn.contains(e.target)) {
          mobileDrawer.classList.remove("open");
        }
      }
    });
  }

  // -------------------------------------------------------------------------
  // INTERACTIVE TOPIC MODAL INSPECTOR
  // -------------------------------------------------------------------------
  initModalEngine() {
    const modalBackdrop = document.getElementById("topic-modal");
    const modalContent = document.getElementById("modal-body-content");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    if (!modalBackdrop || !modalContent) return;

    window.openTopicModal = (topicId) => {
      const topic = MATH_TOPICS.find(t => t.id === topicId);
      if (!topic) return;

      sounds.playClick();
      const isBookmarked = storage.isBookmarked(topic.id);
      const isCompleted = storage.isTopicCompleted(topic.id);

      modalContent.innerHTML = `
        <div class="modal-lesson-view">
          <div class="modal-lesson-header">
            <div class="modal-lesson-meta">
              <span class="badge badge-primary">${topic.gradeText}</span>
              <span class="badge badge-category">${topic.category}</span>
              ${isCompleted ? '<span class="badge badge-success">✓ Completed</span>' : ""}
            </div>
            <button class="modal-bookmark-btn ${isBookmarked ? "active" : ""}" id="modal-bm-btn" title="Bookmark topic">
              ${isBookmarked ? "★ Bookmarked" : "☆ Bookmark"}
            </button>
          </div>

          <h2 class="modal-lesson-title">${topic.icon} ${topic.title}</h2>
          <p class="modal-lesson-summary">${topic.summary}</p>

          <div class="modal-card">
            <h4>💡 Core Mathematical Concept</h4>
            <p>${topic.keyConcept}</p>
          </div>

          ${topic.formula ? `
            <div class="modal-formula-box">
              <span class="formula-label">KEY FORMULA / RULE:</span>
              <div class="formula-math">${topic.formula}</div>
            </div>
          ` : ""}

          <div class="modal-card">
            <h4>📝 Step-by-Step Worked Example</h4>
            <div class="example-problem"><strong>Problem:</strong> ${topic.example.problem}</div>
            <details class="example-details" open>
              <summary>Show Solution Walkthrough</summary>
              <ol class="example-steps-list">
                ${topic.example.steps.map(step => `<li>${step}</li>`).join("")}
              </ol>
              <div class="example-final-answer"><strong>Final Answer:</strong> ${topic.example.answer}</div>
            </details>
          </div>

          <div class="modal-card modal-card-realworld">
            <h4>🌍 Real-World Application</h4>
            <p>${topic.realWorld}</p>
          </div>

          <div class="modal-quiz-trigger-zone" id="quiz-mount-point">
            <button class="btn btn-primary btn-lg w-100" id="launch-topic-quiz-btn">
              🎯 Test Your Knowledge (Practice Quiz)
            </button>
          </div>
        </div>
      `;

      // Bookmark button listener
      const bmBtn = modalContent.querySelector("#modal-bm-btn");
      if (bmBtn) {
        bmBtn.addEventListener("click", () => {
          const nowBookmarked = storage.toggleBookmark(topic.id);
          bmBtn.classList.toggle("active", nowBookmarked);
          bmBtn.innerHTML = nowBookmarked ? "★ Bookmarked" : "☆ Bookmark";
          sounds.playClick();
        });
      }

      // Quiz Launch Button
      const quizBtn = modalContent.querySelector("#launch-topic-quiz-btn");
      const quizZone = modalContent.querySelector("#quiz-mount-point");
      if (quizBtn && quizZone) {
        quizBtn.addEventListener("click", () => {
          sounds.playClick();
          this.quizEngine.startQuiz(topic, quizZone);
        });
      }

      modalBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modalBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    };

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeModal);
    }

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
        closeModal();
      }
    });

    window.addEventListener("mathpulse_close_quiz", () => {
      closeModal();
    });
  }

  listenToCustomEvents() {
    window.addEventListener("mathpulse_stats_updated", () => {
      this.updateStatsDisplay();
    });

    // Check URL hash for auto-modal opening
    window.addEventListener("DOMContentLoaded", () => {
      if (window.location.hash) {
        const hashId = window.location.hash.substring(1);
        if (MATH_TOPICS.some(t => t.id === hashId) && typeof window.openTopicModal === "function") {
          setTimeout(() => window.openTopicModal(hashId), 300);
        }
      }
    });
  }
}

// Global bootstrap
export const app = new MathPulseApp();
export { MATH_TOPICS, GRADE_BANDS, CATEGORIES, storage, sounds };
