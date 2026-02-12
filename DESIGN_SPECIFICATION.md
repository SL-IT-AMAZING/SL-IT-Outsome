# Outsome "Apply Now" Form - Design Specification

**Page Title:** Founder Sprint Application Form  
**URL:** https://tally.so/r/m64llA  
**Captured:** February 10, 2026

---

## Layout & Dimensions

- **Full Page Width:** 1280px
- **Full Page Height:** 2720px
- **Viewport Width:** 1280px
- **Viewport Height:** 720px
- **Display:** Flex (column direction)
- **Container Padding:** 0px
- **Container Margin:** 0px

---

## Color Palette

### Background Colors
- **Page Background:** Transparent (rgba(0, 0, 0, 0))
- **Body Background:** Transparent (rgba(0, 0, 0, 0))
- **Form Input Background:** White with 50% opacity (rgba(255, 255, 255, 0.5))

### Text Colors
- **Primary Text Color:** rgb(25, 25, 24) - Dark charcoal/near-black
- **Button Text Color:** rgb(0, 0, 0) - Pure black

### Border Colors
- **Input Border Color:** rgb(25, 25, 24) - Dark charcoal
- **Input Border Width:** 0px (no visible border)

---

## Typography

### Font Family
- **Primary Font:** Inter, "Inter Fallback", sans-serif
- **Font Size Base:** 16px

### Heading Styles

#### H1 (Main Heading)
- **Text:** "Company information"
- **Font Size:** 30px
- **Font Weight:** 600 (semi-bold)
- **Color:** rgb(25, 25, 24)
- **Line Height:** 37.5px
- **Margin Top:** 0px
- **Margin Bottom:** 0px

#### H3 (Section Heading)
- **Text:** "어떤 트랙에 지원하시나요?" (Which track are you applying for?)
- **Font Size:** 20px
- **Font Weight:** 600 (semi-bold)
- **Color:** rgb(25, 25, 24)
- **Line Height:** 25px
- **Margin Top:** 0px
- **Margin Bottom:** 0px

---

## Form Fields

### Input Field Styling (All Text Inputs)
- **Type:** text, email, tel, textarea
- **Background Color:** rgba(255, 255, 255, 0.5) - Semi-transparent white
- **Border Color:** rgb(25, 25, 24)
- **Border Width:** 0px
- **Border Radius:** 8px
- **Padding:** 0px 10px (horizontal), 10px (textarea)
- **Font Size:** 16px
- **Font Family:** Inter, "Inter Fallback", sans-serif
- **Text Color:** rgb(25, 25, 24)

### Form Fields Present

1. **한글이름** (Korean Name)
   - Type: text
   - Placeholder: "한글이름"
   - Required: Yes
   - Padding: 0px 10px

2. **영문이름** (English Name)
   - Type: text
   - Placeholder: "영문이름"
   - Required: Yes
   - Padding: 0px 10px

3. **Phone Number**
   - Type: tel
   - Placeholder: "Phone Number"
   - Required: Yes
   - Padding: 0px 60px 0px 10px (extra right padding for country code)

4. **E-mail**
   - Type: email
   - Placeholder: "E-mail"
   - Required: Yes
   - Padding: 0px 10px

5. **LinkedIn Profile**
   - Type: text
   - Placeholder: "LinkedIn Profile"
   - Required: Yes
   - Padding: 0px 10px

6. **도로명 주소** (Street Address)
   - Type: text
   - Placeholder: "도로명 주소"
   - Required: Yes
   - Padding: 0px 10px

7. **기업명** (Company Name)
   - Type: text
   - Placeholder: "기업명"
   - Required: Yes
   - Padding: 0px 10px

8. **서비스 URL** (Service URL)
   - Type: text
   - Placeholder: "서비스 URL"
   - Required: No
   - Padding: 0px 10px

9. **서비스 설명** (Service Description)
   - Type: textarea
   - Placeholder: "서비스 설명"
   - Required: No
   - Padding: 10px

10. **분야 기입** (Field Input)
    - Type: text
    - Placeholder: "분야 기입"
    - Required: No
    - Padding: 0px 10px

11. **URL 링크** (URL Link)
    - Type: text
    - Placeholder: "URL 링크"
    - Required: No
    - Padding: 0px 10px

12. **Roadmap/Timeline**
    - Type: textarea
    - Placeholder: "예시) 2025.01.01 - Ver 1.0 MVP 앱스토어 및 구글스토어 퍼블릭 런칭 / 2025.04.01 - AI Ver2.0 고도화 완료 예정"
    - Required: No
    - Padding: 10px

13. **BM 기재** (Business Model)
    - Type: text
    - Placeholder: "BM 기재"
    - Required: No
    - Padding: 0px 10px

### Radio Buttons
- **Type:** radio
- **Background Color:** rgba(0, 0, 0, 0) - Transparent
- **Border Color:** rgb(0, 0, 0)
- **Border Width:** 0px
- **Border Radius:** 0px
- **Padding:** 0px
- **Font Size:** 16px
- **Font Family:** Inter, "Inter Fallback", sans-serif
- **Color:** rgb(0, 0, 0)
- **Count:** 2 radio buttons (for track selection)

---

## Button Styling

### "Next Page" Button
- **Text:** "Next Page"
- **Background Color:** rgb(25, 25, 24) - Dark charcoal
- **Text Color:** rgb(0, 0, 0) - Pure black
- **Border Color:** rgb(0, 0, 0)
- **Border Radius:** 8px
- **Padding:** 0px 13.5px (horizontal)
- **Font Size:** 15px
- **Font Family:** Inter, "Inter Fallback", sans-serif
- **Font Weight:** 400 (normal)
- **Cursor:** pointer

---

## Key Design Features

1. **Semi-transparent Input Fields:** All text inputs use rgba(255, 255, 255, 0.5) for a frosted glass effect
2. **Rounded Corners:** 8px border-radius on all inputs and buttons
3. **Minimal Borders:** No visible borders on inputs (0px border-width)
4. **Dark Theme Elements:** Dark charcoal (rgb(25, 25, 24)) for text and button backgrounds
5. **Consistent Spacing:** Uniform padding and margins throughout
6. **Multi-language Support:** Form includes both Korean (한글) and English fields
7. **Progressive Disclosure:** Multi-page form with "Next Page" button

---

## Form Structure

The form appears to be organized in sections:
1. **Personal Information** - Name (Korean & English), Phone, Email, LinkedIn, Address
2. **Company Information** - Company name, Service URL, Service description
3. **Track Selection** - Radio buttons for track selection
4. **Additional Details** - Field, URL, Roadmap, Business Model

---

## Accessibility Notes

- Form uses semantic HTML with proper input types
- Radio buttons for mutually exclusive options
- Required fields are marked with `required` attribute
- Placeholder text provides field hints
- Font size is 16px (readable on mobile)

---

## Implementation Notes for Recreation

1. Use a flexbox layout with column direction
2. Apply semi-transparent white background to all input fields
3. Use Inter font family as primary
4. Maintain 8px border-radius for all interactive elements
5. Use dark charcoal (rgb(25, 25, 24)) as primary dark color
6. Ensure proper spacing between form sections
7. Implement multi-page form flow with "Next Page" button
8. Support both Korean and English text input

