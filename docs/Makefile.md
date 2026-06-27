# Makefile Documentation

The Kanviz site uses a `Makefile` to provide convenient commands for development, testing, and deployment.

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
  make test      Run unit tests
  make coverage  Run tests with coverage report
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
rm -rf coverage
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

### `make test`
Run unit tests using Vitest.

```bash
$ make test
> npx vitest run

 PASS  src/__tests__/example.test.ts
  example test
    ✓ should pass (2ms)
    ✓ should demonstrate assertions

Test Files  1 passed (1)
Tests       2 passed (2)
```

### `make coverage`
Run tests with coverage report.

```bash
$ make coverage
> npx vitest run --coverage

 PASS  src/__tests__/example.test.ts
  example test
    ✓ should pass (2ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------

Test Files  1 passed (1)
Tests       2 passed (2)
```

## Development Workflow

### Standard Workflow
1. **Start development server**: `make dev`
2. **Make changes** to source files in `src/`
3. **Format code**: `make format` (optional, runs automatically on save)
4. **Run type checks**: `make check`
5. **Build for production**: `make build`
6. **Preview build**: `make preview`
7. **Deploy**: Push to main branch (triggers GitHub Actions)

### TDD Workflow
1. **Create test file** in `src/__tests__/` directory
2. **Write failing tests** following the red-green-refactor cycle
3. **Run tests**: `make test` or `make coverage`
4. **Implement feature** to make tests pass
5. **Refactor** with confidence from test coverage

## CI/CD Integration

The project uses GitHub Actions for automated deployment to GitHub Pages. The workflow is configured in `.github/workflows/deploy.yml` and triggers on pushes to the `main` branch.

### Test Coverage Requirements
- Unit tests run on all PRs
- Coverage reports are generated for changed files
- Minimum coverage threshold: 80% (configurable in `vite.config.ts`)

## Testing Best Practices

1. **Test naming**: Use descriptive names that explain what is being tested
2. **Test location**: Place test files alongside source files or in `src/__tests__/`
3. **Coverage**: Aim for high coverage on business logic, less on presentational components
4. **Mocking**: Use Vitest's `vi.mock()` for external dependencies
