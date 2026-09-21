import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div class="scroll-progress" [style.width.%]="progress()">
      <div class="scroll-progress-glow"></div>
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      z-index: 10000;
      pointer-events: none;
    }
    .scroll-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary), var(--accent), var(--primary-light));
      transition: width 0.1s linear;
      position: relative;
      box-shadow: 0 0 8px rgba(212, 175, 106, 0.5);
    }
    .scroll-progress-glow {
      position: absolute;
      right: 0;
      top: -2px;
      width: 20px;
      height: 7px;
      background: var(--accent);
      border-radius: 50%;
      filter: blur(4px);
      opacity: 0.8;
    }
  `],
})
export class ScrollProgressComponent implements OnInit, OnDestroy {
  progress = signal(0);
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
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        this.ngZone.run(() => this.progress.set(pct));
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
}
