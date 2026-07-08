# karimbauer.github.io

A small personal portfolio site built with Next.js and Tailwind CSS. The homepage renders an About section, a Tech Stack section, and a fixed left sidebar with profile info and social links.

## Table of contents

- [How it works](#how-it-works)
- [Development](#development)
- [Build and preview](#build-and-preview)
- [Learn more](#learn-more)
- [Notes](#notes)

## How it works

- `src/app/page.tsx` defines the homepage layout and includes the fixed left sidebar.
- `src/components/Sidebar.tsx` renders the profile sidebar and external links.
- `src/components/About.tsx` contains the bio section.
- `src/components/TechStack.tsx` lists the main technologies.
- `src/config/links.ts` stores the external URLs and GitHub username for the avatar.
- `next.config.ts` uses `output: "export"`, so the site can be built as a static export.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser. The page updates automatically as you edit the source files.

## Build and preview

Build the site for production:

```bash
npm run build
```

Preview the exported static site on port 8080:

```bash
npx serve out -p 8080
```

Then open `http://localhost:8080` in your browser.

> If you prefer a production-like server instead of the static preview, use `npm run start` after `npm run build`.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

## Notes

This project uses `next/font` to optimize the Geist font automatically.

### Profile image source

The sidebar uses your GitHub avatar automatically by reading the GitHub username from `src/config/links.ts`.

If you want to change it, update the `githubUsername` value in `links.ts`.

For a local image instead, replace the `src` in `src/components/Sidebar.tsx` with a `public/` asset path like `/profile.jpg`.
