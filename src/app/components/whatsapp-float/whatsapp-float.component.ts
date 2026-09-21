import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  template: `
    <a
      href="https://wa.me/916262611125?text=Hi%20Ratnaa%20Flowers%2C%20I'd%20like%20to%20enquire%20about%20your%20decoration%20services."
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i class="bi bi-whatsapp" aria-hidden="true"></i>
      <span class="whatsapp-tooltip">Chat with us!</span>
    </a>
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      left: 30px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #25D366;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      z-index: 9998;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      animation: pulseGlow 2.5s ease-in-out infinite;
    }
    .whatsapp-float:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 30px rgba(37, 211, 102, 0.5);
    }
    .whatsapp-tooltip {
      position: absolute;
      left: 70px;
      top: 50%;
      transform: translateY(-50%) translateX(-10px);
      background: var(--dark);
      color: var(--cream);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      font-size: 0.8rem;
      font-weight: 500;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      border: 1px solid var(--border-gold);
    }
    .whatsapp-float:hover .whatsapp-tooltip {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
    @media (max-width: 576px) {
      .whatsapp-float {
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        font-size: 1.4rem;
      }
      .whatsapp-tooltip {
        display: none;
      }
    }
  `],
})
export class WhatsappFloatComponent {}
