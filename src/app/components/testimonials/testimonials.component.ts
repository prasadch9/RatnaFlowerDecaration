import { Component, signal, computed } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { TESTIMONIALS } from '../../data/site-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="testimonials" class="section section-dark">
      <div class="container-lux">
        <div class="text-center-lux section-header" style="margin-bottom: 3rem;">
          <span class="section-label center" appReveal="fade-up">CLIENT LOVE</span>
          <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
            What Our <span class="accent">Clients</span> Say
          </h2>
          <div class="gold-divider" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
        </div>

        <div class="testimonial-carousel" appReveal="fade-up">
          <button class="carousel-nav prev" (click)="prev()" aria-label="Previous testimonial">
            <i class="bi bi-arrow-left" aria-hidden="true"></i>
          </button>

          <div class="testimonial-track">
            @for (testimonial of testimonials; track $index; let i = $index) {
              <article
                class="testimonial-card"
                [class.active]="i === current()"
                [class.prev]="i === prevIndex()"
                [class.next]="i === nextIndex()"
              >
                <div class="testimonial-quote-icon">
                  <i class="bi bi-quote" aria-hidden="true"></i>
                </div>
                <div class="testimonial-stars">
                  @for (star of stars(testimonial.rating); track $index) {
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                  }
                </div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-author">
                  <div class="author-avatar">{{ testimonial.initials }}</div>
                  <div class="author-info">
                    <span class="author-name">{{ testimonial.name }}</span>
                    <span class="author-event">{{ testimonial.event }}</span>
                  </div>
                </div>
              </article>
            }
          </div>

          <button class="carousel-nav next" (click)="next()" aria-label="Next testimonial">
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </button>

          <div class="carousel-dots">
            @for (testimonial of testimonials; track $index; let i = $index) {
              <button
                class="dot"
                [class.active]="i === current()"
                (click)="goTo(i)"
                [attr.aria-label]="'Go to testimonial ' + (i + 1)"
              ></button>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header {
      max-width: 700px;
      margin: 0 auto 3rem;
    }
    .section-header .section-label { color: var(--accent); }
    .section-header .section-title .accent { color: var(--accent); }

    .testimonial-carousel {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 60px;
    }

    .testimonial-track {
      position: relative;
      min-height: 340px;
    }

    .testimonial-card {
      position: absolute;
      inset: 0;
      opacity: 0;
      transform: scale(0.95);
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      pointer-events: none;
      text-align: center;
      padding: 2.5rem 2rem;
      background: rgba(255, 248, 240, 0.04);
      border: 1px solid rgba(212, 175, 106, 0.15);
      border-radius: var(--radius-lg);
    }
    .testimonial-card.active {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .testimonial-quote-icon {
      font-size: 3rem;
      color: var(--accent);
      opacity: 0.3;
      margin-bottom: 1rem;
    }

    .testimonial-stars {
      display: flex;
      justify-content: center;
      gap: 0.3rem;
      margin-bottom: 1.5rem;
    }
    .testimonial-stars i {
      color: var(--accent);
      font-size: 1rem;
    }

    .testimonial-text {
      font-family: var(--font-serif);
      font-size: 1.3rem;
      font-style: italic;
      color: var(--cream);
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .author-avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--primary);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-size: 1.2rem;
      font-weight: 600;
      border: 2px solid var(--accent);
    }
    .author-info {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .author-name {
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--cream);
    }
    .author-event {
      font-size: 0.78rem;
      color: var(--accent);
      letter-spacing: 0.05em;
    }

    .carousel-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(212, 175, 106, 0.1);
      border: 1px solid var(--accent);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 2;
    }
    .carousel-nav:hover {
      background: var(--accent);
      color: var(--dark);
    }
    .carousel-nav.prev { left: 0; }
    .carousel-nav.next { right: 0; }

    .carousel-dots {
      display: flex;
      justify-content: center;
      gap: 0.6rem;
      margin-top: 2rem;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(212, 175, 106, 0.25);
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
    }
    .dot.active {
      background: var(--accent);
      transform: scale(1.3);
    }

    @media (max-width: 768px) {
      .testimonial-carousel {
        padding: 0 50px;
      }
      .testimonial-text {
        font-size: 1.1rem;
      }
      .testimonial-card {
        padding: 2rem 1.5rem;
      }
    }
    @media (max-width: 576px) {
      .testimonial-carousel {
        padding: 0;
      }
      .carousel-nav {
        position: relative;
        top: auto;
        transform: none;
        display: inline-flex;
        width: 42px;
        height: 42px;
        font-size: 1rem;
      }
      .carousel-nav.prev { left: auto; }
      .carousel-nav.next { right: auto; }
      .testimonial-track {
        min-height: 420px;
      }
      .testimonial-card {
        padding: 1.8rem 1.2rem;
      }
      .testimonial-text {
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }
      .testimonial-quote-icon {
        font-size: 2.5rem;
        margin-bottom: 0.8rem;
      }
      .testimonial-author {
        flex-direction: column;
        gap: 0.6rem;
      }
      .author-info {
        text-align: center;
      }
      .carousel-dots {
        margin-top: 1.5rem;
      }
    }
  `],
})
export class TestimonialsComponent {
  testimonials = TESTIMONIALS;
  current = signal(0);

  prevIndex = computed(() => (this.current() - 1 + this.testimonials.length) % this.testimonials.length);
  nextIndex = computed(() => (this.current() + 1) % this.testimonials.length);

  next(): void {
    this.current.update((v) => (v + 1) % this.testimonials.length);
  }

  prev(): void {
    this.current.update((v) => (v - 1 + this.testimonials.length) % this.testimonials.length);
  }

  goTo(i: number): void {
    this.current.set(i);
  }

  stars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
