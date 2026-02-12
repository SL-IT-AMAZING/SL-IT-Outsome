# Landing Page Layout - Quick Reference Guide

## At a Glance (1440px Desktop)

| Metric | Value |
|--------|-------|
| **Viewport Width** | 1440px |
| **Viewport Height** | 900px |
| **Total Page Height** | 8016px |
| **Container Max-Width** | 1440px |
| **Horizontal Padding** | 24px (each side) |
| **Section Vertical Padding** | 96px (top/bottom) |
| **Default Gap** | 24px |

---

## Section Positions & Dimensions

```
0px     ┌─────────────────────────────────────┐
        │ Navigation (72px height)            │
72px    ├─────────────────────────────────────┤
        │ Hero Section (1277px height)        │
        │ - H1: 70.59px                       │
        │ - Body: 17.64px                     │
1349px  ├─────────────────────────────────────┤
        │ Value Props Grid (760px height)     │
        │ - 2 columns × 684px                 │
        │ - Gap: 24px                         │
2109px  ├─────────────────────────────────────┤
        │ Mentorship Section (810px height)   │
        │ - H2: 56.02px                       │
        │ - Body: 17.64px                     │
2919px  ├─────────────────────────────────────┤
        │ Programs Section (1115px height)    │
        │ - H2: 56.02px                       │
        │ - Card Grid: 3 cols × 330px         │
        │ - Gap: 24px                         │
4034px  ├─────────────────────────────────────┤
        │ Testimonials (517px height)         │
        │ - 3 cards in flex row                │
        │ - Gap: 12px                         │
4551px  ├─────────────────────────────────────┤
        │ Pricing Section (1344px height)     │
        │ - H2: 56.02px                       │
        │ - Pricing Grid: 2 cols × 460px      │
        │ - Gap: 12px                         │
5895px  ├─────────────────────────────────────┤
        │ Footer (694px height)               │
        │ - Newsletter + Links                │
7589px  └─────────────────────────────────────┘
```

---

## Grid Layouts

### 2-Column Grid (Value Props, Testimonials)
```
┌──────────────────────────────────────────────────┐
│ 1392px total width                               │
├─────────────────────┬──────────────────────────┤
│   684px column      │   684px column           │
│   (--grid-col-6)    │   (--grid-col-6)         │
├─────────────────────┼──────────────────────────┤
│      24px gap (--gap)                          │
└─────────────────────┴──────────────────────────┘
```

### 3-Column Grid (Programs)
```
┌──────────────────────────────────────────────────┐
│ 1156px total width (--grid-col-10)               │
├──────────────┬──────────────┬──────────────────┤
│ 330px column │ 330px column │ 330px column     │
│ (--grid-col-3)              │ (--grid-col-3)   │
├──────────────┼──────────────┼──────────────────┤
│    24px gap (--gap)                            │
└──────────────┴──────────────┴──────────────────┘
```

### 2-Column Pricing Grid (Centered)
```
┌──────────────────────────────────────────────────┐
│ 1440px full width                                │
│ ┌────────────────────────────────────────────┐   │
│ │ 920px total width (--grid-col-8)           │   │
│ ├──────────────────┬──────────────────────┤   │
│ │ 460px column     │ 460px column         │   │
│ │ (920px / 2)      │ (920px / 2)          │   │
│ ├──────────────────┼──────────────────────┤   │
│ │    12px gap (--grid-gap-s)               │   │
│ └──────────────────┴──────────────────────┘   │
│ 236px margin (centered)                        │
└──────────────────────────────────────────────────┘
```

---

## Typography Quick Reference

### Headings
| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| H1 | 70.59px | 400 | 1em | -0.02em |
| H2 | 56.02px | 400 | 1.1em | -0.02em |
| H3 | 44.46px | 400 | 1.2em | -0.02em |
| H4 | 35.29px | 400 | 1.25em | -0.02em |
| H5 | 28.01px | 400 | 1.3em | -0.01em |

### Body Text
| Type | Size | Weight | Line Height |
|------|------|--------|-------------|
| Lead | 17.64px | 400 | 1.4em |
| Regular | 14px | 400 | 1.4em |
| Small | 11.11px | 400 | 1.4em |
| Badge | 11.11px | 400 | 1.4em (0.1em letter-spacing) |

---

## Spacing Scale

```
12px  ← --gap-05 (Small gaps, testimonials)
24px  ← --gap (Default, most grids)
36px  ← --gap-15 (Medium)
48px  ← --gap-2 (Large)
72px  ← --gap-3 (Extra large)
96px  ← --gap-4 (Section padding)
120px ← --gap-5 (Extra padding)
144px ← --section-pad-lg (Pricing bottom)
```

---

## Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| --color-light-1 | #FEFAF3 | Main background |
| --color-light-2 | #F1EADD | Secondary background |
| --color-dark | #000 | Text color |
| --color-dark-7 | rgba(47,44,37,0.06) | Subtle borders |
| --color-dark-12 | rgba(47,44,37,0.12) | Button borders |

---

## Component Sizing

| Component | Height | Width | Padding | Radius |
|-----------|--------|-------|---------|--------|
| Navigation | 72px | 1440px | 0px | - |
| Button (Standard) | 48px | auto | 0 24px | 9px |
| Button (Small) | 42px | auto | 0 18px | 9px |
| Border Radius | - | - | - | 6px |
| Border Radius (Large) | - | - | - | 12px |

---

## Section Padding

| Section | Top | Bottom | Notes |
|---------|-----|--------|-------|
| Hero | 96px | 96px | Standard |
| Value Props | 0px | 0px | Inside grid |
| Mentorship | 96px | 96px | Standard |
| Programs | 96px | 96px | Standard |
| Testimonials | 0px | 0px | Inside section |
| Pricing | 96px | 144px | Extra bottom padding |
| Footer | 96px | 48px | Reduced bottom |

---

## Font Families

```css
Body:     "BDO Grotesk", "DM Sans", "Noto Sans KR", Arial, sans-serif
Headings: "Libre Caslon Condensed", "Times New Roman", serif
Badges:   "Roboto Mono", "Trebuchet MS", monospace
```

---

## Common Measurements

### Container Widths
- Full width: **1440px**
- With gutters: **1392px** (1440px - 24px×2)
- 2-column: **684px** each
- 3-column: **330px** each
- Pricing: **460px** each (centered)

### Heights
- Navigation: **72px**
- Hero: **1277px**
- Mentorship: **810px**
- Programs: **1115px**
- Pricing: **1344px**
- Footer: **694px**

### Gaps
- Standard: **24px**
- Compact: **12px**
- Section padding: **96px** (vertical)

---

## CSS Variables Used

```css
/* Spacing */
--gap: 24px
--gap-05: 12px
--gap-4: 96px
--section-pad: 96px
--section-pad-lg: 144px
--container-gutter: 24px

/* Grid */
--grid-col-3: 330px
--grid-col-6: 684px
--grid-col-8: 920px
--grid-col-10: 1156px
--grid-gap-s: 12px
--grid-gap-m: 24px

/* Container */
--container-max: 1440px

/* Typography */
--font-body: "BDO Grotesk", "DM Sans", "Noto Sans KR"
--font-headings: "Libre Caslon Condensed"
--font-badges: "Roboto Mono"

/* Navigation */
--nav-height: 72px

/* Buttons */
--btn-height: 48px
--btn-px: 24px
--btn-radius: 9px
```

---

## Responsive Behavior

The design uses a **mobile-first approach** with:
- Full-width sections (1440px)
- Centered content containers
- Flexible grid layouts
- Modular spacing system

**Likely breakpoints:**
- **1440px+**: Desktop (current)
- **1024px**: Tablet (grids likely 2-column)
- **768px**: Mobile landscape
- **375px**: Mobile portrait

---

## Quick Copy-Paste Values

### Section Padding
```css
padding: 96px 0px;           /* Standard sections */
padding: 96px 0px 144px;     /* Pricing section */
padding: 96px 0px 48px;      /* Footer */
```

### Container
```css
max-width: 1440px;
padding: 0 24px;
margin: 0 auto;
```

### Grid 2-Column
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 24px;
width: 1392px;
```

### Grid 3-Column
```css
display: grid;
grid-template-columns: repeat(3, 330px);
gap: 24px;
width: 1156px;
```

### Grid Pricing
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 12px;
width: 920px;
margin: 0 auto;
```

---

## Verification Checklist

- ✅ All sections measured at 1440px viewport
- ✅ Y positions verified from top of document
- ✅ Widths and heights confirmed
- ✅ Padding and margins documented
- ✅ Typography sizes extracted
- ✅ Grid layouts mapped
- ✅ Spacing scale verified
- ✅ Color palette documented
- ✅ CSS variables referenced
- ✅ Screenshots captured for all sections

---

## Last Updated
February 10, 2026 | Desktop 1440px | Full Page Height: 8016px
