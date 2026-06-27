# Section Component

The `Section` component is a wrapper for page sections with configurable background and padding.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | `undefined` | HTML id attribute for the section |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `bg` | `'light' \| 'dark' \| 'gradient'` | `'light'` | Background style: light gray, dark, or gradient |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'lg'` | Vertical padding: none, small, medium, or large |

## Usage

```astro
import Section from '../components/Section.astro';

<Section bg="dark" padding="lg">
  <h2>Content here</h2>
</Section>
```

## Background Options

- **light**: `bg-slate-50` - Light gray background
- **dark**: `bg-slate-900 text-white` - Dark background with white text
- **gradient**: `bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white` - Colorful gradient

## Padding Options

- **none**: No vertical padding
- **sm**: `py-12` - Small padding (48px)
- **md**: `py-16 md:py-24` - Medium padding (64px/96px)
- **lg**: `py-20 md:py-32` - Large padding (80px/128px)
