# Card Component

The `Card` component is a reusable container with optional hover effects.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes to apply |
| `hover` | `boolean` | `true` | Enable hover effects (shadow, border, transform) |

## Usage

```astro
import Card from '../components/Card.astro';

<Card hover={true}>
  <h3>Card Content</h3>
</Card>
```

## Hover Effects

When `hover` is `true` (default):
- Shadow increases on hover: `shadow-xl`
- Blue shadow glow: `shadow-blue-500/10`
- Border changes to blue: `border-blue-200`
- Slight lift effect: `transform hover:-translate-y-1`

## Styling

Default card styles:
- White background (`bg-white`)
- Rounded corners (`rounded-2xl`)
- Subtle shadow (`shadow-sm`)
- Light border (`border-slate-100`)
