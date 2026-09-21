import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SERVICES } from '../../data/site-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="services" class="section section-cream">
      <div class="container-lux">
        <div class="text-center-lux section-header" style="margin-bottom: 3.5rem;">
          <span class="section-label center" appReveal="fade-up">WHAT WE OFFER</span>
          <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
            Our <span class="accent">Decoration</span> Services
          </h2>
          <div class="gold-divider" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
          <p class="section-subtitle" appReveal="fade-up" [style.--reveal-delay]="'0.3s'">
            From grand weddings to intimate celebrations, we craft bespoke floral experiences
            for every occasion.
          </p>
        </div>

        <div class="services-grid">
          @for (service of services; track service.title; let i = $index) {
            <article
              class="service-card"
              appReveal="fade-up"
              [style.--reveal-delay]="(i % 3) * 0.1 + 's'"
            >
              <div class="service-image">
                <img [src]="service.image" [alt]="service.title" loading="lazy" />
                <div class="service-overlay"></div>
                <div class="service-icon">
                  <i [class]="service.icon" aria-hidden="true"></i>
                </div>
              </div>
              <div class="service-body">
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-desc">{{ service.description }}</p>
                <a href="#contact" class="service-link" aria-label="Enquire about {{ service.title }}">
                  <span>Enquire Now</span>
                  <i class="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </article>
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.8rem;
    }

    .service-card {
      background: var(--white);
      border-radius: var(--radius-md);
      overflow: hidden;
      border: 1px solid transparent;
      box-shadow: var(--shadow-sm);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-lg);
      border-color: var(--accent);
    }

    .service-image {
      position: relative;
      height: 220px;
      overflow: hidden;
    }
    .service-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .service-card:hover .service-image img {
      transform: scale(1.1);
    }
    .service-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 40%, rgba(36, 26, 29, 0.4) 100%);
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    .service-card:hover .service-overlay {
      opacity: 1;
    }
    .service-icon {
      position: absolute;
      bottom: -22px;
      left: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--primary);
      color: var(--cream);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      box-shadow: var(--shadow-md);
      border: 2px solid var(--accent);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 2;
    }
    .service-card:hover .service-icon {
      background: var(--accent);
      color: var(--dark);
      transform: rotate(15deg) scale(1.1);
    }

    .service-body {
      padding: 2rem 1.5rem 1.5rem;
    }
    .service-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }
    .service-card:hover .service-title {
      color: var(--primary);
    }
    .service-desc {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 1.2rem;
    }
    .service-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--primary);
      text-decoration: none;
      transition: gap 0.4s ease, color 0.3s ease;
    }
    .service-link i {
      transition: transform 0.4s ease;
    }
    .service-link:hover {
      color: var(--accent-dark);
    }
    .service-link:hover i {
      transform: translateX(5px);
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
      }
      .service-image {
        height: 200px;
      }
      .service-body {
        padding: 1.8rem 1.3rem 1.3rem;
      }
    }
    @media (max-width: 576px) {
      .services-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .service-image {
        height: 180px;
      }
      .service-title {
        font-size: 1.15rem;
      }
      .service-desc {
        font-size: 0.85rem;
      }
    }
  `],
})
export class ServicesComponent {
  services = SERVICES;
}
