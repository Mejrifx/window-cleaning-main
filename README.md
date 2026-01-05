# Window Cleaning Website

A modern, responsive website for a premium window cleaning service built with React, TypeScript, and Tailwind CSS.

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mejrifx/window-cleaning-main.git
cd window-cleaning-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary build configuration.

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

Changes pushed to the `main` branch will automatically trigger a new deployment.

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── hooks/       # Custom React hooks
│   └── lib/         # Utility functions
└── dist/            # Production build output
```
