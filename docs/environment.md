# Environment Variables

This document describes the environment variables used by the Kanviz website.

## Configuration

Environment variables are stored in `.env` files. A `.env.example` file is provided as a template.

### Required Variables

None - The site uses default values for all configuration.

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Set the environment mode | `development` |
| `PORT` | Port to run the dev server on | `4321` |

## Usage

### Development

```bash
# Copy example env file
cp .env.example .env

# Start development server
make dev
```

### Production

Environment variables are set in the GitHub Actions workflow for production deployment.

## .env Files

- `.env` - Local environment variables (not committed)
- `.env.production` - Production environment variables (not committed)
- `.env.example` - Template for environment variables (committed)
