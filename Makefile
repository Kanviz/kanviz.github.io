# Kanviz Site - Makefile
# Convenience commands for development and deployment

.PHONY: help dev build preview clean install deploy

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
