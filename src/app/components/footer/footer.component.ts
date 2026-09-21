import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container-lux">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="footer-brand-name">RATNAA</span>
              <span class="footer-brand-sub">Flowers Decoration</span>
            </div>
            <p class="footer-tagline">
              Luxury flower &amp; event decoration crafting beautiful memories for your
              most precious celebrations.
            </p>
            <div class="footer-social">
              <a href="https://instagram.com/ratnaaflowers" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Instagram">
                <i class="bi bi-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://facebook.com/ratnaaflowers" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Facebook">
                <i class="bi bi-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://youtube.com/@ratnaaflowers" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="YouTube">
                <i class="bi bi-youtube" aria-hidden="true"></i>
              </a>
              <a href="https://wa.me/916262611125?text=Hi%20Ratnaa%20Flowers%2C%20I'd%20like%20to%20enquire%20about%20your%20decoration%20services." target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="WhatsApp">
                <i class="bi bi-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              @for (link of quickLinks; track link.label) {
                <li><a [href]="link.href">{{ link.label }}</a></li>
              }
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-col">
            <h4 class="footer-heading">Services</h4>
            <ul class="footer-links">
              @for (link of serviceLinks; track link.label) {
                <li><a [href]="link.href">{{ link.label }}</a></li>
              }
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4 class="footer-heading">Get In Touch</h4>
            <ul class="footer-contact">
              <li>
                <i class="bi bi-telephone" aria-hidden="true"></i>
                <span>+91 62626 11125</span>
              </li>
              <li>
                <i class="bi bi-envelope" aria-hidden="true"></i>
                <span>hello@ratnaaflowers.com</span>
              </li>
              <li>
                <i class="bi bi-geo-alt" aria-hidden="true"></i>
                <span>MG Road, Bengaluru, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Ratnaa Flowers Decoration. All Rights Reserved.</p>
          <p class="footer-credit">Crafted with <i class="bi bi-heart-fill" aria-hidden="true"></i> for beautiful celebrations</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--dark);
      color: rgba(255, 248, 240, 0.7);
      padding: 4rem 0 1.5rem;
      position: relative;
    }
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--accent), transparent);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 2.5rem;
      padding-bottom: 3rem;
      border-bottom: 1px solid rgba(212, 175, 106, 0.15);
    }

    /* Brand */
    .footer-logo {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.2rem;
    }
    .footer-brand-name {
      font-family: var(--font-heading);
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--cream);
    }
    .footer-brand-sub {
      font-size: 0.65rem;
      font-weight: 500;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--accent);
      margin-top: 3px;
    }
    .footer-tagline {
      font-size: 0.88rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      max-width: 320px;
    }

    .footer-social {
      display: flex;
      gap: 0.8rem;
    }
    .footer-social-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(212, 175, 106, 0.08);
      border: 1px solid rgba(212, 175, 106, 0.25);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .footer-social-icon:hover {
      background: var(--accent);
      color: var(--dark);
      transform: translateY(-3px) scale(1.1);
    }

    /* Columns */
    .footer-heading {
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--cream);
      margin-bottom: 1.2rem;
      position: relative;
      padding-bottom: 0.8rem;
    }
    .footer-heading::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--accent);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }
    .footer-links a {
      font-size: 0.88rem;
      color: rgba(255, 248, 240, 0.6);
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
      position: relative;
      padding-left: 0;
    }
    .footer-links a::before {
      content: '→';
      position: absolute;
      left: -18px;
      opacity: 0;
      transition: all 0.3s ease;
      color: var(--accent);
    }
    .footer-links a:hover {
      color: var(--accent);
      padding-left: 18px;
    }
    .footer-links a:hover::before {
      opacity: 1;
      left: 0;
    }

    .footer-contact {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    .footer-contact li {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      font-size: 0.88rem;
      color: rgba(255, 248, 240, 0.6);
    }
    .footer-contact i {
      color: var(--accent);
      margin-top: 3px;
      flex-shrink: 0;
    }

    /* Bottom */
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1.5rem;
      font-size: 0.82rem;
    }
    .footer-credit {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    .footer-credit i {
      color: var(--primary-light);
      font-size: 0.75rem;
    }

    @media (max-width: 991px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }
    @media (max-width: 576px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
      }
    }
  `],
})
export class FooterComponent {
  quickLinks: FooterLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  serviceLinks: FooterLink[] = [
    { label: 'Wedding Decoration', href: '#services' },
    { label: 'Floral Decoration', href: '#services' },
    { label: 'Reception Decoration', href: '#services' },
    { label: 'Stage Decoration', href: '#services' },
  ];
}
