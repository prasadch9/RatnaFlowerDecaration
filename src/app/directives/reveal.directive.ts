import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') animationClass: string = 'fade-up';
  @Input() delay: number = 0;
  @Input() threshold: number = 0.15;

  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      this.renderer.addClass(this.el.nativeElement, 'reveal-active');
      return;
    }

    const native = this.el.nativeElement;
    this.renderer.addClass(native, 'reveal');
    this.renderer.addClass(native, this.animationClass);

    if (this.delay > 0) {
      this.renderer.setStyle(native, '--reveal-delay', `${this.delay}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(native, 'reveal-active');
            this.observer?.unobserve(native);
          }
        });
      },
      { threshold: this.threshold, rootMargin: '0px 0px -50px 0px' }
    );

    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
