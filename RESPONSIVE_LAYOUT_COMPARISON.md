# Outsome.co Responsive Layout Comparison

## Visual Layout Breakdown

### MOBILE (375px) - Single Column Layout

```
┌─────────────────────────────┐
│      NAVIGATION (72px)      │  display: block
│      [Hamburger Menu]       │  height: 72px
└─────────────────────────────┘

┌─────────────────────────────┐
│                             │
│      HERO SECTION           │  width: 375px
│      (1198px height)        │  padding: 96px vertical
│                             │
│      [Full-width image]     │
│      [Headline text]        │
│      [Subheading]           │
│      [CTA Button]           │
│                             │
└─────────────────────────────┘

┌─────────────────────────────┐
│                             │
│   CARD 1 (327px width)      │  display: grid
│   [Image]                   │  grid-columns: 327px
│   [Title]                   │  1-column layout
│   [Description]             │  height: 1278px total
│                             │
└─────────────────────────────┘

┌─────────────────────────────┐
│                             │
│   CARD 2 (327px width)      │
│   [Image]                   │
│   [Title]                   │
│   [Description]             │
│                             │
└─────────────────────────────┘

┌─────────────────────────────┐
│                             │
│   CARD 3 (327px width)      │
│   [Image]                   │
│   [Title]                   │
│   [Description]             │
│                             │
└─────────────────────────────┘

┌─────────────────────────────┐
│                             │
│      FOOTER SECTION         │  width: 375px
│      (773px height)         │  padding: 96px vertical
│      [Links]                │  display: block
│      [Copyright]            │
│                             │
└─────────────────────────────┘

TOTAL HEIGHT: ~5,400px (full-page scroll)
```

---

### TABLET (768px) - Two Column Layout

```
┌──────────────────────────────────────────┐
│         NAVIGATION (HIDDEN)              │  display: none
│         [Not visible on tablet]          │  height: 952px (when visible)
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│                                          │
│         HERO SECTION                     │  width: 768px
│         (1284px height)                  │  padding: 96px vertical
│                                          │
│         [Full-width image]               │
│         [Headline text]                  │
│         [Subheading]                     │
│         [CTA Button]                     │
│                                          │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│                                          │
│  CARD 1 (360px)  │  CARD 2 (360px)      │  display: flex
│  [Image]         │  [Image]             │  grid-columns: 1fr 1fr
│  [Title]         │  [Title]             │  2-column layout
│  [Description]   │  [Description]       │  height: 1322px total
│                  │                      │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│                                          │
│  CARD 3 (360px)  │  CARD 4 (360px)      │
│  [Image]         │  [Image]             │
│  [Title]         │  [Title]             │
│  [Description]   │  [Description]       │
│                  │                      │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│                                          │
│         FOOTER SECTION                   │  display: null
│         (Not detected in DOM)            │  (Hidden or repositioned)
│                                          │
└──────────────────────────────────────────┘

TOTAL HEIGHT: ~3,600px (full-page scroll)
```

---

## Detailed Property Changes

### Navigation Component

```
MOBILE (375px)
├─ display: block ✓
├─ height: 72px
├─ width: 375px
├─ padding: 0px
├─ font-size: 14px
└─ Layout: Horizontal bar (hamburger menu)

TABLET (768px)
├─ display: none ✗ (HIDDEN)
├─ height: 952px (when visible)
├─ width: 768px
├─ padding: 0px
├─ font-size: 14px
└─ Layout: Hidden/collapsed

CHANGE: display: block → display: none
```

---

### Hero Section

```
MOBILE (375px)
├─ display: block
├─ width: 375px (100% viewport)
├─ height: 1198.33px
├─ padding: 96px 0px
├─ font-size: 14px
├─ grid-template-columns: none
└─ Layout: Vertical stack

TABLET (768px)
├─ display: block
├─ width: 768px (100% viewport)
├─ height: 1284.3px (+7%)
├─ padding: 96px 0px (unchanged)
├─ font-size: 14px (unchanged)
├─ grid-template-columns: none
└─ Layout: Vertical stack (unchanged)

CHANGES:
  • Width: 375px → 768px (+104%)
  • Height: 1198px → 1284px (+7%)
  • Padding: UNCHANGED
  • Font Size: UNCHANGED
  • Layout: UNCHANGED
```

---

### Cards/Grid Section

```
MOBILE (375px)
├─ display: grid
├─ grid-template-columns: 327px (1 column)
├─ width: 327px
├─ height: 1278px
├─ padding: 0px
├─ flex-direction: row
└─ Layout: SINGLE COLUMN (cards stacked vertically)

TABLET (768px)
├─ display: flex ← CHANGED
├─ grid-template-columns: 1fr 1fr (2 columns)
├─ width: 720px
├─ height: 1322.95px
├─ padding: 0px
├─ flex-direction: column
└─ Layout: TWO COLUMNS (cards side-by-side)

MAJOR CHANGES:
  ✓ display: grid → flex
  ✓ grid-template-columns: 327px → 1fr 1fr
  ✓ width: 327px → 720px (+120%)
  ✓ Layout: 1-col → 2-col
  • height: 1278px → 1322px (+3%)
  • padding: UNCHANGED
```

---

### Footer Section

```
MOBILE (375px)
├─ display: block ✓
├─ width: 375px
├─ height: 773.43px
├─ padding: 96px 0px 48px
├─ font-size: 14px
└─ Layout: Visible

TABLET (768px)
├─ display: null ✗ (NOT FOUND)
├─ width: —
├─ height: —
├─ padding: —
├─ font-size: —
└─ Layout: Hidden/removed from DOM

CHANGE: display: block → display: none (or removed)
```

---

## Responsive Behavior Summary

### What Changes at 992px Breakpoint?

| Component | Mobile | Tablet | Desktop (≥992px) |
|-----------|--------|--------|------------------|
| **Navigation** | Visible (hamburger) | Hidden | Full menu (inferred) |
| **Hero** | 375px wide | 768px wide | Constrained width |
| **Cards** | 1 column | 2 columns | 3+ columns (inferred) |
| **Footer** | Visible | Hidden | Visible (inferred) |
| **Font Size** | 14px | 14px | 14px |
| **Padding** | 96px vertical | 96px vertical | 96px vertical |

---

## CSS Media Query Rules

```css
/* Mobile-first base styles (applies to all sizes) */
nav { display: block; height: 72px; }
.hero { width: 100%; padding: 96px 0; }
.cards { display: grid; grid-template-columns: 327px; }
footer { display: block; }

/* Tablet/Desktop styles (min-width: 992px) */
@media (min-width: 992px) {
  nav { display: flex; /* or block */ }
  .cards { 
    display: flex;
    grid-template-columns: 1fr 1fr 1fr; /* 3 columns */
  }
  footer { display: block; }
}

/* Mobile-only overrides (max-width: 991px) */
@media (max-width: 991px) {
  nav { display: block; }
  .cards { grid-template-columns: 327px; }
}
```

---

## Layout Shift Analysis

### Mobile to Tablet Transition (375px → 768px)

**Before (Mobile):**
```
┌─────────────┐
│   CARD 1    │
├─────────────┤
│   CARD 2    │
├─────────────┤
│   CARD 3    │
└─────────────┘
```

**After (Tablet):**
```
┌──────────┬──────────┐
│ CARD 1   │ CARD 2   │
├──────────┼──────────┤
│ CARD 3   │ CARD 4   │
└──────────┴──────────┘
```

**Impact:**
- ✓ Reduces vertical scroll distance
- ✓ Better use of horizontal space
- ✓ More cards visible at once
- ⚠️ Cards become narrower (360px vs 327px)

---

## Spacing & Sizing Details

### Card Dimensions

| Metric | Mobile (375px) | Tablet (768px) | Change |
|--------|---|---|---|
| Card Width | 327px | 360px | +10% |
| Card Height | ~426px | ~661px | +55% |
| Horizontal Margin | 24px | 24px | No change |
| Vertical Gap | Stacked | 20px (inferred) | New gap |

---

## Viewport Scaling

```
Mobile (375px)
├─ Content Width: 327px (87% of viewport)
├─ Horizontal Margin: 24px (6.4% each side)
└─ Utilization: 87%

Tablet (768px)
├─ Content Width: 720px (94% of viewport)
├─ Horizontal Margin: 24px (3.1% each side)
└─ Utilization: 94%

Desktop (992px+)
├─ Content Width: ~960px (inferred)
├─ Horizontal Margin: Auto (centered)
└─ Utilization: ~97%
```

---

## Responsive Design Efficiency

### Breakpoint Strategy
- **Total Breakpoints:** 2 (minimal)
- **Breakpoint at:** 992px (Bootstrap standard)
- **Approach:** Mobile-first
- **Complexity:** Low

### CSS Efficiency
- ✓ Minimal media queries
- ✓ Consistent spacing rhythm
- ✓ Simple grid/flex transitions
- ⚠️ No responsive typography
- ⚠️ Limited intermediate breakpoints

---

## Conclusion

Outsome.co uses a **simple, mobile-first responsive design** with:

1. **Single major breakpoint** at 992px
2. **Card layout transformation** from 1-col to 2-col
3. **Navigation visibility toggle** (visible on mobile, hidden on tablet)
4. **Consistent spacing** across all breakpoints
5. **Minimal CSS overrides** for responsive behavior

The design prioritizes mobile experience with basic tablet/desktop enhancements, making it lightweight and maintainable but potentially missing optimization opportunities for intermediate screen sizes.
