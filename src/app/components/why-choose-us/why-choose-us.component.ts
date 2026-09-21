import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { FEATURES } from '../../data/site-data';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section section-dark">
      <div class="container-lux">
        <div class="text-center-lux section-header" style="margin-bottom: 3.5rem;">
          <span class="section-label center" appReveal="fade-up">WHY RATNAA</span>
          <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
            Why Choose <span class="accent">Ratnaa?</span>
          </h2>
          <div class="gold-divider" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
          <p class="section-subtitle" appReveal="fade-up" [style.--reveal-delay]="'0.3s'" style="color: rgba(255,248,240,0.6);">
            We bring passion, precision, and artistry to every event we decorate.
          </p>
        </div>

        <div class="features-grid">
          @for (feature of features; track feature.title; let i = $index) {
            <div
              class="feature-item"
              appReveal="zoom-in"
              [style.--reveal-delay]="(i % 3) * 0.15 + 's'"
            >
              <div class="feature-icon">
                <i [class]="feature.icon" aria-hidden="true"></i>
              </div>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-desc">{{ feature.description }}</p>
            </div>
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
    .section-header .section-label {
      color: var(--accent);
    }
    .section-header .section-title .accent {
      color: var(--accent);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .feature-item {
      text-align: center;
      padding: 2rem 1.5rem;
      border-radius: var(--radius-md);
      background: rgba(255, 248, 240, 0.03);
      border: 1px solid rgba(212, 175, 106, 0.15);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .feature-item:hover {
      background: rgba(212, 175, 106, 0.06);
      border-color: var(--accent);
      transform: translateY(-6px);
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      color: var(--accent);
      border: 1.5px solid var(--accent);
      background: rgba(212, 175, 106, 0.05);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .feature-item:hover .feature-icon {
      background: var(--accent);
      color: var(--dark);
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 0 25px rgba(212, 175, 106, 0.4);
    }

    .feature-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--cream);
      margin-bottom: 0.6rem;
    }
    .feature-desc {
      font-size: 0.88rem;
      color: rgba(255, 248, 240, 0.55);
      line-height: 1.7;
    }

    @media (max-width: 991px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
      .feature-item {
        padding: 1.5rem 1.2rem;
      }
      .feature-icon {
        width: 64px;
        height: 64px;
        font-size: 1.5rem;
      }
    }
    @media (max-width: 576px) {
      .features-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .feature-item {
        padding: 1.5rem;
      }
      .feature-title {
        font-size: 1.1rem;
      }
      .feature-desc {
        font-size: 0.82rem;
      }
    }
  `],
})
export class WhyChooseUsComponent {
  features = FEATURES;
}
