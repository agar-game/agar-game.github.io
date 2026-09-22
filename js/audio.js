/**
 * MathPulse K-12 - Web Audio API Sound Synthesizer
 * Zero external audio files, pure browser oscillator sound effects.
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem("mathpulse_muted") === "true";
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("mathpulse_muted", this.muted);
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playTone(freq, type = "sine", duration = 0.2, gainValue = 0.15) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainValue, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // Graceful fallback if audio context blocked
    }
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    // Cheerful major arpeggio
    this.playTone(523.25, "triangle", 0.15, 0.15); // C5
    setTimeout(() => this.playTone(659.25, "triangle", 0.15, 0.15), 100); // E5
    setTimeout(() => this.playTone(783.99, "triangle", 0.3, 0.2), 200); // G5
  }

  playIncorrect() {
    if (this.muted) return;
    this.init();
    // Gentle low buzz
    this.playTone(220, "sawtooth", 0.2, 0.1);
    setTimeout(() => this.playTone(180, "sawtooth", 0.3, 0.1), 120);
  }

  playClick() {
    if (this.muted) return;
    this.playTone(800, "sine", 0.05, 0.05);
  }

  playVictory() {
    if (this.muted) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, index) => {
      setTimeout(() => this.playTone(freq, "sine", 0.25, 0.2), index * 120);
    });
  }
}

export const sounds = new SoundEngine();
