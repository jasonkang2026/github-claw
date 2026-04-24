# UI-UX-PRO-MAX Skill

**Version:** 1.0.0  
**Tags:** frontend · design · accessibility · animation

## What this skill does

Applies a complete UI/UX upgrade to any front-end codebase. When invoked, an AI agent following this skill should:

1. **Audit existing styles** — identify inconsistencies in spacing, colour, typography.
2. **Apply a design-token system** — map all raw colour/size values to CSS custom properties (`--color-*`, `--space-*`, `--font-*`).
3. **Add a motion system** — use `framer-motion` for entrance animations, micro-interactions, and page transitions.
4. **Enforce responsive layout** — every component must work across xs (320 px) → 2xl (1536 px).
5. **WCAG AA compliance** — contrast ratios ≥ 4.5:1 for text, all interactive elements keyboard-focusable with visible focus rings.
6. **Dark-mode first** — all colours defined via CSS custom properties with `prefers-color-scheme` overrides.
7. **Performance** — no layout shifts (CLS 0), images via `next/image`, fonts preloaded.

## Design system conventions

| Token | Example value | Usage |
|-------|--------------|-------|
| `--bg` | `#050816` | Page background |
| `--bg-2` | `#0a0f2e` | Card / surface background |
| `--accent` | `#6366f1` | Primary interactive colour |
| `--accent-2` | `#8b5cf6` | Gradient second stop |
| `--accent-3` | `#06b6d4` | Highlight / info colour |
| `--text` | `#e2e8f0` | Body text |
| `--text-muted` | `#94a3b8` | Secondary / helper text |
| `--border` | `rgba(99,102,241,0.2)` | Default border |

## Utility CSS classes (defined in `globals.css`)

| Class | Effect |
|-------|--------|
| `.gradient-text` | Indigo → violet → cyan gradient text |
| `.gradient-text-gold` | Amber gradient text |
| `.glass-card` | Frosted-glass card with hover glow |
| `.btn-glow` | Indigo gradient button with glow shadow |
| `.float-animation` | Gentle vertical float loop |
| `.animated-gradient` | 4-stop animated background gradient |
| `.grid-bg` | Subtle grid-line background overlay |
| `.neon-border` | Box-shadow + border neon effect |
| `.progress-bar` | Gradient progress bar with shimmer |
| `.tag-badge` | Pill badge with customisable colour |
| `.section-heading` | Responsive hero/section heading size |

## Component patterns

### Glass card
```tsx
<div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
  …
</div>
```

### Gradient CTA button
```tsx
<button className="btn-glow px-8 py-4 rounded-xl text-white font-semibold">
  Action
</button>
```

### Animated entrance (framer-motion)
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  …
</motion.div>
```

### Particle canvas background
Use `src/components/ParticleBackground.tsx` — renders an animated WebGL-style particle network via `<canvas>`. Import as a fixed-position layer behind all page content.

## Installation

```bash
bash .agents/skills/ui-ux-pro-max/install.sh
```

## Checklist for agents

- [ ] Run `install.sh` first to ensure peer packages are present
- [ ] Read `globals.css` to understand existing tokens before adding new ones
- [ ] Never use hard-coded hex values — always use a CSS custom property
- [ ] Always test dark-mode rendering after any colour change
- [ ] Validate WCAG contrast for any new text/background pair
- [ ] Wrap new section components in a `motion.section` with `whileInView`
