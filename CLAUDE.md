# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js project bootstrapped with `create-next-app`. It's a modern web application using:

- Next.js 15.3.2
- React 19
- TailwindCSS 4
- ESLint 9

The project appears to be a splash page or landing page (onboard-splash) that is likely part of a larger onboarding experience.

## Command Reference

### Development

```bash
# Start the development server
npm run dev

# Access the development server at
# http://localhost:3000
```

### Build and Production

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Code Quality

```bash
# Run linting
npm run lint
```

## Project Structure

- `/src/app/` - Main application code (Next.js App Router pattern)
  - `page.js` - The main landing page component
  - `layout.js` - The root layout that wraps all pages
  - `globals.css` - Global CSS styles

- `/public/` - Static assets (SVG files, etc.)

## Important Configuration Files

- `next.config.mjs` - Next.js configuration
- `jsconfig.json` - JavaScript configuration with path aliases (`@/*` maps to `./src/*`)
- `postcss.config.mjs` - PostCSS configuration for TailwindCSS
- `eslint.config.mjs` - ESLint configuration

## Styling

The project uses:
- TailwindCSS for utility-based styling
- Geist and Geist Mono fonts loaded via `next/font/google`
- Dark mode support via `dark:` TailwindCSS classes

## Key Features

The current implementation is a standard Next.js starter template with:
- Responsive design (mobile-first with SM breakpoints)
- Dark mode support
- Links to Next.js documentation and Vercel deployment

## Working With This Codebase

When working on this project:

1. Follow the existing code style with TailwindCSS for styling
2. Use the path alias `@/*` when importing from the src directory
3. Respect the App Router patterns for page creation and routing
4. Maintain responsive design and dark mode support