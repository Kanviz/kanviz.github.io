# Footer Component

The `Footer` component displays site footer with links, social media, and copyright information.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| No props | - | - | This component does not accept any props |

## Usage

```astro
import Footer from '../components/Footer.astro';

<Footer />
```

## Features

- **Column layout**: Links organized by category (Company, Resources, Legal)
- **Social media icons**: LinkedIn, Twitter, GitHub, Facebook
- **Copyright notice**: Dynamic year display

## Styling

The footer uses:
- Dark background (`bg-slate-900`)
- Light text for readability
- Hover effects on links
- Responsive grid layout (1 column on mobile, 2-4 columns on desktop)
