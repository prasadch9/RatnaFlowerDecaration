import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { img } from '../../data/site-data';

interface ProjectDetail {
  label: string;
  value: string;
}

@Component({
  selector: 'app-featured-project',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section section-ivory">
      <div class="container-lux">
        <div class="featured-grid">
          <div class="featured-image-wrap" appReveal="fade-right">
            <div class="corner-deco tl"></div>
            <div class="corner-deco br"></div>
            <div class="featured-image">
              <img [src]="projectImage" alt="Featured wedding decoration project" loading="lazy" />
            </div>
            <div class="featured-tag">
              <i class="bi bi-star-fill" aria-hidden="true"></i>
              Featured Project
            </div>
          </div>

          <div class="featured-content">
            <span class="section-label" appReveal="fade-up">CASE STUDY</span>
            <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
              Turning Venues Into <span class="accent">Experiences</span>
            </h2>
            <div class="gold-divider left" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
            <p class="featured-text" appReveal="fade-up" [style.--reveal-delay]="'0.3s'">
              A spectacular wedding transformation at a heritage venue — where every corner
              was adorned with cascading florals, ambient lighting, and bespoke decor elements
              that left guests spellbound.
            </p>

            <div class="featured-details">
              @for (detail of details; track detail.label; let i = $index) {
                <div class="detail-item" appReveal="fade-up" [style.--reveal-delay]="i * 0.1 + 's'">
                  <span class="detail-label">{{ detail.label }}</span>
                  <span class="detail-value">{{ detail.value }}</span>
                </div>
              }
            </div>

            <a href="#gallery" class="btn-lux btn-primary-fill" appReveal="fade-up" [style.--reveal-delay]="'0.5s'">
              View Full Gallery
              <i class="bi bi-arrow-right btn-icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .featured-grid {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .featured-image-wrap {
      position: relative;
    }
    .featured-image {
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--border-gold);
      height: 520px;
    }
    .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1s ease;
    }
    .featured-image-wrap:hover .featured-image img {
      transform: scale(1.06);
    }

    .featured-tag {
      position: absolute;
      top: 20px;
      right: 20px;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1.2rem;
      background: var(--primary);
      color: var(--cream);
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border-radius: var(--radius-full);
      border: 1px solid var(--accent);
      box-shadow: var(--shadow-md);
    }
    .featured-tag i {
      color: var(--accent);
      font-size: 0.7rem;
    }

    .featured-text {
      font-size: 1rem;
      color: var(--text-muted);
      line-height: 1.9;
      margin: 1.5rem 0 2rem;
    }

    .featured-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
      padding: 2rem;
      background: var(--cream);
      border-radius: var(--radius-md);
      border: 1px solid var(--border-gold);
    }
    .detail-item {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
    .detail-label {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent-dark);
    }
    .detail-value {
      font-family: var(--font-heading);
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--dark);
    }

    @media (max-width: 991px) {
      .featured-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
      .featured-image {
        height: 400px;
      }
    }
    @media (max-width: 768px) {
      .featured-image {
        height: 360px;
      }
      .featured-details {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        padding: 1.5rem;
      }
      .detail-value {
        font-size: 1rem;
      }
    }
    @media (max-width: 576px) {
      .featured-details {
        padding: 1.2rem;
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .featured-image {
        height: 260px;
      }
      .featured-text {
        font-size: 0.9rem;
      }
      .detail-value {
        font-size: 1rem;
      }
      .featured-tag {
        font-size: 0.62rem;
        padding: 0.4rem 0.9rem;
      }
    }
  `],
})
export class FeaturedProjectComponent {
  projectImage = img.featured;
  details: ProjectDetail[] = [
    { label: 'Event Type', value: 'Luxury Wedding' },
    { label: 'Venue', value: 'Heritage Palace' },
    { label: 'Decoration Style', value: 'Royal Floral Theme' },
    { label: 'Flowers Used', value: 'Roses, Marigolds, Orchids' },
  ];
}
