import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { img } from '../../data/site-data';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="cta-section">
      <div class="cta-bg">
        <img [src]="bgImage" alt="Luxury floral decoration" loading="lazy" />
        <div class="cta-overlay"></div>
      </div>

      <div class="container-lux cta-content">
        <div class="corner-deco tl"></div>
        <div class="corner-deco tr"></div>
        <div class="corner-deco bl"></div>
        <div class="corner-deco br"></div>

        <span class="section-label center" appReveal="fade-up">LET'S CREATE MAGIC</span>
        <h2 class="cta-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
          Let's Make Your <em>Celebration</em> Bloom
        </h2>
        <div class="gold-divider" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
        <p class="cta-text" appReveal="fade-up" [style.--reveal-delay]="'0.3s'">
          Tell us your dream decoration and we'll turn it into a beautiful reality.
        </p>
        <div class="cta-actions" appReveal="fade-up" [style.--reveal-delay]="'0.4s'">
          <a href="#contact" class="btn-lux btn-gold-fill">
            Plan My Event
            <i class="bi bi-arrow-right btn-icon" aria-hidden="true"></i>
          </a>
          <a href="tel:+916262611125" class="btn-lux cta-btn-light">
            <i class="bi bi-telephone" aria-hidden="true"></i>
            Call Us
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      position: relative;
      padding: var(--section-padding) 0;
      overflow: hidden;
    }
    .cta-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    .cta-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: slowZoom 25s ease-in-out infinite alternate;
    }
    .cta-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(36, 26, 29, 0.85), rgba(139, 30, 63, 0.7));
    }

    .cta-content {
      position: relative;
      z-index: 2;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1.5rem;
    }

    .cta-content .section-label {
      color: var(--accent);
    }

    .cta-title {
      font-family: var(--font-heading);
      font-size: clamp(2.2rem, 5vw, 4rem);
      font-weight: 600;
      color: var(--cream);
      line-height: 1.15;
      max-width: 700px;
      margin-top: 1rem;
    }
    .cta-title em {
      font-style: italic;
      font-weight: 400;
      color: var(--accent);
    }

    .cta-text {
      font-family: var(--font-serif);
      font-size: 1.3rem;
      color: rgba(255, 248, 240, 0.75);
      max-width: 550px;
      margin-top: 0.5rem;
    }

    .cta-actions {
      display: flex;
      gap: 1.2rem;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 2.5rem;
    }
    .cta-btn-light {
      color: var(--cream);
      border-color: var(--cream);
    }
    .cta-btn-light::before {
      background: var(--cream);
    }
    .cta-btn-light:hover {
      color: var(--primary);
    }

    .corner-deco {
      border-color: var(--accent);
      opacity: 0.3;
    }
  `],
})
export class CtaComponent {
  bgImage = img.ctaBg;
}
