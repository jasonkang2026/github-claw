# UI-UX-PRO-MAX Skill

**Version:** 2.0.0 (replaces 1.0.0-deprecated)  
**Tags:** frontend · design · accessibility · animation · framer-motion

---

## What v1 got wrong (and what v2 fixes)

| Issue in v1 | Fix in v2 |
|---|---|
| Listed `lucide-react` as required — not used anywhere | Removed |
| Claimed framer-motion integration patterns — none provided | Concrete patterns for every section added below |
| Did not address `globals.css` conflict (two `:root` + two `body` blocks) | Explicit fix instructions added |
| Checklist had no actionable codebase-specific steps | Checklist now maps 1-to-1 to files/lines |

---

## Project context

- **Framework:** Next.js 16 with `"use client"` components
- **CSS:** Tailwind v4 (`@import "tailwindcss"`) + custom CSS in `src/app/globals.css`
- **Animation library:** `framer-motion` v12 (installed, must be imported explicitly)
- **Icon library:** emoji + inline SVG (no icon package needed)

---

## Step 0 — Run install.sh

```bash
bash .agents/skills/ui-ux-pro-max/install.sh
```

---

## Step 1 — Fix globals.css (REQUIRED first)

`src/app/globals.css` has a **critical conflict**: a second `:root` block at the
bottom of the file sets `--background: #ffffff` and a second `body` block uses
`background: var(--background)`, which overrides the dark theme on every page load.

**Delete lines 232–255** (everything from the second `:root {` to the end of file):

```css
/* DELETE the block below — it conflicts with the dark theme */
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

After deleting, the file must end at `.section-heading { … }`.

---

## Step 2 — Fix page.tsx inline style

Replace the `backgroundColor` inline style with a CSS class:

```tsx
// BEFORE
<main style={{ backgroundColor: "#050816", minHeight: "100vh", position: "relative" }}>

// AFTER
<main className="min-h-screen relative" style={{ backgroundColor: "var(--bg)" }}>
```

---

## Step 3 — Add framer-motion animations

### Import pattern (add to each component that animates)

```tsx
import { motion, type Variants } from "framer-motion";
```

### Standard variants (copy into each component file)

```tsx
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
```

### Section wrapper pattern

Wrap each `<section>` body content in a `motion.div`:

```tsx
<motion.div
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
  {/* Section header */}
  <motion.div variants={fadeUp}> … heading … </motion.div>

  {/* Grid of cards */}
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeUp}>
      … card …
    </motion.div>
  ))}
</motion.div>
```

### Navbar mobile menu animation

Use `AnimatePresence` so the mobile menu fades+slides in/out:

```tsx
import { motion, AnimatePresence } from "framer-motion";

// Inside Navbar return:
<AnimatePresence>
  {menuOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden border-t overflow-hidden"
      style={{ background: "rgba(5, 8, 22, 0.95)", borderColor: "rgba(99,102,241,0.15)" }}
    >
      …
    </motion.div>
  )}
</AnimatePresence>
```

---

## Design system (unchanged from v1, included for reference)

| CSS token | Value | Usage |
|---|---|---|
| `--bg` | `#050816` | Page background |
| `--bg-2` | `#0a0f2e` | Card background |
| `--accent` | `#6366f1` | Primary interactive |
| `--accent-2` | `#8b5cf6` | Gradient second stop |
| `--accent-3` | `#06b6d4` | Highlight / info |
| `--text` | `#e2e8f0` | Body text |
| `--text-muted` | `#94a3b8` | Secondary text |
| `--border` | `rgba(99,102,241,0.2)` | Default border |

### Utility classes (globals.css)

| Class | Effect |
|---|---|
| `.gradient-text` | Indigo → violet → cyan gradient |
| `.glass-card` | Frosted-glass card with hover glow |
| `.btn-glow` | Indigo gradient button with glow |
| `.float-animation` | Vertical float loop |
| `.animated-gradient` | 4-stop animated bg |
| `.grid-bg` | Subtle grid-line overlay |
| `.neon-border` | Box-shadow neon border |
| `.progress-bar` | Gradient shimmer bar |
| `.tag-badge` | Pill badge |
| `.section-heading` | Responsive heading `clamp(2rem,5vw,3.5rem)` |

---

## Checklist for agents

- [ ] Run `install.sh`
- [ ] Delete the conflicting second `:root` + `body` blocks from `globals.css` (lines ~232–255)
- [ ] Fix `page.tsx` to use `var(--bg)` instead of hard-coded `#050816`
- [ ] Import `motion` (and `AnimatePresence` where needed) in each component
- [ ] Add `fadeUp` + `stagger` variants to each animated component
- [ ] Wrap section content in `motion.div` with `whileInView` + `viewport={{ once: true }}`
- [ ] Apply stagger to grid/list items in FeaturesSection, GrowthSection
- [ ] Add `AnimatePresence` mobile menu to Navbar
- [ ] Never use raw hex values — always use a CSS custom property or existing utility class
- [ ] Build (`npm run build`) and lint (`npm run lint`) — zero new errors allowed
