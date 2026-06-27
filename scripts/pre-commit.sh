#!/bin/bash
#
# Pre-commit script that runs build and tests before each commit
# Run with: ./scripts/pre-commit.sh
#

set -e

echo "Running pre-commit checks..."

# Run linting
echo "  - Running lint..."
if ! npm run lint --silent 2>&1; then
    echo "❌ Linting failed. Please fix the issues above."
    exit 1
fi

# Run build
echo "  - Running build..."
if ! npm run build --silent 2>&1; then
    echo "❌ Build failed. Please fix the errors above."
    exit 1
fi

# Run tests
echo "  - Running tests..."
if ! npx vitest run --silent 2>&1; then
    echo "❌ Tests failed. Please fix the failures above."
    exit 1
fi

echo "✅ All checks passed!"
exit 0
