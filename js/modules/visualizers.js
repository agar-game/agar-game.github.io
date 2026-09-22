/**
 * MathPulse K-12 - Interactive Math Visualizer Lab
 * Includes:
 * 1. Interactive Fraction Explorer (Pie & Bar visualizer)
 * 2. Function & Coordinate Grapher (Canvas-based)
 * 3. Times-Table Speed Sprint (60-sec arithmetic challenge)
 * 4. Pythagorean Right-Triangle Explorer
 */

import { sounds } from "../audio.js";
import { storage } from "./storage.js";

export const visualizers = {
  // -------------------------------------------------------------------------
  // 1. FRACTION EXPLORER
  // -------------------------------------------------------------------------
  initFractionExplorer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let num = 3;
    let den = 4;

    const render = () => {
      const decimal = (num / den).toFixed(3);
      const percent = Math.round((num / den) * 100);

      // SVG Pie calculation
      const radius = 80;
      const center = 100;
      const slices = [];
      const anglePerSlice = (2 * Math.PI) / den;

      for (let i = 0; i < den; i++) {
        const startAngle = i * anglePerSlice - Math.PI / 2;
        const endAngle = (i + 1) * anglePerSlice - Math.PI / 2;
        const isFilled = i < num;

        const x1 = center + radius * Math.cos(startAngle);
        const y1 = center + radius * Math.sin(startAngle);
        const x2 = center + radius * Math.cos(endAngle);
        const y2 = center + radius * Math.sin(endAngle);

        const largeArc = anglePerSlice > Math.PI ? 1 : 0;
        const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

        slices.push(`
          <path d="${pathData}" 
                fill="${isFilled ? "var(--color-primary)" : "var(--color-surface-hover)"}" 
                stroke="var(--color-border)" 
                stroke-width="2" 
                class="pie-slice" />
        `);
      }

      // Bar blocks
      const barBlocks = [];
      for (let i = 0; i < den; i++) {
        const isFilled = i < num;
        barBlocks.push(`
          <div class="fraction-bar-block ${isFilled ? "filled" : ""}" style="flex: 1;">
            ${isFilled ? "1/" + den : ""}
          </div>
        `);
      }

      container.innerHTML = `
        <div class="visualizer-card">
          <div class="visualizer-header">
            <h3>🍰 Interactive Fraction Explorer</h3>
            <span class="badge badge-primary">Visual Model</span>
          </div>

          <div class="fraction-display-grid">
            <div class="fraction-model-pane">
              <svg width="200" height="200" viewBox="0 0 200 200" class="fraction-pie-svg">
                ${slices.join("")}
              </svg>
              <div class="fraction-bar-container">
                ${barBlocks.join("")}
              </div>
            </div>

            <div class="fraction-stats-pane">
              <div class="fraction-big-math">
                <div class="fraction-stacked">
                  <span class="num">${num}</span>
                  <span class="bar"></span>
                  <span class="den">${den}</span>
                </div>
                <span class="math-equals">=</span>
                <div class="fraction-equivalents">
                  <span class="equiv-item"><strong>${decimal}</strong> (Decimal)</span>
                  <span class="equiv-item"><strong>${percent}%</strong> (Percentage)</span>
                </div>
              </div>

              <div class="slider-control">
                <label>Numerator (Parts Selected): <strong>${num}</strong></label>
                <input type="range" id="frac-num-slider" min="0" max="${den}" value="${num}" class="range-slider" />
              </div>

              <div class="slider-control">
                <label>Denominator (Total Equal Parts): <strong>${den}</strong></label>
                <input type="range" id="frac-den-slider" min="1" max="12" value="${den}" class="range-slider" />
              </div>
            </div>
          </div>
        </div>
      `;

      const numSlider = container.querySelector("#frac-num-slider");
      const denSlider = container.querySelector("#frac-den-slider");

      numSlider.addEventListener("input", (e) => {
        num = parseInt(e.target.value, 10);
        sounds.playClick();
        render();
      });

      denSlider.addEventListener("input", (e) => {
        den = parseInt(e.target.value, 10);
        if (num > den) num = den;
        sounds.playClick();
        render();
      });
    };

    render();
  },

  // -------------------------------------------------------------------------
  // 2. COORDINATE PLANE & FUNCTION PLOTTER
  // -------------------------------------------------------------------------
  initFunctionGrapher(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let slope = 2;
    let intercept = 1;

    const render = () => {
      container.innerHTML = `
        <div class="visualizer-card">
          <div class="visualizer-header">
            <h3>📈 Coordinate Plane & Slope Grapher</h3>
            <span class="badge badge-accent">Linear Algebra</span>
          </div>

          <div class="grapher-layout">
            <div class="canvas-wrapper">
              <canvas id="graph-canvas" width="400" height="400" class="graph-canvas"></canvas>
            </div>

            <div class="graph-controls-pane">
              <div class="equation-display-card">
                <span class="equation-text">y = <strong>${slope}</strong>x ${intercept >= 0 ? "+ " + intercept : "- " + Math.abs(intercept)}</span>
              </div>

              <div class="slider-control">
                <label>Slope (m = rise / run): <strong>${slope}</strong></label>
                <input type="range" id="slope-slider" min="-5" max="5" step="0.5" value="${slope}" class="range-slider" />
              </div>

              <div class="slider-control">
                <label>y-Intercept (b): <strong>${intercept}</strong></label>
                <input type="range" id="intercept-slider" min="-8" max="8" step="1" value="${intercept}" class="range-slider" />
              </div>

              <div class="graph-info-box">
                <p>📍 <strong>y-Intercept:</strong> (0, ${intercept})</p>
                <p>📐 <strong>Slope Direction:</strong> ${slope > 0 ? "Positive (Rising ↗)" : slope < 0 ? "Negative (Falling ↘)" : "Horizontal (Zero Slope ➡️)"}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      const canvas = container.querySelector("#graph-canvas");
      const ctx = canvas.getContext("2d");

      const drawGraph = () => {
        const width = canvas.width;
        const height = canvas.height;
        const originX = width / 2;
        const originY = height / 2;
        const scale = 20; // 20px per 1 unit

        ctx.clearRect(0, 0, width, height);

        // Background
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(0, 0, width, height);

        // Grid lines
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1;

        for (let x = originX % scale; x < width; x += scale) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = originY % scale; y < height; y += scale) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Axes (X & Y)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, originY);
        ctx.lineTo(width, originY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(originX, 0);
        ctx.lineTo(originX, height);
        ctx.stroke();

        // Plot line y = mx + b
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 3;
        ctx.beginPath();

        let started = false;
        for (let px = 0; px <= width; px += 2) {
          const mathX = (px - originX) / scale;
          const mathY = slope * mathX + intercept;
          const py = originY - mathY * scale;

          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();

        // Mark y-intercept point
        ctx.fillStyle = "#f59e0b";
        ctx.beginPath();
        ctx.arc(originX, originY - intercept * scale, 6, 0, Math.PI * 2);
        ctx.fill();
      };

      drawGraph();

      const slopeSlider = container.querySelector("#slope-slider");
      const interceptSlider = container.querySelector("#intercept-slider");

      slopeSlider.addEventListener("input", (e) => {
        slope = parseFloat(e.target.value);
        render();
      });

      interceptSlider.addEventListener("input", (e) => {
        intercept = parseFloat(e.target.value);
        render();
      });
    };

    render();
  },

  // -------------------------------------------------------------------------
  // 3. TIMES-TABLE SPEED SPRINT (60s DRILL)
  // -------------------------------------------------------------------------
  initSpeedSprint(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let isPlaying = false;
    let timer = 60;
    let score = 0;
    let combo = 0;
    let timerId = null;
    let currentProblem = null;

    const generateProblem = () => {
      const a = Math.floor(Math.random() * 11) + 2; // 2-12
      const b = Math.floor(Math.random() * 11) + 2; // 2-12
      const correct = a * b;

      // Generate 3 wrong options
      const options = new Set([correct]);
      while (options.size < 4) {
        const offset = (Math.floor(Math.random() * 7) - 3) * (Math.random() > 0.5 ? a : b);
        const wrong = correct + (offset !== 0 ? offset : Math.floor(Math.random() * 10) + 1);
        if (wrong > 0 && wrong !== correct) {
          options.add(wrong);
        }
      }

      return {
        prompt: `${a} × ${b} = ?`,
        correct,
        options: Array.from(options).sort(() => Math.random() - 0.5)
      };
    };

    const render = () => {
      if (!isPlaying) {
        const highScore = localStorage.getItem("mathpulse_sprint_highscore") || 0;
        container.innerHTML = `
          <div class="visualizer-card text-center">
            <div class="sprint-hero">
              <div class="sprint-icon">⚡</div>
              <h2>60-Second Times Table Sprint</h2>
              <p>How many multiplication questions can you answer in 60 seconds? Build instant recall!</p>
              <div class="sprint-best-chip">🏆 Best Record: <strong>${highScore} Points</strong></div>
              <button class="btn btn-primary btn-lg mt-4" id="start-sprint-btn">🚀 Start Sprint!</button>
            </div>
          </div>
        `;

        const startBtn = container.querySelector("#start-sprint-btn");
        if (startBtn) {
          startBtn.addEventListener("click", () => {
            sounds.playVictory();
            startGame();
          });
        }
        return;
      }

      container.innerHTML = `
        <div class="visualizer-card">
          <div class="sprint-active-header">
            <div class="sprint-stat">
              <span class="stat-label">Time Remaining</span>
              <span class="stat-value time-val ${timer <= 10 ? "time-danger" : ""}">${timer}s</span>
            </div>
            <div class="sprint-stat">
              <span class="stat-label">Score</span>
              <span class="stat-value score-val">${score}</span>
            </div>
            <div class="sprint-stat">
              <span class="stat-label">Combo Streak</span>
              <span class="stat-value combo-val">${combo > 2 ? combo + "x 🔥" : combo}</span>
            </div>
          </div>

          <div class="sprint-question-box">
            <h1 class="sprint-math-prompt">${currentProblem.prompt}</h1>
          </div>

          <div class="sprint-options-grid">
            ${currentProblem.options.map(opt => `
              <button class="sprint-opt-btn" data-val="${opt}">${opt}</button>
            `).join("")}
          </div>
        </div>
      `;

      const optBtns = container.querySelectorAll(".sprint-opt-btn");
      optBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const val = parseInt(btn.dataset.val, 10);
          if (val === currentProblem.correct) {
            combo++;
            score += 10 + combo * 2;
            sounds.playCorrect();
          } else {
            combo = 0;
            sounds.playIncorrect();
          }
          currentProblem = generateProblem();
          render();
        });
      });
    };

    const startGame = () => {
      isPlaying = true;
      timer = 60;
      score = 0;
      combo = 0;
      currentProblem = generateProblem();
      render();

      timerId = setInterval(() => {
        timer--;
        if (timer <= 0) {
          clearInterval(timerId);
          endGame();
        } else {
          // Update only timer text if on same question for smooth rendering
          const timeElem = container.querySelector(".time-val");
          if (timeElem) {
            timeElem.textContent = timer + "s";
            if (timer <= 10) timeElem.classList.add("time-danger");
          }
        }
      }, 1000);
    };

    const endGame = () => {
      isPlaying = false;
      const prevHigh = parseInt(localStorage.getItem("mathpulse_sprint_highscore") || "0", 10);
      if (score > prevHigh) {
        localStorage.setItem("mathpulse_sprint_highscore", score.toString());
      }
      storage.addStars(Math.round(score / 5));
      sounds.playVictory();

      container.innerHTML = `
        <div class="visualizer-card text-center">
          <div class="sprint-hero">
            <div class="sprint-icon">🏁</div>
            <h2>Time's Up!</h2>
            <p>You scored <strong>${score} Points</strong> and earned <strong>+${Math.round(score / 5)} Stars ⭐</strong></p>
            <button class="btn btn-primary btn-lg mt-4" id="restart-sprint-btn">🔄 Play Again</button>
          </div>
        </div>
      `;

      const restartBtn = container.querySelector("#restart-sprint-btn");
      if (restartBtn) {
        restartBtn.addEventListener("click", () => {
          startGame();
        });
      }
    };

    render();
  },

  // -------------------------------------------------------------------------
  // 4. PYTHAGOREAN RIGHT TRIANGLE EXPLORER
  // -------------------------------------------------------------------------
  initPythagoreanExplorer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let legA = 6;
    let legB = 8;

    const render = () => {
      const cSquared = legA * legA + legB * legB;
      const legC = Math.sqrt(cSquared).toFixed(2);
      const angleA = (Math.atan(legA / legB) * (180 / Math.PI)).toFixed(1);
      const angleB = (90 - angleA).toFixed(1);

      // SVG dimensions
      const svgWidth = 320;
      const svgHeight = 240;
      const scale = 12;

      const originX = 40;
      const originY = svgHeight - 40;
      const cornerX = originX + legB * scale;
      const cornerY = originY;
      const topY = originY - legA * scale;

      container.innerHTML = `
        <div class="visualizer-card">
          <div class="visualizer-header">
            <h3>📐 Pythagorean Right Triangle Explorer</h3>
            <span class="badge badge-accent">Geometry</span>
          </div>

          <div class="triangle-layout">
            <div class="triangle-svg-wrapper">
              <svg width="${svgWidth}" height="${svgHeight}" class="triangle-svg">
                <!-- Triangle -->
                <polygon points="${originX},${originY} ${cornerX},${cornerY} ${cornerX},${topY}" 
                         fill="rgba(56, 189, 248, 0.15)" 
                         stroke="var(--color-primary)" 
                         stroke-width="3" />

                <!-- Right angle square marker -->
                <rect x="${cornerX - 16}" y="${cornerY - 16}" width="16" height="16" 
                      fill="none" stroke="var(--color-text-muted)" stroke-width="1.5" />

                <!-- Leg B label (bottom) -->
                <text x="${(originX + cornerX) / 2}" y="${originY + 22}" fill="var(--color-text)" font-weight="bold" text-anchor="middle">
                  b = ${legB}
                </text>

                <!-- Leg A label (right) -->
                <text x="${cornerX + 22}" y="${(originY + topY) / 2}" fill="var(--color-text)" font-weight="bold" text-anchor="middle">
                  a = ${legA}
                </text>

                <!-- Hypotenuse C label -->
                <text x="${(originX + cornerX) / 2 - 15}" y="${(originY + topY) / 2 - 10}" fill="#f59e0b" font-weight="bold" text-anchor="middle">
                  c ≈ ${legC}
                </text>
              </svg>
            </div>

            <div class="triangle-controls-pane">
              <div class="pythagorean-equation-box">
                <div class="math-eq">a² + b² = c²</div>
                <div class="math-sub">${legA}² + ${legB}² = ${legA * legA} + ${legB * legB} = <strong>${cSquared}</strong></div>
                <div class="math-result">c = √${cSquared} = <strong>${legC}</strong></div>
              </div>

              <div class="slider-control">
                <label>Leg a (Height): <strong>${legA}</strong></label>
                <input type="range" id="leg-a-slider" min="3" max="14" value="${legA}" class="range-slider" />
              </div>

              <div class="slider-control">
                <label>Leg b (Base): <strong>${legB}</strong></label>
                <input type="range" id="leg-b-slider" min="3" max="18" value="${legB}" class="range-slider" />
              </div>

              <div class="triangle-angles-chip">
                <span>Angle α: <strong>${angleA}°</strong></span>
                <span>Angle β: <strong>${angleB}°</strong></span>
                <span>Right Angle: <strong>90.0°</strong></span>
              </div>
            </div>
          </div>
        </div>
      `;

      const sliderA = container.querySelector("#leg-a-slider");
      const sliderB = container.querySelector("#leg-b-slider");

      sliderA.addEventListener("input", (e) => {
        legA = parseInt(e.target.value, 10);
        render();
      });

      sliderB.addEventListener("input", (e) => {
        legB = parseInt(e.target.value, 10);
        render();
      });
    };

    render();
  }
};
