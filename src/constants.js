export const STUDIO_NAME = 'Bruso Elite Studio'

export const API_URL =
  'https://script.google.com/macros/s/AKfycbzC5kJ32yfOenlJdSMpjviVZCBwxgkOjR2urU6t6ZKruiNzlpXnmYkJYsawyh9Ko6aC/exec'

// Fallback copy used until the API responds, or if the API omits a text field.
// API keys (e.g. "ABOUT THE STUDIO") are mapped to these in useStudioData.
export const TEXT_DEFAULTS = {
  about:
    'Welcome to Bruso Elite Studio. We are a premium tattoo and aesthetics studio dedicated to providing exceptional work in a welcoming, spotless, and professional environment. Our resident tattoo artist Viktor specialises in large scale realistic pieces and flawless cover ups, while our resident aesthetics specialist Natasha offers piercings, tattoo removal, skin treatments and much more. Whatever you are looking for, we will ensure your vision is brought to life with precision and care.',
  tattooIntro:
    'Custom artwork, cover ups and fine detail work. Browse a selection of recent pieces and view our session pricing below.',
  tattooPricing: 'Get in touch for a bespoke quote on larger custom pieces.',
  aestheticsIntro:
    'Skin treatments, boosters, piercings and more, carried out with the same care and precision. Explore our work and the full price list below.',
  aestheticsPricing: 'Get in touch to book a consultation or to ask about a treatment.',
  thankYou:
    'Thank you for visiting. We look forward to welcoming you to the studio and bringing your vision to life.',
}

// Maps our internal text keys to the keys returned by the API "text" object.
export const TEXT_API_KEYS = {
  about: 'ABOUT THE STUDIO',
  tattooIntro: 'TATTOO INTRO',
  tattooPricing: 'TATTOO PRICING',
  aestheticsIntro: 'AESTHETICS INTRO',
  aestheticsPricing: 'AESTHETICS PRICING',
  thankYou: 'THANK YOU MESSAGE',
}

export const CONTACTS = {
  tattoo: {
    label: 'Tattoo',
    phoneDisplay: '+44 7506 709380',
    whatsappUrl:
      'https://wa.me/447506709380?text=Hi%20Bruso%20Elite%20Studio,%20I%20would%20like%20to%20enquire%20about%20a%20tattoo%20booking.',
    email: 'brusoelitestudio@gmail.com',
    facebook: 'https://www.facebook.com/brusoelitestudio/',
    instagram: 'https://www.instagram.com/bruso_elitestudio/',
    tiktok: 'https://www.tiktok.com/@brusoelitestudio',
  },
  aesthetics: {
    label: 'Aesthetics',
    phoneDisplay: '+44 7788 926097',
    whatsappUrl:
      'https://wa.me/447788926097?text=Hi%20Bruso%20Elite%20Aesthetics,%20I%20would%20like%20to%20enquire%20about%20an%20aesthetics%20treatment.',
    email: 'natasab@inbox.ru',
    facebook: 'https://www.facebook.com/brusoeliteaesthetic/',
    instagram: 'https://www.instagram.com/bruso_elite_aesthetics',
  },
}

export const ADDRESS = "73 Lynn Rd, King's Lynn PE30 4PR"
export const ADDRESS_FULL = "Bruso Elite Studio, 73 Lynn Rd, King's Lynn PE30 4PR"

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Tattoo', href: '#tattoo' },
  { label: 'Aesthetics', href: '#aesthetics' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export const OPENING_HOURS = [
  { day: 'Monday', hours: 'CLOSED' },
  { day: 'Tuesday', hours: '10:00 to 16:00' },
  { day: 'Wednesday', hours: '10:00 to 16:00' },
  { day: 'Thursday', hours: '10:00 to 16:00' },
  { day: 'Friday', hours: '10:00 to 17:00' },
  { day: 'Saturday', hours: '10:00 to 17:00' },
  { day: 'Sunday', hours: 'CLOSED' },
]

export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=73+Lynn+Rd,+King%27s+Lynn+PE30+4PR&output=embed'
