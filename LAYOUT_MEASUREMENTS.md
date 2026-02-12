# Landing Page Layout Measurements (1440px Desktop)

## Viewport & Document Dimensions
- **Viewport Width**: 1440px
- **Viewport Height**: 900px
- **Document Width**: 1440px
- **Document Height**: 8016px
- **Total Sections**: 7 major sections + multiple grids

---

## Section-by-Section Measurements

### 1. Navigation Bar
| Property | Value |
|----------|-------|
| **Y Position** | 168px (sticky) |
| **Width** | 1440px (full width) |
| **Height** | 72px |
| **Padding** | 0px |
| **Margin** | 0px |
| **Display** | block |
| **Max-Width** | none |
| **Background** | Sticky (position: sticky; top: 0) |

---

### 2. Hero Section (#hero)
| Property | Value |
|----------|-------|
| **Y Position** | 72px |
| **Width** | 1440px (full width) |
| **Height** | 1277px |
| **Padding** | 96px 0px (vertical padding) |
| **Margin** | 0px |
| **Display** | block |
| **Max-Width** | none |
| **Child Count** | 2 (text content + canvas/visual) |

#### Typography in Hero
| Element | Font Size | Font Weight | Line Height | Letter Spacing |
|---------|-----------|-------------|-------------|----------------|
| **H1** | 70.59px | 400 | 70.59px | -1.4118px |
| **Body Text** | 17.64px | 400 | 24.696px | normal |

#### Hero Content Layout
- Main heading: "Silicon Valley Accelerating for Korean Startups"
- Subheading: "6주 프로그램" (6-week program)
- Call-to-action buttons: "Apply Now" + "Explore more"
- Rating badge: "Rated 4.97/5 from 100+ founder reviews"
- Right side: Gravity stars canvas animation + dashboard mockups

---

### 3. Value Props Section (2-Column Grid)
| Property | Value |
|----------|-------|
| **Y Position** | 1805px |
| **Width** | 1392px (container with gutters) |
| **Height** | 760px |
| **Padding** | 0px |
| **Margin** | 0px |
| **Display** | grid |
| **Gap** | 24px |
| **Max-Width** | none |
| **Grid Columns** | 2 equal columns |
| **Child Count** | 2 |

#### Grid Column Widths
- Each column: ~684px (--grid-col-6)
- Gap between: 24px (--gap)

#### Content
1. **Operator-Led 1:1 Sessions** (H4)
2. **U.S. Market Entry, Simplified** (H4)

---

### 4. Mentorship Section (#mentors)
| Property | Value |
|----------|-------|
| **Y Position** | 2660px |
| **Width** | 1440px (full width) |
| **Height** | 810px |
| **Padding** | 96px 0px (vertical padding) |
| **Margin** | 0px |
| **Display** | block |
| **Max-Width** | none |

#### Typography in Mentorship
| Element | Font Size | Font Weight | Line Height | Letter Spacing |
|---------|-----------|-------------|-------------|----------------|
| **H2** | 56.02px | 400 | 61.622px | -1.1204px |
| **Body Text** | 17.64px | 400 | 24.696px | normal |

#### Content
- Main heading: "Clarity in Action."
- Testimonial quote from founder
- Progress summary visualization
- Resource allocation chart

---

### 5. Programs Section (#programs)
| Property | Value |
|----------|-------|
| **Y Position** | 3470px |
| **Width** | 1440px (full width) |
| **Height** | 1115px |
| **Padding** | 96px 0px (vertical padding) |
| **Margin** | 0px |
| **Display** | block |
| **Max-Width** | none |

#### Typography in Programs
| Element | Font Size | Font Weight | Line Height | Letter Spacing |
|---------|-----------|-------------|-------------|----------------|
| **H2** | 56.02px | 400 | 61.622px | -1.1204px |
| **H3** | 28px | 400 | 33.6px | -0.56px |
| **Body Text** | 17.64px | 400 | 24.696px | normal |

#### Card Grid (3-Column)
| Property | Value |
|----------|-------|
| **Width** | 1156px (--grid-col-10) |
| **Height** | 346px |
| **Display** | grid |
| **Gap** | 24px |
| **Columns** | 3 equal columns |
| **Column Width** | ~330px each (--grid-col-3) |
| **Child Count** | 3 cards |

#### Programs Offered
1. **Founder Sprint** - 6-week accelerator
2. **US Track** - 13-night Bay Area immersion
3. **Alumni Club** - Ongoing support (Coming Soon)

---

### 6. Success Stories / Testimonials Section
| Property | Value |
|----------|-------|
| **Y Position** | 4681px |
| **Width** | 1392px |
| **Height** | 517px |
| **Display** | flex |
| **Flex Direction** | row |
| **Gap** | 12px |
| **Child Count** | 3 testimonial cards |

#### Testimonials Cluster Layout
- **Display**: flex (horizontal row)
- **Gap**: 12px (--grid-gap-s)
- **Cards**: 3 customer testimonials
- **Carousel Controls**: Previous/Next buttons

---

### 7. Pricing Section (#pricing)
| Property | Value |
|----------|-------|
| **Y Position** | 5294px |
| **Width** | 1440px (full width) |
| **Height** | 1344px |
| **Padding** | 96px 0px 144px (extra bottom padding) |
| **Margin** | 0px |
| **Display** | block |
| **Max-Width** | none |

#### Typography in Pricing
| Element | Font Size | Font Weight | Line Height | Letter Spacing |
|---------|-----------|-------------|-------------|----------------|
| **H2** | 56.02px | 400 | 61.622px | -1.1204px |
| **H3** | 28px | 400 | 33.6px | -0.56px |
| **Body Text** | 17.64px | 400 | 24.696px | normal |

#### Pricing Cards (2-Column)
| Property | Value |
|----------|-------|
| **Y Position** | 5693px |
| **Width** | 920px (--grid-col-8) |
| **Height** | 801px |
| **Margin** | 0px 236px (centered) |
| **Display** | grid |
| **Gap** | 12px (--grid-gap-s) |
| **Columns** | 2 equal columns |
| **Column Width** | ~454px each |
| **Child Count** | 2 pricing tiers |

#### Pricing Tiers
1. **Founder Sprint** - 6-week program in Seoul
   - Includes: VOD, meals, 1:1 sessions, IR deck, etc.
2. **US Track** - 13-night Bay Area experience
   - Includes: Accommodation, networking, office visits, etc.

---

### 8. Footer
| Property | Value |
|----------|-------|
| **Y Position** | 7322px |
| **Width** | 1440px (full width) |
| **Height** | 694px |
| **Padding** | 96px 0px 48px (vertical padding) |
| **Margin** | 0px |
| **Display** | block |
| **Max-Width** | none |

#### Footer Content
- Newsletter signup section
- Social media links (LinkedIn, Instagram, X/Twitter)
- Copyright notice
- Legal disclaimer

---

## Design System Variables (from CSS)

### Spacing Scale
```css
--gap: 24px                    /* Default gap */
--gap-05: 12px                 /* Small gap */
--gap-075: 18px                /* Medium-small gap */
--gap-15: 36px                 /* Medium gap */
--gap-2: 48px                  /* Large gap */
--gap-3: 72px                  /* Extra large gap */
--gap-4: 96px                  /* Section padding */
--gap-5: 120px                 /* Extra padding */
```

### Grid Column Widths
```css
--grid-col-3: 330px            /* 3-column card width */
--grid-col-4: 448px            /* 4-column card width */
--grid-col-5: 566px            /* 5-column card width */
--grid-col-6: 684px            /* 6-column card width (2-col grid) */
--grid-col-8: 920px            /* 8-column card width (pricing) */
--grid-col-10: 1156px          /* 10-column card width (3-col grid) */
```

### Container & Padding
```css
--container-max: 1440px        /* Max container width */
--container-gutter: 24px       /* Horizontal padding */
--section-pad: 96px            /* Vertical section padding */
--section-pad-lg: 144px        /* Large vertical padding */
```

### Typography Scale
```css
h1: 70.59px (line-height: 1em, letter-spacing: -0.02em)
h2: 56.02px (line-height: 1.1em, letter-spacing: -0.02em)
h3: 44.46px (line-height: 1.2em, letter-spacing: -0.02em)
h4: 35.29px (line-height: 1.25em, letter-spacing: -0.02em)
h5: 28.01px (line-height: 1.3em, letter-spacing: -0.01em)
.text-lead: 17.64px (line-height: 1.4em)
body: 14px (line-height: 1.4em)
.text-small: 11.11px (line-height: 1.4em)
```

### Font Families
```css
--font-body: "BDO Grotesk", "DM Sans", "Noto Sans KR", Arial, sans-serif
--font-headings: "Libre Caslon Condensed", "Times New Roman", serif
--font-badges: "Roboto Mono", "Trebuchet MS", monospace
```

### Colors
```css
--color-light-1: #FEFAF3        /* Main background */
--color-light-2: #F1EADD        /* Secondary background */
--color-dark: #000              /* Text color */
--color-dark-7: rgba(47,44,37,0.06)
--color-dark-12: rgba(47,44,37,0.12)
```

---

## Layout Hierarchy Summary

```
Document (8016px height)
├── Navigation (72px) - Sticky
├── Hero Section (1277px)
│   ├── Text content (left)
│   └── Canvas + Mockups (right)
├── Value Props Grid (760px) - 2 columns
├── Mentorship Section (810px)
│   ├── Heading + Description
│   ├── Testimonial
│   └── Progress visualizations
├── Programs Section (1115px)
│   ├── Heading + Description
│   └── Card Grid (3 columns, 346px height)
├── Testimonials Carousel (517px) - 3 cards
├── Pricing Section (1344px)
│   ├── Heading + Description
│   └── Pricing Cards (2 columns, 801px height)
└── Footer (694px)
    ├── Newsletter signup
    └── Links + Copyright
```

---

## Key Layout Insights

### Horizontal Layout
- **Full-width sections**: 1440px (nav, hero, mentors, programs, pricing, footer)
- **Content containers**: 1392px (with 24px gutters on each side)
- **Grid layouts**: 
  - 2-column: 684px per column (--grid-col-6)
  - 3-column: 330px per column (--grid-col-3)
  - Pricing: 460px per column (--grid-col-8 / 2)

### Vertical Spacing
- **Section padding**: 96px top/bottom (--section-pad)
- **Pricing section**: 96px top + 144px bottom (--section-pad-lg)
- **Gap between elements**: 24px (--gap) or 12px (--gap-05)
- **Navigation height**: 72px (--nav-height)

### Typography Hierarchy
- **H1**: 70.59px (Hero only)
- **H2**: 56.02px (Section headings)
- **H3**: 28px (Card/subsection headings)
- **Body**: 17.64px (Lead text) / 14px (Regular text)

### Responsive Behavior
- The page uses `max-width: 1440px` on main container
- Horizontal padding: 24px (--container-gutter)
- Grid gaps: 24px (standard) or 12px (compact)
- All sections are full-width (1440px) with centered content

---

## Screenshots Captured
1. ✅ `landing-page-full-1440px.png` - Full page screenshot
2. ✅ `section-hero.png` - Hero section detail
3. ✅ Additional section screenshots available

---

## CSS Variables Reference
All measurements are based on the design system variables defined in the HTML `<style>` tag. The layout uses a modular spacing scale and grid system for consistency across all sections.
