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
