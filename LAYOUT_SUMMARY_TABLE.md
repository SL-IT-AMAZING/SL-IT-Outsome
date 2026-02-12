# Landing Page Layout Summary - Detailed Measurements Table

**Viewport**: 1440px × 900px | **Document Height**: 8016px

---

## Master Layout Table

| Section | Y Position | Width | Height | Padding | Display | Max-Width | Gap | Notes |
|---------|-----------|-------|--------|---------|---------|-----------|-----|-------|
| **Navigation** | 168px | 1440px | 72px | 0px | block | none | - | Sticky header, full-width |
| **Hero** | 72px | 1440px | 1277px | 96px 0px | block | none | - | Main heading (H1: 70.59px) + canvas |
| **Value Props (2-col)** | 1805px | 1392px | 760px | 0px | grid | none | 24px | 2 equal columns (684px each) |
| **Mentorship** | 2660px | 1440px | 810px | 96px 0px | block | none | - | H2: 56.02px, testimonial + charts |
| **Programs** | 3470px | 1440px | 1115px | 96px 0px | block | none | - | H2: 56.02px, 3-card grid below |
| **Programs Cards** | 3932px | 1156px | 346px | 0px | grid | none | 24px | 3 columns (330px each) |
| **Testimonials** | 4681px | 1392px | 517px | 0px | flex | none | 12px | 3 cards, horizontal carousel |
| **Pricing** | 5294px | 1440px | 1344px | 96px 0px 144px | block | none | - | H2: 56.02px, 2-card grid below |
| **Pricing Cards** | 5693px | 920px | 801px | 0px | grid | 920px | 12px | 2 columns (460px each), centered |
| **Footer** | 7322px | 1440px | 694px | 96px 0px 48px | block | none | - | Newsletter + links + copyright |

---

## Typography Scale Reference

### Heading Sizes
| Element | Font Size | Font Weight | Line Height | Letter Spacing | Font Family |
|---------|-----------|-------------|-------------|----------------|-------------|
| **H1** | 70.59px | 400 | 70.59px (1em) | -1.4118px (-0.02em) | Libre Caslon Condensed |
| **H2** | 56.02px | 400 | 61.622px (1.1em) | -1.1204px (-0.02em) | Libre Caslon Condensed |
| **H3** | 44.46px | 400 | 53.352px (1.2em) | -0.8892px (-0.02em) | Libre Caslon Condensed |
| **H4** | 35.29px | 400 | 44.1125px (1.25em) | -0.7058px (-0.02em) | Libre Caslon Condensed |
| **H5** | 28.01px | 400 | 36.413px (1.3em) | -0.2801px (-0.01em) | Libre Caslon Condensed |

### Body Text Sizes
| Element | Font Size | Font Weight | Line Height | Letter Spacing | Font Family |
|---------|-----------|-------------|-------------|----------------|-------------|
| **Lead Text** | 17.64px | 400 | 24.696px (1.4em) | normal | BDO Grotesk / DM Sans |
| **Body Text** | 14px | 400 | 19.6px (1.4em) | normal | BDO Grotesk / DM Sans |
| **Small Text** | 11.11px | 400 | 15.554px (1.4em) | normal | BDO Grotesk / DM Sans |
| **Badge Text** | 11.11px | 400 | 15.554px (1.4em) | 1.11px (0.1em) | Roboto Mono |

---

## Spacing System

### Vertical Spacing (Gaps)
```
--gap-05:  12px   (Small gap - testimonials, pricing cards)
--gap:     24px   (Default gap - grids, sections)
--gap-075: 18px   (Medium-small)
--gap-15:  36px   (Medium)
--gap-2:   48px   (Large)
--gap-3:   72px   (Extra large)
--gap-4:   96px   (Section padding - top/bottom)
--gap-5:   120px  (Extra padding)
```

### Horizontal Spacing
```
--container-gutter: 24px  (Left/right padding on main container)
--section-pad:      96px  (Vertical padding on sections)
--section-pad-lg:   144px (Large vertical padding - pricing bottom)
```

---

## Grid System

### Column Widths (at 1440px viewport)
| Grid Type | Column Width | Total Width | Gap | Use Case |
|-----------|--------------|-------------|-----|----------|
| **2-Column** | 684px | 1392px | 24px | Value props, testimonials |
| **3-Column** | 330px | 1156px | 24px | Program cards |
| **4-Column** | 448px | 1440px | 24px | (Not used in current design) |
| **5-Column** | 566px | 1440px | 24px | (Not used in current design) |
| **8-Column** | 460px | 920px | 12px | Pricing cards (centered) |
| **10-Column** | 1156px | 1440px | 24px | (Full width content) |

### Grid Gaps
- **Standard Gap**: 24px (--grid-gap-m)
- **Compact Gap**: 12px (--grid-gap-s)

---

## Section Content Breakdown

### Hero Section (1277px height)
```
├── Badge: "welcome to SL:IT × Outsome"
├── H1: "Silicon Valley Accelerating for Korean Startups" (70.59px)
├── Lead Text: "6주 프로그램" (17.64px)
├── CTA Buttons: "Apply Now" + "Explore more"
├── Rating: "Rated 4.97/5 from 100+ founder reviews"
└── Right Side: Canvas animation + Dashboard mockups
```

### Value Props Section (760px height)
```
2-Column Grid (684px × 2)
├── Column 1: "Operator-Led 1:1 Sessions" (H4)
└── Column 2: "U.S. Market Entry, Simplified" (H4)
```

### Mentorship Section (810px height)
```
├── H2: "Clarity in Action." (56.02px)
├── Description text (17.64px)
├── Testimonial quote
├── Founder info
├── Progress Summary visualization
└── Resource Allocation chart
```

### Programs Section (1115px height)
```
├── H2: "Founder Sprint" (56.02px)
├── Description text (17.64px)
├── 3-Column Card Grid (346px height)
│   ├── Card 1: "Founder Sprint" (H3: 28px)
│   ├── Card 2: "US Track" (H3: 28px)
│   └── Card 3: "Alumni Club" (H3: 28px)
└── CTA: "Contact our team"
```

### Testimonials Section (517px height)
```
Flex Row (3 cards, 12px gap)
├── Card 1: Hyunji R. testimonial
├── Card 2: Olof M. testimonial
└── Card 3: Ajay J. testimonial
+ Carousel controls (prev/next buttons)
```

### Pricing Section (1344px height)
```
├── H2: "Acceleration designed to scale..." (56.02px)
├── Description text (17.64px)
├── 2-Column Card Grid (801px height, centered)
│   ├── Card 1: "Founder Sprint" (H3: 28px)
│   │   └── Features list
│   └── Card 2: "US Track" (H3: 28px)
│       └── Features list
└── CTA: "Join Founder Sprint" / "Learn about US Track"
```

### Footer (694px height)
```
├── Newsletter Section
│   ├── H3: "Fast-Track to building startup..." (28px)
│   ├── Email input
│   └── Subscribe button
├── Social Links (LinkedIn, Instagram, X)
├── Logo + Copyright
└── Legal disclaimer
```

---

## Container Widths at 1440px

| Container | Width | Padding | Actual Content Width | Notes |
|-----------|-------|---------|----------------------|-------|
| **Full Width** | 1440px | 0px | 1440px | Navigation, hero, sections |
| **Main Container** | 1440px | 24px L/R | 1392px | Content wrapper |
| **2-Col Grid** | 1392px | 0px | 1392px | Value props, testimonials |
| **3-Col Grid** | 1156px | 0px | 1156px | Program cards |
| **Pricing Grid** | 920px | 0px (centered) | 920px | Pricing cards (236px margin each side) |

---

## Responsive Breakpoints (Inferred)

Based on the CSS variables and layout structure:

```css
/* Desktop (1440px) - Current measurements */
@media (min-width: 1440px) {
  --container-max: 1440px;
  --grid-col-3: 330px;   /* 3-column cards */
  --grid-col-6: 684px;   /* 2-column cards */
  --grid-col-8: 920px;   /* Pricing cards */
  --grid-col-10: 1156px; /* 10-column width */
}

/* Tablet (768px) - Likely 2-column layout */
@media (max-width: 1024px) {
  /* Grids likely stack to 2 columns */
  /* Pricing cards likely stack vertically */
}

/* Mobile (375px) - Single column */
@media (max-width: 640px) {
  /* All grids become single column */
  /* Full-width sections */
}
```

---

## Key Design Principles

### 1. **Modular Spacing**
- All spacing uses CSS variables (--gap, --gap-2, etc.)
- Consistent 24px default gap throughout
- Sections use 96px vertical padding

### 2. **Grid-Based Layout**
- 12-column grid system implied
- Column widths: 330px, 448px, 566px, 684px, 920px, 1156px
- Gaps: 24px (standard) or 12px (compact)

### 3. **Typography Hierarchy**
- H1: 70.59px (Hero only)
- H2: 56.02px (Section headings)
- H3: 28px (Card/subsection headings)
- Body: 17.64px (Lead) / 14px (Regular)

### 4. **Color Palette**
- Background: #FEFAF3 (--color-light-1)
- Secondary: #F1EADD (--color-light-2)
- Text: #000 (--color-dark)
- Borders: rgba(47,44,37,0.12) (--color-dark-12)

### 5. **Component Sizing**
- Navigation height: 72px
- Button height: 48px (standard) / 42px (small)
- Button radius: 9px
- Border radius: 6px (standard) / 12px (large)

---

## Measurement Verification Checklist

✅ Viewport: 1440px × 900px  
✅ Document height: 8016px  
✅ All section Y positions measured  
✅ All section widths and heights measured  
✅ Padding and margins documented  
✅ Typography sizes extracted  
✅ Grid gaps measured  
✅ Container widths verified  
✅ Full-page screenshot captured  
✅ Individual section screenshots captured  

---

## Files Generated

1. **LAYOUT_MEASUREMENTS.md** - Detailed section-by-section breakdown
2. **LAYOUT_SUMMARY_TABLE.md** - This file (comprehensive table format)
3. **landing-page-full-1440px.png** - Full page screenshot
4. **section-hero.png** - Hero section detail
5. **section-mentorship.png** - Mentorship section detail
6. **section-programs.png** - Programs section detail
7. **section-pricing.png** - Pricing section detail
8. **section-testimonials.png** - Testimonials section detail
9. **section-footer.png** - Footer detail

---

## Notes

- All measurements taken at 1440px desktop viewport
- Animations (gravity stars canvas) not captured in static screenshots
- Responsive behavior inferred from CSS structure
- All values in pixels (px) unless otherwise noted
- Font sizes use modular scale based on 14px base
- Spacing uses consistent 12px/24px/96px increments
