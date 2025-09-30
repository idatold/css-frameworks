# Plantio — Mock Social App

A simple **mock-only** social app built with HTML, Tailwind CSS, and vanilla ES modules. It includes a login/register UI, a responsive feed with tag-based filtering, and a “Create post” modal (Title, Tags, Image URL, Alt text, and Content). All interactions are client-side only—**no backend or API calls**.

## Features

- Mock authentication UI (Login & Register) — no backend; the Login button redirects to `/feed/`.
- Responsive feed with sample post cards.
- Tag-based filtering via a `<select>` that matches each post’s `data-tag`.
- “Create post” modal with fields: Title, Tags, Image URL, Alt text, and Content.
- Post interactions: like toggle (icon + count) and optional comment section toggle.
- Fullscreen hamburger menu reused across pages.
- Hover-to-play logo video on the auth pages.
- Polished UX: teal focus rings and `rounded-lg` inputs to match buttons.

## Prerequisites

- Node.js (v20+)
- npm
- (Recommended) VS Code with **Tailwind CSS IntelliSense**

## Getting Started

### Installation

```bash
npm install

```

### Running the project

```bash
npm run dev
```


### Running tests

```bash
npm run test
```

## Environment Variables

No environment variables are required for this mock project.

```bash
# Not used, provided for reference only:
# API_KEY=your-api-key-here
# BASE_URL=https://example.com/api
```

## Available Scripts

- `npm run dev` — Start the development server (and/or Tailwind watcher)
- `npm run build` — Build production assets (e.g., Tailwind CSS)
- `npm run test` — Run tests (if present)
- `npm run lint` — Run ESLint (if configured)




## Technologies

- HTML5
- Vanilla JavaScript (ES Modules)
- Tailwind CSS
- CSS
- (Optional) ESLint
- (Optional) Prettier

## Author

Ida Charlotte Toldnæs (@Ida)
