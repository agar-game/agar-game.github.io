/**
 * MathPulse K-12 - Progress & Storage Manager
 * Uses localStorage with sensible defaults and error resilience.
 */

const STORAGE_KEYS = {
  STARS: "mathpulse_stars",
  COMPLETED: "mathpulse_completed_topics",
  BOOKMARKS: "mathpulse_bookmarks",
  STREAK_COUNT: "mathpulse_streak_count",
  LAST_ACTIVE_DATE: "mathpulse_last_active_date",
  QUIZ_HISTORY: "mathpulse_quiz_history",
  THEME: "mathpulse_theme"
};

class StorageManager {
  constructor() {
    this.checkStreak();
  }

  // ---- STARS & XP ----
  getStars() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.STARS) || "0", 10);
  }

  addStars(amount = 10) {
    const current = this.getStars();
    const updated = current + amount;
    localStorage.setItem(STORAGE_KEYS.STARS, updated.toString());
    this.recordActivity();
    window.dispatchEvent(new CustomEvent("mathpulse_stats_updated", { detail: { stars: updated } }));
    return updated;
  }

  // ---- TOPIC COMPLETION ----
  getCompletedTopics() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED) || "[]");
    } catch {
      return [];
    }
  }

  isTopicCompleted(topicId) {
    return this.getCompletedTopics().includes(topicId);
  }

  markTopicCompleted(topicId) {
    const completed = this.getCompletedTopics();
    if (!completed.includes(topicId)) {
      completed.push(topicId);
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(completed));
      this.addStars(25); // Reward for completing a topic
      window.dispatchEvent(new CustomEvent("mathpulse_stats_updated"));
    }
  }

  // ---- BOOKMARKS ----
  getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || "[]");
    } catch {
      return [];
    }
  }

  isBookmarked(topicId) {
    return this.getBookmarks().includes(topicId);
  }

  toggleBookmark(topicId) {
    let bookmarks = this.getBookmarks();
    const exists = bookmarks.includes(topicId);
    if (exists) {
      bookmarks = bookmarks.filter(id => id !== topicId);
    } else {
      bookmarks.push(topicId);
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    window.dispatchEvent(new CustomEvent("mathpulse_stats_updated"));
    return !exists;
  }

  // ---- STREAKS ----
  checkStreak() {
    const today = new Date().toISOString().split("T")[0];
    const lastActive = localStorage.getItem(STORAGE_KEYS.LAST_ACTIVE_DATE);
    let streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK_COUNT) || "0", 10);

    if (!lastActive) {
      // First visit
      streak = 1;
      localStorage.setItem(STORAGE_KEYS.LAST_ACTIVE_DATE, today);
      localStorage.setItem(STORAGE_KEYS.STREAK_COUNT, "1");
    } else if (lastActive === today) {
      // Same day, preserve streak
    } else {
      const lastDate = new Date(lastActive);
      const currentDate = new Date(today);
      const diffDays = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutive day
        streak += 1;
        localStorage.setItem(STORAGE_KEYS.STREAK_COUNT, streak.toString());
      } else if (diffDays > 1) {
        // Streak broken
        streak = 1;
        localStorage.setItem(STORAGE_KEYS.STREAK_COUNT, "1");
      }
      localStorage.setItem(STORAGE_KEYS.LAST_ACTIVE_DATE, today);
    }
  }

  recordActivity() {
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem(STORAGE_KEYS.LAST_ACTIVE_DATE, today);
  }

  getStreak() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.STREAK_COUNT) || "1", 10);
  }

  // ---- QUIZ SCORES ----
  saveQuizScore(topicId, score, total) {
    try {
      const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY) || "{}");
      history[topicId] = {
        score,
        total,
        percentage: Math.round((score / total) * 100),
        date: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(history));

      if (score === total) {
        this.markTopicCompleted(topicId);
      }
    } catch {
      // Fallback
    }
  }

  getQuizScore(topicId) {
    try {
      const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY) || "{}");
      return history[topicId] || null;
    } catch {
      return null;
    }
  }

  // ---- THEME PREFERENCE ----
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
  }

  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  // ---- COMPREHENSIVE STATS ----
  getStats(totalAvailableTopics = 52) {
    const completed = this.getCompletedTopics().length;
    const bookmarks = this.getBookmarks().length;
    const stars = this.getStars();
    const streak = this.getStreak();
    const progressPercent = Math.min(100, Math.round((completed / totalAvailableTopics) * 100));

    return { completed, bookmarks, stars, streak, progressPercent };
  }
}

export const storage = new StorageManager();
