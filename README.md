# EVENTLY — Discover. Connect. Experience.

Evently is a polished, responsive event discovery and registration website built with semantic HTML, CSS, and vanilla JavaScript. It helps people explore experiences by category, location, and keyword, then save a place at events that interest them.

> **Academic demonstration:** Event listings are sample data and registration/newsletter details are stored only in the visitor's browser using Local Storage. This is not a real booking system: there is no server, payment processing, email delivery, or shared booking inventory.

## Problem statement

Finding relevant local experiences can mean searching across many disconnected sources. Evently demonstrates a single, approachable interface for discovering events and managing a local sample registration.

## Project objectives

- Build a complete multi-section event platform without a framework or build step.
- Demonstrate responsive design, semantic markup, accessible interactions, and reusable UI patterns.
- Implement client-side discovery, filtering, event details, form validation, and browser persistence.
- Provide a project that can be run locally with VS Code Live Server and deployed as a static site.

## Features

- Editorial-style responsive landing page, sticky navigation, mobile menu, and dark/light theme preference.
- Hero search, featured picks, upcoming-event countdown, category shortcuts, and event browsing.
- Search across event names, descriptions, categories, locations, venues, and organizers.
- Filter by category and city; sort by date or ticket price; empty state and matching result count.
- Dynamic event-detail dialogs with descriptions, dates, venue, organizer, availability, and pricing.
- Favourite events persisted in Local Storage.
- Registration form with field-level validation, generated reference, and confirmation dialog.
- Newsletter email validation with local demonstration-only subscription storage.
- Scroll reveal and active navigation behavior, toast notifications, back-to-top button, keyboard dismissible dialogs, reduced-motion support, and image fallbacks.
- No dependencies or build process. Google Fonts and Unsplash imagery load from external URLs; the site remains functional if an event image fails.

## Technologies

- HTML5 (semantic elements and native dialog)
- CSS3 (custom properties, Grid, Flexbox, media queries, responsive and reduced-motion styles)
- Vanilla JavaScript (ES6+, DOM APIs, `IntersectionObserver`, `Intl`, Local Storage)
- Google Fonts (DM Sans and Manrope) and Unsplash image URLs

## Project structure

```text
evently-event-management/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── .gitkeep
├── README.md
└── .gitignore
```

## Run locally

1. Download or clone this repository and open its folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html` and select **Open with Live Server** (or use the **Go Live** control).
4. The page opens in your browser. No package installation, backend, or build step is required.

You can also open `index.html` directly in a modern browser. Live Server is recommended for a development-like local experience.

## JavaScript functionality

Event information is held in one sample-data array in `js/script.js`. Reusable rendering functions generate cards, filter results, and populate category, city, and registration selectors. Search is case-insensitive and includes event descriptions and venues. The event-detail dialog reads the selected event record rather than repeating generic content.

The countdown selects the next event that has not started and updates every second. If all sample dates have passed, the display changes to an expired/upcoming-soon state. Category cards and hero search set the same filters as the main browse section.

## Registration validation

The form checks that:

1. A name of 2–80 characters contains letters and common name punctuation.
2. The email resembles a valid email address.
3. The phone number resolves to a 10-digit Indian mobile number beginning with 6–9 (spaces and punctuation are ignored).
4. An event is selected.
5. Ticket quantity is a whole number from 1 to 10 and does not exceed the sample event's available seats.

Errors appear beside their fields and invalid fields receive `aria-invalid`. A successful submission is saved locally, the form is reset, and a confirmation dialog displays the participant, event, ticket count, and unique reference.

## Local Storage

The application uses these keys:

- `evently.registrations` — locally submitted registration records.
- `evently.favorites` — saved event IDs.
- `evently.theme` — selected `light` or `dark` theme.
- `evently.newsletter` — locally recorded newsletter email addresses.

This is strictly a browser demonstration. Data is private to the current browser profile/device, can be removed by clearing site data, and is not synchronized or protected as a production service. It must not be used to collect real attendee details or confirm real tickets. Storage errors are reported in the browser console and through a notification where applicable.

## Responsive design and accessibility

CSS breakpoints target wide desktop, tablet, and mobile layouts, including a 375px viewport. Grids collapse for small screens, controls remain touch-friendly, and content uses flexible widths to prevent horizontal overflow. The page includes a skip link, semantic landmarks, descriptive image alt text, keyboard-operable controls, native dialogs, focus styles, status announcements, and respects `prefers-reduced-motion`.

## Screenshots

Add screenshots of the homepage and event browser here before submission:

```text
![Evently desktop homepage](./screenshots/evently-desktop.png)
![Evently mobile view](./screenshots/evently-mobile.png)
```

## GitHub repository setup

1. Create a new empty repository on GitHub.
2. In a terminal opened at the project folder, run:

   ```bash
   git init
   git add index.html css/style.css js/script.js README.md .gitignore
   git commit -m "Build Evently event discovery website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. Replace the sample remote URL with your repository URL. If this folder is already a Git repository, retain its existing history and configure only the appropriate remote.

## Deploy to Vercel

1. Push the project to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Use the **Other** framework preset; leave build and output commands blank (the site is static).
5. Deploy. Vercel serves `index.html` and the adjacent `css/` and `js/` directories as a static site.

## Future enhancements

- Connect a secure backend and real event inventory with booking concurrency.
- Add organizer accounts, moderation, and event creation/editing.
- Integrate a payment provider and email confirmations.
- Add richer accessibility and browser/device testing.
- Replace external image URLs with locally managed, optimized project assets.
- Add real analytics and a persistent newsletter service with consent management.

## Author

- **Name:** [Your Name]
- **Course / class:** [Your Course]
- **Institution:** [Your Institution]
- **GitHub:** [Your GitHub Profile](https://github.com/YOUR-USERNAME)
