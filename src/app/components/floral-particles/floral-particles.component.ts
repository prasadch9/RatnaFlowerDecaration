import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Petal {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  emoji: string;
}

@Component({
  selector: 'app-floral-particles',
  standalone: true,
  template: `
    <div class="petals-container" aria-hidden="true">
      @for (petal of petals; track petal) {
        <div
          class="petal"
          [style.left.%]="petal.left"
          [style.font-size.px]="petal.size"
          [style.animation-duration.s]="petal.duration"
          [style.animation-delay.s]="petal.delay"
          [style.--drift.px]="petal.drift"
          [style.opacity]="petal.opacity"
        >{{ petal.emoji }}</div>
      }
    </div>
  `,
  styles: [`
    .petals-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }
    .petal {
      position: absolute;
      top: -30px;
      animation: petal-fall linear infinite;
      will-change: transform, opacity;
      user-select: none;
    }
    @keyframes petal-fall {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: var(--p-opacity, 0.4);
      }
      50% {
        transform: translateY(50vh) translateX(var(--drift, 20px)) rotate(180deg);
      }
      90% {
        opacity: var(--p-opacity, 0.4);
      }
      100% {
        transform: translateY(105vh) translateX(calc(var(--drift, 20px) * -1)) rotate(360deg);
        opacity: 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .petals-container { display: none; }
    }
  `],
})
export class FloralParticlesComponent implements OnInit {
  petals: Petal[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    const emojis = ['🌸', '✿', '❀', '🌷', '🌹'];
    const count = 12;
    this.petals = Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      size: 14 + Math.random() * 16,
      duration: 18 + Math.random() * 20,
      delay: Math.random() * 20,
      drift: (Math.random() - 0.5) * 120,
      opacity: 0.15 + Math.random() * 0.2,
      emoji: emojis[i % emojis.length],
    }));
  }

}
