# Kanviz Site - Makefile
# Convenience commands for development and deployment

.PHONY: help dev build preview clean install deploy test coverage lint lint-fix

# Default target
help:
	@echo "Kanviz Site - Development Commands"
	@echo ""
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@echo "  make dev       Start the development server"
	@echo "  make build     Build the static site for production"
	@echo "  make preview   Preview the built site locally"
	@echo "  make clean     Remove generated files (dist/)"
	@echo "  make install   Install dependencies"
	@echo "  make deploy    Build and deploy to GitHub Pages"
	@echo "  make format    Format code with Prettier"
	@echo "  make check     Run type checking"
	@echo "  make test      Run unit tests"
	@echo "  make coverage  Run tests with coverage report"
	@echo "  make lint      Run ESLint on source files"
	@echo "  make lint-fix  Run ESLint and fix issues"
	@echo ""

# Start development server
dev:
	npm run dev

# Build for production
build:
	npm run build

# Preview built site
preview:
	npm run preview

# Clean generated files
clean:
	rm -rf dist
	rm -rf node_modules/.vite
	rm -rf coverage
	@echo "Cleaned build artifacts"

# Install dependencies
install:
	npm install

# Deploy to GitHub Pages
deploy: build
	@echo "Deploying to GitHub Pages..."
	@echo "Build completed. Push to main branch to trigger deployment."

# Format code
format:
	npx prettier --write "**/*.{ts,js,json,css,md}"

# Run type checking
check:
	npx tsc --noEmit

# Run unit tests
test:
	npx vitest run

# Run tests with coverage
coverage:
	npx vitest run --coverage

# Run ESLint (excluding Astro files - use Prettier for formatting)
lint:
	npx eslint src --ext .ts,.js

# Run ESLint and fix issues (excluding Astro files)
lint-fix:
	npx eslint src --ext .ts,.js --fix
