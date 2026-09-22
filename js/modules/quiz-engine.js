/**
 * MathPulse K-12 - Interactive Quiz & Practice Engine
 */

import { sounds } from "../audio.js";
import { storage } from "./storage.js";

export class QuizEngine {
  constructor() {
    this.currentTopic = null;
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.hasAnswered = false;
    this.container = null;
  }

  startQuiz(topic, containerElement) {
    this.currentTopic = topic;
    this.questions = topic.practiceQuestions || [];
    this.currentIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.hasAnswered = false;
    this.container = containerElement;

    this.renderQuestion();
  }

  renderQuestion() {
    if (!this.container) return;

    if (this.currentIndex >= this.questions.length) {
      this.renderSummary();
      return;
    }

    const q = this.questions[this.currentIndex];
    const progress = Math.round(((this.currentIndex) / this.questions.length) * 100);

    this.container.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-header">
          <div class="quiz-meta">
            <span class="quiz-badge">${this.currentTopic.gradeText}</span>
            <span class="quiz-counter">Question ${this.currentIndex + 1} of ${this.questions.length}</span>
          </div>
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>

        <h3 class="quiz-question-title">${q.question}</h3>

        <div class="quiz-options-list" id="quiz-options-container">
          ${q.options.map((opt, idx) => `
            <button class="quiz-option-btn" data-index="${idx}">
              <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
              <span class="option-text">${opt}</span>
            </button>
          `).join("")}
        </div>

        <div class="quiz-feedback-box" id="quiz-feedback" style="display: none;"></div>

        <div class="quiz-footer">
          <button class="btn btn-secondary quiz-action-btn" id="quiz-next-btn" style="display: none;">
            ${this.currentIndex === this.questions.length - 1 ? "View Results 🏆" : "Next Question ➡️"}
          </button>
        </div>
      </div>
    `;

    // Attach click listeners to option buttons
    const optionBtns = this.container.querySelectorAll(".quiz-option-btn");
    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.hasAnswered) return;
        const index = parseInt(btn.dataset.index, 10);
        this.handleAnswer(index);
      });
    });

    const nextBtn = this.container.querySelector("#quiz-next-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        sounds.playClick();
        this.currentIndex++;
        this.hasAnswered = false;
        this.selectedAnswer = null;
        this.renderQuestion();
      });
    }
  }

  handleAnswer(selectedIndex) {
    this.hasAnswered = true;
    this.selectedAnswer = selectedIndex;
    const q = this.questions[this.currentIndex];
    const isCorrect = selectedIndex === q.correct;

    const optionBtns = this.container.querySelectorAll(".quiz-option-btn");
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add("option-correct");
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add("option-incorrect");
      }
    });

    const feedbackBox = this.container.querySelector("#quiz-feedback");
    const nextBtn = this.container.querySelector("#quiz-next-btn");

    if (isCorrect) {
      this.score++;
      storage.addStars(10);
      sounds.playCorrect();
      feedbackBox.className = "quiz-feedback-box feedback-correct";
      feedbackBox.innerHTML = `
        <div class="feedback-icon">🎉</div>
        <div>
          <strong>Brilliant! That's correct (+10 ⭐).</strong>
          <p class="feedback-explanation">${q.explanation}</p>
        </div>
      `;
    } else {
      sounds.playIncorrect();
      feedbackBox.className = "quiz-feedback-box feedback-incorrect";
      feedbackBox.innerHTML = `
        <div class="feedback-icon">💡</div>
        <div>
          <strong>Not quite! Let's learn why:</strong>
          <p class="feedback-explanation">${q.explanation}</p>
        </div>
      `;
    }

    feedbackBox.style.display = "flex";
    if (nextBtn) nextBtn.style.display = "inline-flex";
  }

  renderSummary() {
    const total = this.questions.length;
    const percent = Math.round((this.score / total) * 100);
    const passed = percent >= 70;

    storage.saveQuizScore(this.currentTopic.id, this.score, total);

    if (passed) {
      sounds.playVictory();
    }

    this.container.innerHTML = `
      <div class="quiz-summary-card">
        <div class="summary-icon">${percent === 100 ? "🌟" : passed ? "🎯" : "💪"}</div>
        <h2 class="summary-title">${percent === 100 ? "Perfect Score!" : passed ? "Great Job!" : "Keep Practicing!"}</h2>
        <p class="summary-subtitle">You scored <strong>${this.score} out of ${total}</strong> (${percent}%)</p>

        <div class="summary-stats-row">
          <div class="summary-stat-chip">
            <span class="stat-num">${this.score * 10}</span>
            <span class="stat-lbl">Stars Earned ⭐</span>
          </div>
          <div class="summary-stat-chip">
            <span class="stat-num">${percent}%</span>
            <span class="stat-lbl">Accuracy</span>
          </div>
          <div class="summary-stat-chip">
            <span class="stat-num">${storage.getStreak()} Day</span>
            <span class="stat-lbl">Streak 🔥</span>
          </div>
        </div>

        <div class="summary-actions">
          <button class="btn btn-primary" id="retry-quiz-btn">🔄 Try Again</button>
          <button class="btn btn-secondary" id="close-quiz-btn">✅ Back to Lesson</button>
        </div>
      </div>
    `;

    const retryBtn = this.container.querySelector("#retry-quiz-btn");
    const closeBtn = this.container.querySelector("#close-quiz-btn");

    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        sounds.playClick();
        this.startQuiz(this.currentTopic, this.container);
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        sounds.playClick();
        window.dispatchEvent(new CustomEvent("mathpulse_close_quiz"));
      });
    }
  }
}
