import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  NgZone,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-popup',
  standalone: true,
  template: `
    @if (show()) {
      <div class="popup-overlay" (click)="close($event)">
        <div class="popup-card" (click)="$event.stopPropagation()">
          <button class="popup-close" (click)="close()" aria-label="Close popup">
            <i class="bi bi-x-lg" aria-hidden="true"></i>
          </button>
          <div class="popup-floral" aria-hidden="true">
            <i class="bi bi-flower1"></i>
          </div>
          <h3 class="popup-title">Planning a Celebration?</h3>
          <p class="popup-text">
            Let us turn your dream into reality. Get a free consultation with our
            floral decoration experts today.
          </p>
          <div class="popup-actions">
            <a href="#contact" class="btn-lux btn-primary-fill popup-btn" (click)="close()">
              Contact Us
              <i class="bi bi-arrow-right btn-icon" aria-hidden="true"></i>
            </a>
            <a
              href="https://wa.me/916262611125?text=Hi%20Ratnaa%20Flowers%2C%20I'd%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              class="btn-lux popup-btn"
              (click)="close()"
            >
              <i class="bi bi-whatsapp" aria-hidden="true"></i>
              WhatsApp
            </a>
          </div>
          <p class="popup-note">No obligation. Free quotes for all events.</p>
        </div>
      </div>
    }
  `,
  styles: [`
    .popup-overlay {
      position: fixed;
      inset: 0;
      background: rgba(20, 14, 16, 0.6);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 10005;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      animation: fadeIn 0.4s ease;
    }
    .popup-card {
      position: relative;
      background: var(--ivory);
      border-radius: var(--radius-lg);
      padding: 3rem 2.5rem 2.5rem;
      text-align: center;
      max-width: 420px;
      width: 100%;
      border: 1px solid var(--border-gold);
      box-shadow: var(--shadow-lg);
      animation: popupIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes popupIn {
      from { opacity: 0; transform: translateY(30px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .popup-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(36, 26, 29, 0.05);
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .popup-close:hover {
      background: var(--primary);
      color: var(--cream);
      transform: rotate(90deg);
    }
    .popup-floral {
      width: 70px;
      height: 70px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      background: var(--primary);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      border: 2px solid var(--accent);
      animation: pulseGlow 2s ease-in-out infinite;
    }
    .popup-title {
      font-family: var(--font-heading);
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 0.8rem;
    }
    .popup-text {
      font-size: 0.92rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 1.8rem;
    }
    .popup-actions {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-bottom: 1.2rem;
    }
    .popup-btn {
      width: 100%;
      justify-content: center;
    }
    .popup-note {
      font-size: 0.75rem;
      color: var(--accent-dark);
      letter-spacing: 0.05em;
    }
    @media (max-width: 576px) {
      .popup-card {
        padding: 2.5rem 1.5rem 2rem;
      }
      .popup-title {
        font-size: 1.4rem;
      }
    }
  `],
})
export class ScrollPopupComponent implements OnInit, OnDestroy {
  show = signal(false);
  private isBrowser: boolean;
  private scrollTimer: ReturnType<typeof setTimeout> | null = null;
  private scrollHandler: (() => void) | null = null;
  private hasShown = false;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      this.scrollHandler = () => {
        if (this.hasShown) return;
        if (this.scrollTimer) clearTimeout(this.scrollTimer);
        this.scrollTimer = setTimeout(() => {
          if (this.hasShown) return;
          if (window.scrollY > 300) {
            this.hasShown = true;
            this.ngZone.run(() => this.show.set(true));
          }
        }, 5000);
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
    });
  }

  ngOnDestroy(): void {
    if (this.scrollTimer && this.isBrowser) clearTimeout(this.scrollTimer);
    if (this.scrollHandler && this.isBrowser) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  close(_event?: Event): void {
    if (_event && _event.target !== _event.currentTarget) return;
    this.show.set(false);
  }
}
