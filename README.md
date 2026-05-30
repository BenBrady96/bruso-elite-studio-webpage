# Bruso Elite Studio

The official single-page website for Bruso Elite Studio, a premium tattoo studio in King's Lynn. The site showcases the studio's work, pricing, client reviews, and location, and makes it easy for visitors to book straight through WhatsApp.

Live site: https://benbrady96.github.io/bruso-elite-studio-webpage/

## Overview

The website is a fast, mobile-first single page built around an absolute dark-mode aesthetic: a solid black background, white text, sharp edges, and crisp borders to suit the tattoo studio feel. It scales smoothly from phones up to large desktop screens.

Pricing and gallery content are loaded dynamically from a Google Apps Script endpoint, so the studio can update them without touching the code.

## Sections

- Hero with a studio image and a prominent "Book Now" call to action
- About the studio and its resident artists, Viktor and Natasha
- Gallery, an interactive 3D coverflow carousel of recent work
- Pricing, a responsive list driven by live data
- Reviews from real clients
- Location with an embedded map and opening hours
- A persistent floating WhatsApp button for instant enquiries

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

## Dynamic Content (Pricing and Gallery)

Pricing and gallery images are fetched at runtime from a Google Apps Script web app. The endpoint is configured in `src/constants.js` (`API_URL`) and must return JSON in this shape:

```json
{
  "success": true,
  "data": {
    "prices": [{ "service": "Small Tattoo", "price": "From 60" }],
    "images": [{ "id": "1", "name": "Sleeve", "url": "https://..." }]
  }
}
```

Important: the Apps Script deployment must be set to "Who has access: Anyone". If access is restricted, the endpoint redirects to a Google sign-in page and the gallery and pricing sections will show a fallback message instead of live content.

## Customisation

- Studio name, contact details, social links, opening hours, and the API URL live in `src/constants.js`.
- The hero image is `src/Images/viktor.jpg`; replace this file to change the hero background.
- Client reviews are defined in `src/data/reviews.js`.

## Deployment

The site is deployed to GitHub Pages automatically by a GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)). Every push to the `main` branch builds the project and publishes the `dist` folder.

For Pages to serve the assets correctly the Vite `base` is set to the repository name in `vite.config.js`. If you fork or rename the repository, update that value to match.

The first deployment also needs Pages enabled once in the repository: go to Settings, then Pages, and set the source to GitHub Actions.

## Licence

Released under the MIT Licence. See [LICENSE](LICENSE) for the full text.
