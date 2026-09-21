import { Component } from '@angular/core';
import { img } from '../../data/site-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <div class="hero-bg">
        <img [src]="bgImage" alt="Luxury floral wedding decoration" class="hero-bg-img" loading="eager" />
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-deco-left" aria-hidden="true">
          <i class="bi bi-flower1"></i>
        </div>
        <div class="hero-deco-right" aria-hidden="true">
          <i class="bi bi-flower1"></i>
        </div>

        <div class="hero-inner">
          <span class="hero-tag">
            <span class="hero-tag-line"></span>
            Luxury Flower &amp; Event Decoration
            <span class="hero-tag-line"></span>
          </span>

          <h1 class="hero-title">
            <span class="hero-line">Where Flowers</span>
            <span class="hero-line">Become <em>Memories</em></span>
          </h1>

          <p class="hero-subtitle">
            Luxury Flower &amp; Event Decorations Crafted for Your Most Beautiful Moments
          </p>

          <div class="hero-actions">
            <a href="#gallery" class="btn-lux btn-gold-fill hero-btn" style="--btn-delay: 0.1s">
              Explore Our Work
              <i class="bi bi-arrow-right btn-icon" aria-hidden="true"></i>
            </a>
            <a href="#contact" class="btn-lux hero-btn" style="--btn-delay: 0.25s">
              Get a Quote
              <i class="bi bi-arrow-right btn-icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <a href="#about" class="scroll-indicator" aria-label="Scroll to explore">
        <span class="scroll-text">SCROLL TO EXPLORE</span>
        <span class="scroll-arrow">
          <i class="bi bi-chevron-down" aria-hidden="true"></i>
        </span>
      </a>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 100vh;
      min-height: 640px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* Background */
    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    .hero-bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: slowZoom 20s ease-in-out infinite alternate;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(36, 26, 29, 0.5) 0%, rgba(36, 26, 29, 0.3) 40%, rgba(36, 26, 29, 0.6) 100%),
        radial-gradient(ellipse at center, transparent 30%, rgba(36, 26, 29, 0.4) 100%);
    }

    /* Content */
    .hero-content {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 900px;
      text-align: center;
      padding: 0 1.5rem;
    }
    .hero-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Decorative flowers */
    .hero-deco-left,
    .hero-deco-right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 3rem;
      color: var(--accent);
      opacity: 0.3;
      animation: rotateSlow 30s linear infinite;
    }
    .hero-deco-left { left: 5%; }
    .hero-deco-right { right: 5%; animation-direction: reverse; }

    /* Tag */
    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      font-family: var(--font-body);
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeUp 0.8s var(--ease-luxury) 0.2s forwards;
    }
    .hero-tag-line {
      width: 40px;
      height: 1px;
      background: var(--accent);
      opacity: 0.6;
    }

    /* Title */
    .hero-title {
      font-family: var(--font-heading);
      font-size: clamp(2.8rem, 7vw, 6rem);
      font-weight: 600;
      line-height: 1.05;
      color: var(--cream);
      letter-spacing: -0.02em;
      margin: 0 0 1.5rem;
    }
    .hero-line {
      display: block;
      overflow: hidden;
    }
    .hero-line:nth-child(1) {
      opacity: 0;
      animation: fadeUp 1s var(--ease-luxury) 0.4s forwards;
    }
    .hero-line:nth-child(2) {
      opacity: 0;
      animation: fadeUp 1s var(--ease-luxury) 0.6s forwards;
    }
    .hero-line em {
      font-style: italic;
      font-weight: 400;
      color: var(--accent);
    }

    /* Subtitle */
    .hero-subtitle {
      font-family: var(--font-serif);
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      color: rgba(255, 248, 240, 0.85);
      max-width: 600px;
      line-height: 1.6;
      margin: 0 0 2.5rem;
      opacity: 0;
      animation: fadeUp 0.8s var(--ease-luxury) 0.8s forwards;
    }

    /* Actions */
    .hero-actions {
      display: flex;
      gap: 1.2rem;
      flex-wrap: wrap;
      justify-content: center;
      opacity: 0;
      animation: fadeUp 0.8s var(--ease-luxury) 1s forwards;
    }
    .hero-btn {
      color: var(--cream);
      border-color: var(--accent);
    }
    .hero-btn:hover {
      color: var(--dark);
    }
    .hero-btn.btn-gold-fill {
      color: var(--dark);
    }
    .hero-btn.btn-gold-fill:hover {
      color: var(--cream);
    }

    /* Scroll Indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 35px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      z-index: 3;
      opacity: 0;
      animation: fadeIn 1s ease 1.5s forwards;
    }
    .scroll-text {
      font-family: var(--font-body);
      font-size: 0.65rem;
      font-weight: 500;
      letter-spacing: 0.3em;
      color: rgba(255, 248, 240, 0.7);
      text-transform: uppercase;
    }
    .scroll-arrow {
      width: 32px;
      height: 32px;
      border: 1px solid var(--accent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent);
      font-size: 1rem;
      animation: bounceDown 2s ease-in-out infinite;
      transition: all 0.3s ease;
    }
    .scroll-indicator:hover .scroll-arrow {
      transform: translateY(6px);
      background: var(--accent);
      color: var(--dark);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero {
        min-height: 560px;
      }
      .hero-deco-left, .hero-deco-right {
        display: none;
      }
      .hero-tag {
        font-size: 0.62rem;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }
      .hero-tag-line {
        width: 25px;
      }
      .hero-subtitle {
        font-size: 1.05rem;
        margin-bottom: 2rem;
      }
      .hero-actions {
        flex-direction: column;
        width: 100%;
        max-width: 280px;
      }
      .hero-btn {
        width: 100%;
        justify-content: center;
        padding: 0.85rem 1.5rem;
        font-size: 0.78rem;
      }
    }
    @media (max-width: 576px) {
      .hero {
        min-height: 520px;
      }
      .hero-content {
        padding: 0 1.2rem;
      }
      .hero-tag {
        font-size: 0.55rem;
        letter-spacing: 0.2em;
      }
      .hero-title {
        margin-bottom: 1rem;
      }
      .hero-subtitle {
        font-size: 0.95rem;
      }
      .scroll-indicator {
        bottom: 15px;
      }
      .scroll-text {
        font-size: 0.55rem;
      }
    }
  `],
})
export class HeroComponent {
  bgImage = img.heroStage;
}
