import {
  Component,
  signal,
  computed,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { GALLERY } from '../../data/site-data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="gallery" class="section section-cream">
      <div class="container-lux">
        <div class="text-center-lux section-header" style="margin-bottom: 3.5rem;">
          <span class="section-label center" appReveal="fade-up">OUR WORK</span>
          <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
            A Glimpse of Our <span class="accent">Gallery</span>
          </h2>
          <div class="gold-divider" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
          <p class="section-subtitle" appReveal="fade-up" [style.--reveal-delay]="'0.3s'">
            Browse through our collection of beautifully decorated events, each one a unique
            story told through flowers.
          </p>
        </div>

        <div class="gallery-grid">
          @for (item of gallery; track item.src; let i = $index) {
            <figure
              class="gallery-item span-{{ item.span }}"
              appReveal="zoom-in"
              [style.--reveal-delay]="(i % 4) * 0.08 + 's'"
              (click)="openLightbox(i)"
              [attr.aria-label]="'View ' + item.alt"
            >
              <img [src]="item.src" [alt]="item.alt" loading="lazy" />
              <div class="gallery-overlay">
                <span class="gallery-category">{{ item.category }}</span>
                <span class="gallery-view">
                  <i class="bi bi-zoom-in" aria-hidden="true"></i>
                </span>
              </div>
            </figure>
          }
        </div>
      </div>

      <!-- Lightbox -->
      @if (lightboxOpen()) {
        <div class="lightbox" (click)="closeLightbox($event)" role="dialog" aria-label="Image viewer">
          <button class="lightbox-close" (click)="closeLightbox()" aria-label="Close gallery">
            <i class="bi bi-x-lg" aria-hidden="true"></i>
          </button>
          <button class="lightbox-nav lightbox-prev" (click)="prevImage($event)" aria-label="Previous image">
            <i class="bi bi-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="lightbox-nav lightbox-next" (click)="nextImage($event)" aria-label="Next image">
            <i class="bi bi-chevron-right" aria-hidden="true"></i>
          </button>
          <div class="lightbox-content" (click)="$event.stopPropagation()">
            <img [src]="currentImage().src" [alt]="currentImage().alt" />
            <div class="lightbox-info">
              <span class="lightbox-category">{{ currentImage().category }}</span>
              <span class="lightbox-counter">{{ currentIndex() + 1 }} / {{ gallery.length }}</span>
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styles: [`
    .section-header {
      max-width: 700px;
      margin: 0 auto 3.5rem;
    }

    /* Masonry Grid */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 220px;
      gap: 1rem;
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-md);
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      margin: 0;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .gallery-item:hover {
      box-shadow: var(--shadow-lg);
    }

    .gallery-item.span-tall {
      grid-row: span 2;
    }
    .gallery-item.span-wide {
      grid-column: span 2;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .gallery-item:hover img {
      transform: scale(1.1);
    }

    .gallery-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 40%, rgba(36, 26, 29, 0.8) 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: 1.2rem;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    .gallery-category {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--cream);
      transform: translateY(10px);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .gallery-item:hover .gallery-category {
      transform: translateY(0);
    }

    .gallery-view {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.5);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--accent);
      color: var(--dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
    }
    .gallery-item:hover .gallery-view {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Lightbox */
    .lightbox {
      position: fixed;
      inset: 0;
      background: rgba(20, 14, 16, 0.95);
      z-index: 10002;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.4s ease;
      padding: 2rem;
    }
    .lightbox-content {
      max-width: 900px;
      width: 100%;
      text-align: center;
      position: relative;
    }
    .lightbox-content img {
      max-width: 100%;
      max-height: 80vh;
      border-radius: var(--radius-md);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      border: 1px solid var(--border-gold);
      object-fit: contain;
    }
    .lightbox-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      padding: 0 1rem;
    }
    .lightbox-category {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      color: var(--accent);
      font-weight: 600;
    }
    .lightbox-counter {
      font-size: 0.85rem;
      color: rgba(255, 248, 240, 0.5);
      letter-spacing: 0.1em;
    }

    .lightbox-close,
    .lightbox-nav {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 248, 240, 0.1);
      color: var(--cream);
      border: 1px solid var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 1;
    }
    .lightbox-close {
      top: 1.5rem;
      right: 1.5rem;
    }
    .lightbox-prev { left: 1.5rem; top: 50%; transform: translateY(-50%); }
    .lightbox-next { right: 1.5rem; top: 50%; transform: translateY(-50%); }
    .lightbox-close:hover,
    .lightbox-nav:hover {
      background: var(--accent);
      color: var(--dark);
    }

    @media (max-width: 991px) {
      .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 180px;
      }
      .lightbox-prev { left: 0.5rem; }
      .lightbox-next { right: 0.5rem; }
      .lightbox-close { top: 0.8rem; right: 0.8rem; }
    }
    @media (max-width: 576px) {
      .gallery-grid {
        grid-template-columns: 1fr;
        grid-auto-rows: 200px;
      }
      .gallery-item.span-wide,
      .gallery-item.span-tall {
        grid-row: span 1;
        grid-column: span 1;
      }
    }
  `],
})
export class GalleryComponent {
  gallery = GALLERY;
  lightboxOpen = signal(false);
  currentIndex = signal(0);
  currentImage = computed(() => this.gallery[this.currentIndex()]);
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  openLightbox(index: number): void {
    this.currentIndex.set(index);
    this.lightboxOpen.set(true);
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(event?: Event): void {
    if (event && event.target !== event.currentTarget) return;
    this.lightboxOpen.set(false);
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  nextImage(event: Event): void {
    event.stopPropagation();
    this.currentIndex.update((i) => (i + 1) % this.gallery.length);
  }

  prevImage(event: Event): void {
    event.stopPropagation();
    this.currentIndex.update((i) => (i - 1 + this.gallery.length) % this.gallery.length);
  }
}
