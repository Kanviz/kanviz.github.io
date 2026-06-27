# Kanviz Corporate Website

A modern, responsive corporate website built with Astro, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multi-page site**: Home, About, Services, and Contact pages
- **Component-based architecture**: Reusable components for consistency
- **TypeScript**: Strict type checking for all data structures
- **Tailwind CSS**: Utility-first styling with custom gradients
- **GitHub Pages deployment**: Automated CI/CD via GitHub Actions

## 📁 Project Structure

```
/
├── .claude/              # Claude AI configuration and memory
├── docs/                 # Detailed documentation per module
├── public/               # Static assets (images, icons)
├── src/
│   ├── components/       # Reusable Astro components
│   ├── data/             # Site data (navigation, services, team)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes
│   └── types/            # TypeScript type definitions
├── .gitignore
├── Makefile              # Development convenience commands
├── package.json
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind CSS configuration (via integration)
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Development

### Prerequisites

- Node.js 20+ installed
- npm or pnpm package manager

### Installation

```bash
make install
# or
npm install
```

### Development Commands

| Command | Description |
|---------|-------------|
| `make dev` | Start development server at `localhost:4321` |
| `make build` | Build production site to `./dist/` |
| `make preview` | Preview built site locally |
| `make clean` | Remove generated files (dist/, .vite/) |
| `make format` | Format code with Prettier |
| `make check` | Run TypeScript type checking |
| `make deploy` | Build and prepare for GitHub Pages |

See [docs/Makefile.md](docs/Makefile.md) for detailed command documentation.

## 📖 Documentation

- [Makefile Commands](docs/Makefile.md) - Development workflow and available commands
- Additional module documentation in the `docs/` folder

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is configured in `.github/workflows/deploy.yml`.

### Manual Deployment

1. Build the site: `make build`
2. Push to main branch to trigger GitHub Actions deployment

## 🎨 Design

- **Style**: Vibrant/Modern with gradient backgrounds
- **Colors**: Blue, purple, and pink gradients
- **Typography**: Inter font family
- **Responsive**: Mobile-first design with hamburger menu

## 👥 Team

- [Sarah Johnson](#) - CEO & Founder
- [Michael Chen](#) - CTO
- [Emily Rodriguez](#) - Head of Design
- [David Kim](#) - Senior Consultant

## 📄 License

This project is proprietary and confidential.
