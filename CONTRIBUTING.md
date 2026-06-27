# Contributing to Kanviz Website

Thank you for your interest in contributing to the Kanviz website! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or pnpm package manager
- Git for version control

### Installation

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/kanviz-site.git`
3. Navigate to the project directory: `cd kanviz-site`
4. Install dependencies: `make install` or `npm install`

### Development Setup

1. Start the development server: `make dev`
2. Open your browser to `http://localhost:4321/`
3. Make changes to files in `src/`
4. Changes will automatically reload in the browser

## Development Workflow

### Code Style

- **Formatting**: Use Prettier (`make format`)
- **TypeScript**: Strict mode enabled, run type checks with `make check`
- **Components**: Follow existing component patterns in `src/components/`

### Testing

1. Write tests in `src/__tests__/` directory
2. Run tests: `make test`
3. Check coverage: `make coverage`

### Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>: <description>

[optional body]

Fixes: #issue-number
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat: add contact form page
fix: correct navigation link on about page
docs: update component API documentation
refactor: extract reusable card component
```

### Pull Request Process

1. Create a new branch for your feature or fix
2. Make your changes and commit them following the commit guidelines
3. Ensure all tests pass: `make test && make check`
4. Update documentation as needed
5. Push your branch and open a pull request
6. Wait for code review and address any feedback

## Project Structure

```
src/
├── components/    # Reusable Astro components
├── data/          # Site data (navigation, services, team)
├── layouts/       # Page layouts
├── pages/         # Page routes
└── types/         # TypeScript type definitions
docs/              # Project documentation
```

## Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import and use the `Layout` component
3. Add navigation link in `src/data/navigation.ts`

## Adding New Components

1. Create a new `.astro` file in `src/components/`
2. Define props interface
3. Use Tailwind CSS for styling
4. Document props in `docs/components/`

## Deployment

The site is automatically deployed to GitHub Pages when changes are merged to the main branch.

For manual deployment:
```bash
make build
```

The built files will be in the `dist/` directory.

## Questions?

Open an issue or contact the maintainers.
