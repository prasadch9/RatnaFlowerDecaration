import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { OccasionsComponent } from './components/occasions/occasions.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeaturedProjectComponent } from './components/featured-project/featured-project.component';
import { ProcessComponent } from './components/process/process.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { FloralParticlesComponent } from './components/floral-particles/floral-particles.component';
import { WhatsappFloatComponent } from './components/whatsapp-float/whatsapp-float.component';
import { ScrollPopupComponent } from './components/scroll-popup/scroll-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    OccasionsComponent,
    GalleryComponent,
    FeaturedProjectComponent,
    ProcessComponent,
    TestimonialsComponent,
    CtaComponent,
    ContactComponent,
    FooterComponent,
    ScrollProgressComponent,
    BackToTopComponent,
    FloralParticlesComponent,
    WhatsappFloatComponent,
    ScrollPopupComponent,
  ],
  template: `
    <app-scroll-progress />
    <app-floral-particles />
    <app-navbar />

    <main>
      <app-hero />
      <app-about />
      <app-services />
      <app-why-choose-us />
      <app-occasions />
      <app-gallery />
      <app-featured-project />
      <app-process />
      <app-testimonials />
      <app-cta />
      <app-contact />
    </main>

    <app-footer />
    <app-back-to-top />
    <app-whatsapp-float />
    <app-scroll-popup />
  `,
})
export class AppComponent {}
