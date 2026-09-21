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

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar-lux" [class.scrolled]="scrolled()">
      <div class="navbar-inner">
        <a href="#home" class="navbar-brand" (click)="closeMenu()">
          <span class="brand-name">RATNAA</span>
          <span class="brand-sub">Flowers Decoration</span>
        </a>

        <button
          class="hamburger"
          [class.active]="menuOpen()"
          (click)="toggleMenu()"
          aria-label="Toggle menu"
          [attr.aria-expanded]="menuOpen()"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" [class.open]="menuOpen()">
          @for (item of navItems; track item.href) {
            <li>
              <a
                [href]="item.href"
                (click)="closeMenu()"
                class="nav-link"
              >{{ item.label }}</a>
            </li>
          }
          <li class="nav-cta-item">
            <a href="#contact" class="btn-lux btn-primary-fill" (click)="closeMenu()">
              Get a Quote
              <i class="bi bi-arrow-right btn-icon" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-lux {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      padding: 1.2rem 0;
    }
    .navbar-lux.scrolled {
      background: rgba(253, 251, 247, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      box-shadow: 0 2px 20px rgba(36, 26, 29, 0.08);
      padding: 0.6rem 0;
      border-bottom: 1px solid var(--border-gold);
    }
    .navbar-inner {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Brand */
    .navbar-brand {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      line-height: 1;
    }
    .brand-name {
      font-family: var(--font-heading);
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--cream);
      transition: color 0.4s ease;
    }
    .brand-sub {
      font-family: var(--font-body);
      font-size: 0.65rem;
      font-weight: 500;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--accent);
      margin-top: 3px;
    }
    .navbar-lux.scrolled .brand-name {
      color: var(--primary);
    }

    /* Nav Links */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .nav-link {
      font-family: var(--font-body);
      font-size: 0.82rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      color: rgba(255, 248, 240, 0.9);
      text-decoration: none;
      position: relative;
      padding: 0.3rem 0;
      transition: color 0.3s ease;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1.5px;
      background: var(--accent);
      transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .nav-link:hover {
      color: var(--accent);
    }
    .nav-link:hover::after {
      width: 100%;
    }
    .navbar-lux.scrolled .nav-link {
      color: var(--dark);
    }
    .navbar-lux.scrolled .nav-link:hover {
      color: var(--primary);
    }
    .nav-cta-item .btn-lux {
      padding: 0.65rem 1.5rem;
      font-size: 0.75rem;
    }

    /* Hamburger */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      width: 30px;
      height: 22px;
      padding: 0;
      cursor: pointer;
      z-index: 10001;
    }
    .hamburger span {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--cream);
      border-radius: 2px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      transform-origin: center;
    }
    .navbar-lux.scrolled .hamburger span {
      background: var(--dark);
    }
    .hamburger.active span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
      background: var(--primary);
    }
    .hamburger.active span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }
    .hamburger.active span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
      background: var(--primary);
    }

    /* Mobile */
    @media (max-width: 991px) {
      .hamburger {
        display: flex;
      }
      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 340px;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        gap: 1.8rem;
        background: var(--ivory);
        box-shadow: -10px 0 40px rgba(36, 26, 29, 0.15);
        transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        padding: 2rem;
        z-index: 10000;
      }
      .nav-links.open {
        right: 0;
      }
      .nav-link {
        font-size: 1.1rem;
        color: var(--dark);
        font-family: var(--font-heading);
        font-weight: 500;
      }
      .nav-cta-item {
        margin-top: 1rem;
      }
      .nav-cta-item .btn-lux {
        width: 100%;
        justify-content: center;
        padding: 0.9rem;
      }
    }
  `],
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = signal(false);
  menuOpen = signal(false);
  private isBrowser: boolean;
  private scrollHandler: (() => void) | null = null;

  navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Occasions', href: '#occasions' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

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
        const isScrolled = window.scrollY > 60;
        this.ngZone.run(() => this.scrolled.set(isScrolled));
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

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
