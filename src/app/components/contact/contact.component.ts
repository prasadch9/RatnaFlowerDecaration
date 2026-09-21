import { Component, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  template: `
    <section id="contact" class="section section-ivory">
      <div class="container-lux">
        <div class="text-center-lux section-header" style="margin-bottom: 3.5rem;">
          <span class="section-label center" appReveal="fade-up">GET IN TOUCH</span>
          <h2 class="section-title" appReveal="fade-up" [style.--reveal-delay]="'0.1s'">
            Let's Plan Your <span class="accent">Event</span>
          </h2>
          <div class="gold-divider" appReveal="fade-up" [style.--reveal-delay]="'0.2s'"></div>
          <p class="section-subtitle" appReveal="fade-up" [style.--reveal-delay]="'0.3s'">
            Share your celebration details and we'll get back to you with a tailored decoration plan.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info" appReveal="fade-right">
            <h3 class="contact-info-title">Reach Us Directly</h3>
            <p class="contact-info-text">
              We'd love to hear about your upcoming event. Call, email, or visit us —
              we're here to make your celebration extraordinary.
            </p>

            <div class="contact-items">
              @for (item of contactInfo; track item.label) {
                <div class="contact-item">
                  <div class="contact-icon">
                    <i [class]="item.icon" aria-hidden="true"></i>
                  </div>
                  <div class="contact-detail">
                    <span class="contact-label">{{ item.label }}</span>
                    <span class="contact-value">{{ item.value }}</span>
                  </div>
                </div>
              }
            </div>

            <div class="contact-social">
              <p class="contact-social-label">Follow Our Work</p>
              <div class="contact-social-icons">
                <a href="https://instagram.com/ratnaaflowers" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
                <a href="https://facebook.com/ratnaaflowers" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
                <a href="https://youtube.com/@ratnaaflowers" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="YouTube"><i class="bi bi-youtube" aria-hidden="true"></i></a>
                <a href="https://wa.me/919876543210?text=Hi%20Ratnaa%20Flowers%2C%20I'd%20like%20to%20enquire%20about%20your%20decoration%20services." target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="WhatsApp"><i class="bi bi-whatsapp" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrap" appReveal="fade-left">
            <form (ngSubmit)="onSubmit()" #form="ngForm" class="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-input"
                    placeholder="Your name"
                    [(ngModel)]="formData.name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="form-input"
                    placeholder="Your phone"
                    [(ngModel)]="formData.phone"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-input"
                    placeholder="Your email"
                    [(ngModel)]="formData.email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="eventType">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    class="form-input"
                    [(ngModel)]="formData.eventType"
                    required
                  >
                    <option value="" disabled>Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Reception">Reception</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Haldi">Haldi</option>
                    <option value="Mehendi">Mehendi</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="eventDate">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  class="form-input"
                  [(ngModel)]="formData.eventDate"
                />
              </div>

              <div class="form-group">
                <label for="message">Tell Us About Your Event</label>
                <textarea
                  id="message"
                  name="message"
                  class="form-input form-textarea"
                  rows="4"
                  placeholder="Describe your dream decoration..."
                  [(ngModel)]="formData.message"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn-lux btn-primary-fill form-submit">
                Send Enquiry
                <i class="bi bi-send btn-icon" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Toast -->
      @if (showToast()) {
        <div class="toast-notification" role="alert">
          <div class="toast-icon">
            <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
          </div>
          <div class="toast-content">
            <span class="toast-title">Enquiry Sent!</span>
            <span class="toast-message">Thank you, {{ formData.name || 'friend' }}! We'll get back to you soon.</span>
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

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 3rem;
    }

    .contact-info {
      align-self: start;
    }

    /* Info */
    .contact-info {
      padding: 2.5rem;
      background: var(--dark);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-gold);
      color: var(--cream);
    }
    .contact-info-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--cream);
      margin-bottom: 0.8rem;
    }
    .contact-info-text {
      font-size: 0.92rem;
      color: rgba(255, 248, 240, 0.6);
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
    .contact-icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(212, 175, 106, 0.1);
      border: 1px solid var(--accent);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }
    .contact-item:hover .contact-icon {
      background: var(--accent);
      color: var(--dark);
    }
    .contact-label {
      display: block;
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 0.2rem;
    }
    .contact-value {
      display: block;
      font-size: 0.95rem;
      color: var(--cream);
    }

    .contact-social-label {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 0.8rem;
    }
    .contact-social-icons {
      display: flex;
      gap: 0.8rem;
    }
    .social-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(212, 175, 106, 0.1);
      border: 1px solid var(--accent);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .social-icon:hover {
      background: var(--accent);
      color: var(--dark);
      transform: scale(1.1) rotate(5deg);
    }

    /* Form */
    .contact-form-wrap {
      padding: 2.5rem;
      background: var(--white);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-gold);
      box-shadow: var(--shadow-sm);
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .form-group label {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-dark);
    }
    .form-input {
      padding: 0.8rem 1rem;
      border: 1.5px solid rgba(36, 26, 29, 0.1);
      border-radius: var(--radius-sm);
      font-family: var(--font-body);
      font-size: 0.92rem;
      color: var(--text-dark);
      background: var(--ivory);
      transition: all 0.3s ease;
      outline: none;
    }
    .form-input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(212, 175, 106, 0.15);
      background: var(--white);
    }
    .form-input::placeholder {
      color: rgba(138, 122, 126, 0.5);
    }
    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }
    .form-submit {
      align-self: flex-start;
      margin-top: 0.5rem;
    }

    /* Toast */
    .toast-notification {
      position: fixed;
      bottom: 30px;
      right: 30px;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.2rem 1.5rem;
      background: var(--white);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--accent);
      z-index: 10003;
      animation: toastIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      max-width: 380px;
    }
    @keyframes toastIn {
      from { opacity: 0; transform: translateY(20px) translateX(20px); }
      to { opacity: 1; transform: translateY(0) translateX(0); }
    }
    .toast-icon {
      font-size: 1.8rem;
      color: var(--green);
    }
    .toast-content {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .toast-title {
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--dark);
    }
    .toast-message {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    @media (max-width: 991px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .contact-info {
        padding: 2rem;
      }
      .contact-form-wrap {
        padding: 2rem;
      }
    }
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .contact-info, .contact-form-wrap {
        padding: 1.5rem;
      }
      .contact-info-title {
        font-size: 1.3rem;
      }
      .contact-items {
        gap: 1.2rem;
      }
      .contact-item {
        gap: 0.8rem;
      }
      .contact-icon {
        width: 38px;
        height: 38px;
        font-size: 0.95rem;
      }
      .contact-value {
        font-size: 0.88rem;
      }
      .form-submit {
        align-self: stretch;
        justify-content: center;
      }
      .toast-notification {
        bottom: 20px;
        right: 15px;
        left: 15px;
        max-width: none;
      }
    }
   @media (max-width: 576px) {

  /* Prevent horizontal overflow */
  .contact-grid,
  .contact-info,
  .contact-form-wrap,
  .contact-form,
  .form-row,
  .form-group {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  /* Contact grid */
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  /* Contact information */
  .contact-info {
    padding: 1.5rem;
    box-sizing: border-box;
  }

  .contact-info-title {
    font-size: 1.3rem;
  }

  .contact-info-text {
    font-size: 0.88rem;
    line-height: 1.7;
  }

  /* Contact items */
  .contact-item {
    width: 100%;
    min-width: 0;
  }

  .contact-detail {
    min-width: 0;
    flex: 1;
  }

  .contact-value {
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  /* Social icons */
  .contact-social-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  /* Form container */
  .contact-form-wrap {
    padding: 1.5rem;
    box-sizing: border-box;
  }

  /* Form */
  .contact-form {
    width: 100%;
    box-sizing: border-box;
  }

  /* Two columns -> one column */
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  /* Form groups */
  .form-group {
    width: 100%;
    min-width: 0;
  }

  /* Inputs */
  .form-input {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  /* Textarea */
  .form-textarea {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  /* Send button */
  .form-submit {
    width: 100%;
    align-self: stretch;
    justify-content: center;
    box-sizing: border-box;
  }

  /* Toast */
  .toast-notification {
    bottom: 20px;
    left: 15px;
    right: 15px;
    width: auto;
    max-width: none;
    box-sizing: border-box;
  }
}
  `],
})
export class ContactComponent {
  showSuccess = signal(false);
  showToast = signal(false);
  private isBrowser: boolean;

  contactInfo: ContactInfo[] = [
    { icon: 'bi bi-telephone-fill', label: 'Phone', value: '+91 62626 11125' },
    { icon: 'bi bi-envelope-fill', label: 'Email', value: 'ratnamflowerdecoration@gmail.com' },
    { icon: 'bi bi-geo-alt-fill', label: 'Location', value: 'Ave Appa Rao Rd, near HP Petrol Pump, Srinivas Nagar, Gandhipuram, Rajamahendravaram, Andhra Pradesh 533103' },
    { icon: 'bi bi-clock-fill', label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 8:00 PM' },
  ];

  formData = {
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  };

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  onSubmit(): void {
    this.showToast.set(true);
    this.showSuccess.set(true);

    setTimeout(() => {
      this.showToast.set(false);
    }, 4000);

    this.formData = {
      name: '',
      phone: '',
      email: '',
      eventType: '',
      eventDate: '',
      message: '',
    };
  }
}
