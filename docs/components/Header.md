# Header Component

The `Header` component displays the navigation bar with logo, desktop menu, and mobile menu toggle.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| No props | - | - | This component does not accept any props |

## Usage

```astro
import Header from '../components/Header.astro';

<Header />
```

## Features

- **Desktop navigation**: Shows all navigation links with hover effects
- **Mobile menu**: Hamburger menu that expands on click
- **Logo**: Links to home page with animated gradient background
- **Active state**: Highlights current page in navigation

## Styling

The header uses:
- Fixed positioning at the top of the page
- Glassmorphism effect with `backdrop-blur-md`
- Gradient background for logo
- Smooth transitions on all interactive elements
