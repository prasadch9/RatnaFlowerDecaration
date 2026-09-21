import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PROCESS_STEPS } from '../../data/site-data';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section section-cream">
      <div class="container-lux">
        <div class="text-center-lux section-header" style="margin-bottom: 3.5rem;">
          <span class="section-label center" appReveal="fade-up">HOW WE WORK</span>
          <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
            Our Decoration <span class="accent">Process</span>
          </h2>
          <div class="gold-divider" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
          <p class="section-subtitle" appReveal="fade-up" [style.--reveal-delay]="'0.3s'">
            A seamless journey from your first consultation to the final moment of your event.
          </p>
        </div>

        <!-- Desktop: Horizontal Timeline -->
        <div class="timeline-desktop">
          <div class="timeline-line" appReveal="clip-reveal"></div>
          @for (step of steps; track step.number; let i = $index) {
            <div
              class="timeline-step"
              appReveal="fade-up"
              [style.--reveal-delay]="i * 0.12 + 's'"
            >
              <div class="step-number-wrap">
                <span class="step-number">{{ step.number }}</span>
                <span class="step-icon">
                  <i [class]="step.icon" aria-hidden="true"></i>
                </span>
              </div>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-desc">{{ step.description }}</p>
            </div>
          }
        </div>

        <!-- Mobile: Vertical Timeline -->
        <div class="timeline-mobile">
          @for (step of steps; track step.number; let i = $index) {
            <div
              class="m-step"
              appReveal="fade-left"
              [style.--reveal-delay]="i * 0.1 + 's'"
            >
              <div class="m-step-marker">
                <span class="m-step-number">{{ step.number }}</span>
                <span class="m-step-icon">
                  <i [class]="step.icon" aria-hidden="true"></i>
                </span>
              </div>
              <div class="m-step-content">
                <h3 class="m-step-title">{{ step.title }}</h3>
                <p class="m-step-desc">{{ step.description }}</p>
              </div>
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

    /* Desktop Timeline */
    .timeline-desktop {
      position: relative;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
      padding-top: 2rem;
    }
    .timeline-line {
      position: absolute;
      top: 3.5rem;
      left: 8%;
      right: 8%;
      height: 2px;
      background: linear-gradient(90deg, var(--accent), var(--primary), var(--accent));
      opacity: 0.3;
    }

    .timeline-step {
      text-align: center;
      padding: 0 0.5rem;
      position: relative;
    }
    .step-number-wrap {
      position: relative;
      width: 64px;
      height: 64px;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .step-number {
      font-family: var(--font-heading);
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--primary);
      opacity: 0.15;
      position: absolute;
      top: -8px;
      transition: opacity 0.5s ease;
    }
    .step-icon {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: var(--white);
      border: 2px solid var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      color: var(--primary);
      box-shadow: var(--shadow-sm);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      z-index: 1;
    }
    .timeline-step:hover .step-icon {
      background: var(--accent);
      color: var(--dark);
      transform: scale(1.1);
    }
    .timeline-step:hover .step-number {
      opacity: 0.3;
    }

    .step-title {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 0.5rem;
    }
    .step-desc {
      font-size: 0.82rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* Mobile Timeline */
    .timeline-mobile {
      display: none;
      position: relative;
      padding-left: 2rem;
    }
    .timeline-mobile::before {
      content: '';
      position: absolute;
      left: 31px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, var(--accent), var(--primary), var(--accent));
      opacity: 0.3;
    }
    .m-step {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2rem;
      position: relative;
    }
    .m-step-marker {
      flex-shrink: 0;
      position: relative;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .m-step-number {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary);
      opacity: 0.15;
      position: absolute;
    }
    .m-step-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--white);
      border: 2px solid var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: var(--primary);
      position: relative;
      z-index: 1;
    }
    .m-step-content {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    .m-step-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 0.3rem;
    }
    .m-step-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    @media (max-width: 991px) {
      .timeline-desktop { display: none; }
      .timeline-mobile { display: block; }
    }
    @media (max-width: 576px) {
      .timeline-mobile {
        padding-left: 1.5rem;
      }
      .timeline-mobile::before {
        left: 27px;
      }
      .m-step {
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      .m-step-marker {
        width: 54px;
        height: 54px;
      }
      .m-step-icon {
        width: 42px;
        height: 42px;
        font-size: 1rem;
      }
      .m-step-number {
        font-size: 1.6rem;
      }
      .m-step-title {
        font-size: 1rem;
      }
      .m-step-desc {
        font-size: 0.8rem;
      }
    }
  `],
})
export class ProcessComponent {
  steps = PROCESS_STEPS;
}
