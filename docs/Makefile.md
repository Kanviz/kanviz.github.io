# Makefile Documentation

The Kanviz site uses a `Makefile` to provide convenient commands for development and deployment.

## Available Commands

### `make help`
Display all available commands and their descriptions.

```bash
$ make help
Kanviz Site - Development Commands

Usage: make <target>

Targets:
  make dev       Start the development server
  make build     Build the static site for production
  make preview   Preview the built site locally
  make clean     Remove generated files (dist/)
  make install   Install dependencies
  make deploy    Build and deploy to GitHub Pages
  make format    Format code with Prettier
  make check     Run type checking
```

### `make dev`
Start the Astro development server with hot module replacement.

```bash
$ make dev
> kanviz-site@0.1.0 dev
> astro dev

  astro  v7.0.3 dev server started in 432ms

  local:   http://localhost:4321/
  network: http://192.168.1.100:4321/

  ready in 512ms.
```

### `make build`
Build the static site for production deployment.

```bash
$ make build
> kanviz-site@0.1.0 build
> astro build

[build] ✓ Completed in 695ms.
[build] 4 page(s) built in 709ms
[build] Complete!
```

### `make preview`
Preview the built site locally before deployment.

```bash
$ make preview
> kanviz-site@0.1.0 preview
> astro preview

  astro  v7.0.3 preview server started in 245ms

  local:   http://localhost:4321/
  network: http://192.168.1.100:4321/

  ready in 312ms.
```

### `make clean`
Remove generated files and build artifacts.

```bash
$ make clean
rm -rf dist
rm -rf node_modules/.vite
Cleaned build artifacts
```

### `make install`
Install project dependencies.

```bash
$ make install
> npm install
added 216 packages in 3s
```

### `make deploy`
Build the site and prepare for GitHub Pages deployment.

```bash
$ make deploy
npm run build
...
Deploying to GitHub Pages...
Build completed. Push to main branch to trigger deployment.
```

### `make format`
Format code using Prettier for TypeScript, JavaScript, JSON, CSS, and Markdown files.

```bash
$ make format
> npx prettier --write "**/*.{ts,js,json,css,md}"
src/types/index.ts 7ms (unchanged)
src/styles/global.css 16ms (unchanged)
```

### `make check`
Run TypeScript type checking without emitting files.

```bash
$ make check
> npx tsc --noEmit
```

## Development Workflow

1. **Start development server**: `make dev`
2. **Make changes** to source files in `src/`
3. **Format code**: `make format` (optional, runs automatically on save)
4. **Run type checks**: `make check`
5. **Build for production**: `make build`
6. **Preview build**: `make preview`
7. **Deploy**: Push to main branch (triggers GitHub Actions)

## CI/CD Integration

The project uses GitHub Actions for automated deployment to GitHub Pages. The workflow is configured in `.github/workflows/deploy.yml` and triggers on pushes to the `main` branch.
