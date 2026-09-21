import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  signal,
  ElementRef,
  ViewChild,
  NgZone,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { STATS, img } from '../../data/site-data';

interface DisplayStat {
  value: number;
  suffix: string;
  label: string;
  current: number;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="about" class="section section-ivory">
      <div class="container-lux">
        <div class="about-grid">
          <!-- Left: Image Collage -->
          <div class="about-images">
            <div class="corner-deco tl"></div>
            <div class="corner-deco br"></div>
            <div class="img-main">
              <img [src]="images[0]" alt="Elegant floral decoration" loading="eager" />
            </div>
            <div class="img-top-right">
              <img [src]="images[1]" alt="Floral ceiling decoration" loading="lazy" />
            </div>
            <div class="img-bottom-left">
              <img [src]="images[2]" alt="Outdoor wedding floral arrangement" loading="lazy" />
            </div>
            <div class="about-badge">
              <span class="badge-number">10+</span>
              <span class="badge-text">Years of<br/>Excellence</span>
            </div>
          </div>

          <!-- Right: Content -->
          <div class="about-content">
            <span class="section-label" appReveal="fade-up">OUR STORY</span>
            <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
              Creating Beautiful Spaces with <span class="accent">Flowers</span> &amp; Imagination
            </h2>
            <div class="gold-divider left" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
            <p class="about-text" appReveal="fade-up" [style.--reveal-delay]="'0.3s'">
              At Ratnaa Flowers Decoration, we believe every celebration deserves to be
              extraordinary. For over a decade, we have been transforming venues into
              breathtaking floral experiences — from intimate gatherings to grand weddings.
            </p>
            <p class="about-text" appReveal="fade-up" [style.--reveal-delay]="'0.4s'">
              Our passion lies in blending traditional Indian aesthetics with contemporary
              design, creating decorations that are as unique as your story. Every petal
              is placed with intention, every arrangement crafted with love.
            </p>

            <!-- Stats -->
            <div class="about-stats" #statsContainer>
              @for (stat of displayStats; track stat.label; let i = $index) {
                <div class="stat-item" appReveal="fade-up" [style.--reveal-delay]="i * 0.1 + 's'">
                  <span class="stat-value">
                    {{ stat.current }}{{ stat.suffix }}
                  </span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    /* Images */
    .about-images {
      position: relative;
      height: 560px;
      width: 100%;
    }
    .img-main {
      position: absolute;
      top: 0;
      left: 0;
      width: 75%;
      height: 75%;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      border: 1px solid var(--border-gold);
    }
    .img-main img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
    }
    .about-images:hover .img-main img {
      transform: scale(1.05);
    }
    .img-top-right {
      position: absolute;
      top: 5%;
      right: 0;
      width: 42%;
      height: 42%;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      border: 2px solid var(--ivory);
    }
    .img-top-right img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .img-bottom-left {
      position: absolute;
      bottom: 0;
      left: 12%;
      width: 45%;
      height: 38%;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      border: 2px solid var(--ivory);
    }
    .img-bottom-left img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .about-badge {
      position: absolute;
      bottom: 8%;
      right: 5%;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background: var(--primary);
      color: var(--cream);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: var(--shadow-lg);
      border: 2px solid var(--accent);
      z-index: 2;
    }
    .badge-number {
      font-family: var(--font-heading);
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--accent);
      line-height: 1;
    }
    .badge-text {
      font-size: 0.62rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-top: 4px;
      line-height: 1.3;
    }

    /* Content */
    .about-content {
      padding: 0 1rem;
    }
    .about-text {
      font-size: 1rem;
      color: var(--text-muted);
      line-height: 1.9;
      margin-top: 1rem;
    }

    /* Stats */
    .about-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      margin-top: 2.5rem;
      padding-top: 2.5rem;
      border-top: 1px solid var(--border-gold);
    }
    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .stat-value {
      font-family: var(--font-heading);
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--primary);
      line-height: 1;
    }
    .stat-label {
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-top: 0.5rem;
    }

    @media (max-width: 991px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      .about-images {
        height: 450px;
        max-width: 550px;
        margin: 0 auto;
      }
    }
    @media (max-width: 768px) {
      .about-images {
        height: 400px;
      }
      .about-content {
        padding: 0 0.5rem;
      }
      .about-text {
        font-size: 0.92rem;
      }
      .about-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.2rem;
      }
    }
    @media (max-width: 576px) {
      .about-images {
        height: 300px;
      }
      .img-main {
        width: 72%;
        height: 72%;
      }
      .img-top-right {
        width: 42%;
        height: 38%;
      }
      .img-bottom-left {
        width: 46%;
        height: 34%;
      }
      .stat-value {
        font-size: 1.6rem;
      }
      .stat-label {
        font-size: 0.65rem;
      }
      .about-badge {
        width: 80px;
        height: 80px;
        bottom: 5%;
        right: 3%;
      }
      .badge-number {
        font-size: 1.2rem;
      }
      .badge-text {
        font-size: 0.55rem;
      }
      .about-text {
        font-size: 0.88rem;
      }
    }
  `],
})
export class AboutComponent implements OnInit {
  images = [img.aboutCollage1, img.aboutCollage2, img.aboutCollage3];
  displayStats: DisplayStat[] = STATS.map((s) => ({
    value: s.value,
    suffix: s.suffix,
    label: s.label,
    current: 0,
  }));

  @ViewChild('statsContainer') statsContainer!: ElementRef<HTMLElement>;
  private isBrowser: boolean;
  private animated = false;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      this.displayStats.forEach((s) => (s.current = s.value));
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.setupObserver(), 500);
    });
  }

  private setupObserver(): void {
    if (!this.statsContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(this.statsContainer.nativeElement);
  }

  private animateStats(): void {
    this.displayStats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          current = stat.value;
          clearInterval(timer);
        }
        this.ngZone.run(() => {
          stat.current = Math.round(current);
        });
      }, stepTime);
    });
  }
}
