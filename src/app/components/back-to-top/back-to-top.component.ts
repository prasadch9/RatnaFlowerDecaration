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
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <button
      class="back-to-top"
      [class.visible]="visible()"
      (click)="scrollToTop()"
      aria-label="Back to top"
    >
      <i class="bi bi-arrow-up" aria-hidden="true"></i>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: var(--primary);
      color: var(--cream);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px) scale(0.8);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 9998;
      box-shadow: 0 4px 20px rgba(139, 30, 63, 0.3);
      border: 1.5px solid var(--accent);
    }
    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
    .back-to-top:hover {
      background: var(--accent);
      color: var(--dark);
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 8px 30px rgba(212, 175, 106, 0.4);
    }
    .back-to-top:hover i {
      transform: rotate(-8deg);
    }
    .back-to-top i {
      transition: transform 0.4s ease;
    }
    @media (max-width: 576px) {
      .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 46px;
        height: 46px;
      }
    }
  `],
})
export class BackToTopComponent implements OnInit, OnDestroy {
  visible = signal(false);
  private isBrowser: boolean;
  private scrollHandler: (() => void) | null = null;

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
        const show = window.scrollY > 500;
        this.ngZone.run(() => this.visible.set(show));
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      this.scrollHandler();
    });
  }

  ngOnDestroy(): void {
    if (this.scrollHandler && this.isBrowser) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  scrollToTop(): void {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
