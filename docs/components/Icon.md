# Icon Component

The `Icon` component renders SVG icons by name.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Icon name (required) |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `size` | `number` | `24` | Icon size in pixels |

## Available Icons

| Name | Description |
|------|-------------|
| `menu` | Hamburger menu icon |
| `x` | Close/X icon |
| `chart-bar` | Bar chart icon |
| `trending-up` | Trending up icon |
| `target` | Target/dot icon |
| `lightbulb` | Idea/lightbulb icon |
| `linkedin` | LinkedIn social icon |
| `twitter` | Twitter/X social icon |
| `github` | GitHub social icon |
| `facebook` | Facebook social icon |
| `chevron-right` | Right arrow icon |
| `send` | Send/message icon |
| `mail` | Email/mail icon |
| `phone` | Phone icon |
| `map-pin` | Location pin icon |
| `arrow-right` | Arrow right icon |
| `logo` | Kanviz logo icon |
| `check` | Checkmark icon |

## Usage

```astro
import Icon from '../components/Icon.astro';

<Icon name="chart-bar" size={32} className="text-blue-600" />
```

## Styling

Icons use `currentColor` for stroke color, so they inherit text color. Use `className` to customize:

```astro
<Icon name="check" className="text-green-500" />
```
