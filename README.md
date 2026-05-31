# Bruso Elite Studio

The official single-page website for Bruso Elite Studio, a premium tattoo and aesthetics studio in King's Lynn. The site showcases the studio's work, pricing, client reviews, and location, and makes it easy for visitors to book either the tattoo or aesthetics side straight through WhatsApp.

Live site: https://benbrady96.github.io/bruso-elite-studio-webpage/

## Overview

The website is a fast, mobile-first single page built around an absolute dark-mode aesthetic: a solid black background, white text, sharp edges, and crisp borders to suit the studio feel. It scales smoothly from phones up to large desktop screens.

The hero image, galleries and pricing are all loaded dynamically from a Google Apps Script endpoint, so the studio can update them without touching the code.

## Sections

- Hero with the studio's main image (from live data) and "Book Tattoo" and "Book Aesthetics" calls to action
- About the studio, its resident tattoo artist Viktor and its resident aesthetics specialist Natasha
- Tattoo, with its own gallery and grouped pricing list
- Aesthetics, with its own gallery and grouped pricing list
- Galleries are interactive 3D coverflow carousels of recent work
- Reviews from real clients
- Location with an embedded map and opening hours
- A persistent floating WhatsApp button that lets visitors choose the Tattoo or Aesthetics line

## Tech Stack

- React 18 and Vite
- Tailwind CSS for styling
- lucide-react for icons
- AOS (Animate On Scroll) for scroll animations
- Swiper.js for the gallery carousel

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

The optimised output is generated in the `dist` folder.

## Dynamic Content (Hero Image, Galleries and Pricing)

Content is fetched at runtime from a Google Apps Script web app, configured in `src/constants.js` (`API_URL`). The app makes two requests in parallel so the hero image can appear as quickly as possible:

1. A fast call to `API_URL?type=main` returns only the hero image, so it renders without waiting for the rest:

```json
{
  "success": true,
  "data": {
    "images": {
      "main": [{ "id": "1", "name": "Studio", "url": "https://..." }]
    }
  }
}
```

2. A background call to `API_URL` (no parameter) returns the pricing and the two galleries:

```json
{
  "success": true,
  "data": {
    "pricing": {
      "tattoo": [{ "heading": "TATTOO", "subheading": "", "item": "1 hour", "price": "90" }],
      "aesthetics": [{ "heading": "BODY PIERCING", "subheading": "14+", "item": "Navel", "price": "30" }]
    },
    "images": {
      "tattooGallery": [{ "id": "2", "name": "Sleeve", "url": "https://..." }],
      "aestheticsGallery": [{ "id": "3", "name": "Facial", "url": "https://..." }]
    }
  }
}
```

The `images` object can sit either under `data` (as above) or at the top level next to `data`; the app reads from whichever is present. Pricing items are grouped on the page by `heading`, and then by `subheading` within each heading. A blank `subheading` simply renders the items directly under the heading. The first entry in `images.main` is used as the hero background.

Important: the Apps Script deployment must be set to "Who has access: Anyone". If access is restricted, the endpoint redirects to a Google sign-in page and the gallery and pricing sections will show a fallback message instead of live content.

## Customisation

- Studio name, the API URL, opening hours, and the address live in `src/constants.js`.
- Per service contact details (WhatsApp, phone, email and social links for Tattoo and Aesthetics) live in the `CONTACTS` object in `src/constants.js`. These power the hero buttons, the Footer, the Facebook chooser and the floating WhatsApp chooser.
- The hero background comes from `images.main` in the live data; update it from the Apps Script source rather than in the code.
- Client reviews are defined in `src/data/reviews.js`.

## Deployment

The site is deployed to GitHub Pages automatically by a GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)). Every push to the `main` branch builds the project and publishes the `dist` folder.

For Pages to serve the assets correctly the Vite `base` is set to the repository name in `vite.config.js`. If you fork or rename the repository, update that value to match.

The first deployment also needs Pages enabled once in the repository: go to Settings, then Pages, and set the source to GitHub Actions.

## Licence

Released under the MIT Licence. See [LICENSE](LICENSE) for the full text.
