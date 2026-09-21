export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface OccasionItem {
  title: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  span: 'tall' | 'wide' | 'normal';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  event: string;
  rating: number;
  text: string;
  initials: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

/* ---------- Image URLs (Pexels, license-free) ---------- */

const img = {
  heroStage: 'https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg?auto=compress&cs=tinysrgb&w=1600',
  heroStage2: 'https://images.pexels.com/photos/13156145/pexels-photo-13156145.jpeg?auto=compress&cs=tinysrgb&w=1600',
  mandap: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLEbLgQxWdKwTdh9LhjtQjd1v0oDjMxwvT_hsswJpgOBvXVJ6YB8RMZRk&s=10',
  floralArch: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2u2ugHFs_JC4DFFqKzitAsyY_aWt1jPAitcUweKln3g&s=10',
  floralArch2: 'https://images.pexels.com/photos/27958449/pexels-photo-27958449.jpeg?auto=compress&cs=tinysrgb&w=1200',
  floralArch3: 'https://images.pexels.com/photos/33485964/pexels-photo-33485964.jpeg?auto=compress&cs=tinysrgb&w=1200',
  stageRed: 'https://images.pexels.com/photos/14395559/pexels-photo-14395559.jpeg?auto=compress&cs=tinysrgb&w=1200',
  stageGold: 'https://images.pexels.com/photos/12584803/pexels-photo-12584803.jpeg?auto=compress&cs=tinysrgb&w=1200',
  stageCouple: 'https://images.pexels.com/photos/30215316/pexels-photo-30215316.jpeg?auto=compress&cs=tinysrgb&w=1200',
  stageBride: 'https://images.pexels.com/photos/26186199/pexels-photo-26186199.jpeg?auto=compress&cs=tinysrgb&w=1200',
  reception: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRDzMNwMuSbkwn3lqj6W_vmRWeeIbORMBvWeMRW0axQ&s',
  reception2: 'https://images.pexels.com/photos/17023018/pexels-photo-17023018.jpeg?auto=compress&cs=tinysrgb&w=1200',
  reception3: 'https://images.pexels.com/photos/16120231/pexels-photo-16120231.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tableSetting: 'https://images.pexels.com/photos/17001756/pexels-photo-17001756.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tablePink: 'https://images.pexels.com/photos/16120210/pexels-photo-16120210.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tableRoses: 'https://images.pexels.com/photos/16120136/pexels-photo-16120136.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tableCenter: 'https://images.pexels.com/photos/10970554/pexels-photo-10970554.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tableBanquet: 'https://images.pexels.com/photos/16935926/pexels-photo-16935926.jpeg?auto=compress&cs=tinysrgb&w=1200',
  haldi: 'https://images.pexels.com/photos/31002035/pexels-photo-31002035.jpeg?auto=compress&cs=tinysrgb&w=1200',
  haldi2: 'https://images.pexels.com/photos/31307957/pexels-photo-31307957.jpeg?auto=compress&cs=tinysrgb&w=1200',
  haldi3: 'https://images.pexels.com/photos/35457633/pexels-photo-35457633.jpeg?auto=compress&cs=tinysrgb&w=1200',
  mehendi: 'https://images.pexels.com/photos/33078524/pexels-photo-33078524.jpeg?auto=compress&cs=tinysrgb&w=1200',
  birthday: 'https://images.pexels.com/photos/14457430/pexels-photo-14457430.jpeg?auto=compress&cs=tinysrgb&w=1200',
  birthday2: 'https://images.pexels.com/photos/3394219/pexels-photo-3394219.jpeg?auto=compress&cs=tinysrgb&w=1200',
  babyShower: 'https://images.pexels.com/photos/3593428/pexels-photo-3593428.jpeg?auto=compress&cs=tinysrgb&w=1200',
  babyShower2: 'https://images.pexels.com/photos/38258860/pexels-photo-38258860.jpeg?auto=compress&cs=tinysrgb&w=1200',
  corporate: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdbGn3XY1rmqb8RnMalEiDqzoOBgn2l_obuMjNtpZOA&s=10',
  corporate2: 'https://images.pexels.com/photos/14646741/pexels-photo-14646741.jpeg?auto=compress&cs=tinysrgb&w=1200',
  flowerWall: 'https://images.pexels.com/photos/33008892/pexels-photo-33008892.jpeg?auto=compress&cs=tinysrgb&w=1200',
  flowerWall2: 'https://images.pexels.com/photos/38783059/pexels-photo-38783059.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ceiling: 'https://images.pexels.com/photos/32763241/pexels-photo-32763241.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ceiling2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzJWrGmjzlYvQQm965LUcNuu5bLjebwynHMD4jwhL5Q&s=10',
  entrance: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzJWrGmjzlYvQQm965LUcNuu5bLjebwynHMD4jwhL5Q&s=10',
  entrance2: 'https://images.pexels.com/photos/33485969/pexels-photo-33485969.jpeg?auto=compress&cs=tinysrgb&w=1200',
  aboutCollage1: 'https://images.pexels.com/photos/17023018/pexels-photo-17023018.jpeg?auto=compress&cs=tinysrgb&w=1200',
  aboutCollage2: 'https://images.pexels.com/photos/27958449/pexels-photo-27958449.jpeg?auto=compress&cs=tinysrgb&w=1200',
  aboutCollage3: 'https://images.pexels.com/photos/33485964/pexels-photo-33485964.jpeg?auto=compress&cs=tinysrgb&w=1200',
  featured: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2JRqnHnMQf36QqoXdYvFNzflMr7z7NNZ6LuRfsZsxA&s=10',
  petalBg: 'https://images.pexels.com/photos/13246785/pexels-photo-13246785.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ctaBg: 'https://images.pexels.com/photos/17294727/pexels-photo-17294727.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export { img };

export const SERVICES: ServiceItem[] = [
  {
    title: 'Wedding Decoration',
    description: 'Breathtaking mandap and stage setups that make your big day unforgettable.',
    icon: 'bi-flower1',
    image: img.mandap,
  },
  {
    title: 'Reception Decoration',
    description: 'Elegant reception halls with stunning floral arrangements and lighting.',
    icon: 'bi-stars',
    image: img.reception,
  },
  {
    title: 'Engagement Decoration',
    description: 'Intimate and romantic settings for your ring ceremony and engagement.',
    icon: 'bi-gem',
    image: img.floralArch,
  },
  {
    title: 'Birthday Decoration',
    description: 'Joyful and vibrant balloon and floral setups for memorable birthdays.',
    icon: 'bi-balloon',
    image: img.birthday,
  },
  {
    title: 'Haldi Decoration',
    description: 'Traditional yellow-themed decor with marigolds and festive details.',
    icon: 'bi-sun',
    image: img.haldi,
  },
  {
    title: 'Mehendi Decoration',
    description: 'Colorful and artistic setups perfect for your mehendi celebrations.',
    icon: 'bi-palette',
    image: img.mehendi,
  },
  {
    title: 'Baby Shower Decoration',
    description: 'Soft pastel-themed decor to celebrate the arrival of your little one.',
    icon: 'bi-heart',
    image: img.babyShower,
  },
  {
    title: 'Stage Decoration',
    description: 'Grand stage designs that become the centerpiece of your event.',
    icon: 'bi-star',
    image: img.stageGold,
  },
  {
    title: 'Floral Entrance Decoration',
    description: 'Welcoming floral arches and entrances that set the perfect first impression.',
    icon: 'bi-door-open',
    image: img.entrance,
  },
  {
    title: 'Corporate Event Decoration',
    description: 'Professional and sophisticated decor for corporate gatherings and galas.',
    icon: 'bi-briefcase',
    image: img.corporate,
  },
];

export const OCCASIONS: OccasionItem[] = [
  { title: 'Weddings', image: img.heroStage2 },
  { title: 'Engagements', image: img.floralArch3 },
  { title: 'Haldi', image: img.haldi3 },
  { title: 'Mehendi', image: img.mehendi },
  { title: 'Reception', image: img.reception3 },
  { title: 'Birthdays', image: img.birthday2 },
  { title: 'Baby Showers', image: img.babyShower2 },
  { title: 'Corporate Events', image: img.corporate2 },
];

export const GALLERY: GalleryItem[] = [
  { src: img.mandap, alt: 'Wedding mandap with floral decoration', category: 'Wedding Stage', span: 'wide' },
  { src: img.entrance, alt: 'Floral entrance decoration', category: 'Floral Entrance', span: 'normal' },
  { src: img.ceiling, alt: 'Ceiling floral decoration', category: 'Ceiling Decoration', span: 'tall' },
  { src: img.reception, alt: 'Reception stage decoration', category: 'Reception Stage', span: 'normal' },
  { src: img.tablePink, alt: 'Bridal table with pink flowers', category: 'Bridal Table', span: 'wide' },
  { src: img.flowerWall, alt: 'Flower wall backdrop', category: 'Flower Walls', span: 'normal' },
  { src: img.haldi2, alt: 'Haldi ceremony decoration', category: 'Haldi Decoration', span: 'normal' },
  { src: img.mehendi, alt: 'Mehendi decoration setup', category: 'Mehendi Decoration', span: 'tall' },
  { src: img.stageRed, alt: 'Red and gold wedding stage', category: 'Wedding Stage', span: 'normal' },
  { src: img.birthday, alt: 'Birthday decoration with balloons', category: 'Birthday Decoration', span: 'normal' },
  { src: img.ceiling2, alt: 'Hanging floral ceiling', category: 'Ceiling Decoration', span: 'wide' },
  { src: img.tableCenter, alt: 'Floral centerpiece table', category: 'Bridal Table', span: 'normal' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your vision, preferences, and budget to understand your dream event.',
    icon: 'bi-chat-heart',
  },
  {
    number: '02',
    title: 'Theme Selection',
    description: 'Choose from curated themes or let us create a custom theme just for you.',
    icon: 'bi-palette2',
  },
  {
    number: '03',
    title: 'Design Planning',
    description: 'Detailed 3D mockups and floor plans bring your decoration concept to life.',
    icon: 'bi-easel',
  },
  {
    number: '04',
    title: 'Decoration Setup',
    description: 'Our team arrives on-site to set up every floral element with precision.',
    icon: 'bi-flower1',
  },
  {
    number: '05',
    title: 'Final Finishing',
    description: 'Last-minute touches and quality checks ensure everything is picture-perfect.',
    icon: 'bi-check2-circle',
  },
  {
    number: '06',
    title: 'Event Day',
    description: 'We stay on-site to manage decor throughout your event for a flawless experience.',
    icon: 'bi-calendar-heart',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya & Arjun Sharma',
    event: 'Wedding Decoration',
    rating: 5,
    text: 'Ratnaa Flowers transformed our wedding venue completely. Every detail was beautiful and perfectly executed. The mandap looked like something from a dream.',
    initials: 'PA',
  },
  {
    name: 'Ananya Reddy',
    event: 'Reception Decoration',
    rating: 5,
    text: 'The reception hall was absolutely breathtaking. Guests could not stop talking about the floral arrangements and the stage setup. Truly premium quality.',
    initials: 'AR',
  },
  {
    name: 'Kavya & Vikram Mehta',
    event: 'Engagement Decoration',
    rating: 5,
    text: 'From the floral entrance to the stage, everything was magical. The team was professional, on time, and incredibly creative. Highly recommended.',
    initials: 'KV',
  },
  {
    name: 'Sneha Iyer',
    event: 'Birthday Decoration',
    rating: 5,
    text: 'They made my daughter birthday unforgettable. The balloon and flower arrangements were colorful, elegant, and exactly what we wanted.',
    initials: 'SI',
  },
  {
    name: 'Rohan & Divya Gupta',
    event: 'Haldi & Mehendi',
    rating: 5,
    text: 'The haldi and mehendi setups were vibrant and full of life. Ratnaa understood our cultural requirements and delivered beyond expectations.',
    initials: 'RD',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Creative Designs',
    description: 'Unique, artistic concepts tailored to your personality and event theme.',
    icon: 'bi-palette-fill',
  },
  {
    title: 'Premium Flowers',
    description: 'Only the freshest, highest-quality blooms sourced from trusted growers.',
    icon: 'bi-flower1',
  },
  {
    title: 'Experienced Team',
    description: 'A skilled team with over a decade of luxury event decoration expertise.',
    icon: 'bi-people-fill',
  },
  {
    title: 'Customized Themes',
    description: 'Every decoration is designed from scratch to match your unique vision.',
    icon: 'bi-magic',
  },
  {
    title: 'Attention to Detail',
    description: 'No detail is too small — we perfect every petal, light, and ribbon.',
    icon: 'bi-search-heart',
  },
  {
    title: 'On-Time Execution',
    description: 'Reliable setup and teardown with a commitment to punctuality.',
    icon: 'bi-clock-history',
  },
];

export const STATS: StatItem[] = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Events Decorated' },
  { value: 50, suffix: '+', label: 'Wedding Venues' },
  { value: 100, suffix: '%', label: 'Happy Clients' },
];
