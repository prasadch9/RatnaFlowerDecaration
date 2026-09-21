import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { OCCASIONS } from '../../data/site-data';

@Component({
  selector: 'app-occasions',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="occasions" class="section section-ivory">
      <div class="container-lux">
        <div class="text-center-lux section-header" style="margin-bottom: 3.5rem;">
          <span class="section-label center" appReveal="fade-up">CELEBRATE WITH US</span>
          <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
            Decorations for Every <span class="accent">Occasion</span>
          </h2>
          <div class="gold-divider" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
          <p class="section-subtitle" appReveal="fade-up" [style.--reveal-delay]="'0.3s'">
            Whatever you are celebrating, we have the perfect floral design to make it unforgettable.
          </p>
        </div>

        <div class="occasions-grid">
          @for (occasion of occasions; track occasion.title; let i = $index) {
            <a
              href="#contact"
              class="occasion-card"
              appReveal="fade-up"
              [style.--reveal-delay]="(i % 4) * 0.08 + 's'"
            >
              <div class="occasion-image">
                <img [src]="occasion.image" [alt]="occasion.title" loading="lazy" />
              </div>
              <div class="occasion-overlay"></div>
              <div class="occasion-content">
                <span class="occasion-line"></span>
                <h3 class="occasion-title">{{ occasion.title }}</h3>
                <span class="occasion-arrow">
                  <i class="bi bi-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header {
      max-width: 700px;
      margin: 0 auto 3.5rem;
    }

    .occasions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.2rem;
    }

    .occasion-card {
      position: relative;
      height: 320px;
      border-radius: var(--radius-md);
      overflow: hidden;
      display: block;
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      border: 1px solid transparent;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .occasion-card:hover {
      border-color: var(--accent);
      box-shadow: var(--shadow-lg);
      transform: translateY(-4px);
    }

    .occasion-image {
      position: absolute;
      inset: 0;
    }
    .occasion-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .occasion-card:hover .occasion-image img {
      transform: scale(1.1);
    }

    .occasion-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 30%, rgba(36, 26, 29, 0.85) 100%);
      transition: background 0.5s ease;
    }
    .occasion-card:hover .occasion-overlay {
      background: linear-gradient(180deg, rgba(36, 26, 29, 0.2) 0%, rgba(36, 26, 29, 0.9) 100%);
    }

    .occasion-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      transform: translateY(0);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .occasion-card:hover .occasion-content {
      transform: translateY(-8px);
    }

    .occasion-line {
      display: block;
      width: 0;
      height: 2px;
      background: var(--accent);
      margin-bottom: 0.6rem;
      transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
    }
    .occasion-card:hover .occasion-line {
      width: 40px;
    }

    .occasion-title {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--cream);
      line-height: 1.2;
    }

    .occasion-arrow {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent);
      font-size: 0.9rem;
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .occasion-card:hover .occasion-arrow {
      opacity: 1;
      transform: translateX(0);
      background: var(--accent);
      color: var(--dark);
    }

    @media (max-width: 991px) {
      .occasions-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
      .occasion-card {
        height: 280px;
      }
    }
    @media (max-width: 576px) {
      .occasions-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .occasion-card {
        height: 240px;
      }
      .occasion-title {
        font-size: 1.05rem;
      }
      .occasion-content {
        padding: 1.2rem;
      }
    }
  `],
})
export class OccasionsComponent {
  occasions = OCCASIONS;
}
