---
name: Nomad Modern
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3e4948'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#6e7979'
  outline-variant: '#bec9c8'
  surface-tint: '#03696a'
  primary: '#005454'
  on-primary: '#ffffff'
  primary-container: '#0f6e6e'
  on-primary-container: '#9eedec'
  inverse-primary: '#85d4d3'
  secondary: '#006b5e'
  on-secondary: '#ffffff'
  secondary-container: '#8df1de'
  on-secondary-container: '#006f62'
  tertiary: '#753b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#935218'
  on-tertiary-container: '#ffd7bc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a1f0ef'
  primary-fixed-dim: '#85d4d3'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#90f4e1'
  secondary-fixed-dim: '#74d8c5'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#005046'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb780'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is rooted in a "Nomad Modern" aesthetic—a fusion of contemporary utility and the warmth of a sunset excursion. It prioritizes a mobile-first philosophy, ensuring that users planning journeys on-the-go experience zero friction. 

The visual language balances **Adventurous** energy with **Trustworthy** stability. We achieve this by pairing deep, grounded teals with optimistic oranges. The style leverages a Modern approach with subtle tactile touches, such as soft shadows and smooth corner radii, to make the digital interface feel as inviting as a physical travel guide. The emotional response is one of "Seamless Exploration"—where the UI recedes to let high-quality travel imagery shine through elegant gradient overlays.

## Colors
The palette is inspired by coastal landscapes and open roads.
- **Teal Blue (#0F6E6E)** serves as the primary anchor, used for headers, primary actions, and branding elements to instill trust.
- **Travel Green (#3FA796)** acts as the secondary support color, ideal for success states, badges, and secondary navigation elements.
- **Accent Orange (#F4A261)** is our "Adventure Spark." Use it sparingly for high-conversion Call-to-Action (CTA) buttons and critical highlights.
- **White & Off-White** provide the canvas, ensuring the interface remains breathable and clean.

## Typography
This design system utilizes **Plus Jakarta Sans** for headings to project a friendly, contemporary, and optimistic personality. Its soft curves mirror the rounded UI elements. For long-form content and UI labels, **Inter** provides a utilitarian, highly readable counterpoint that ensures clarity in itinerary details and booking forms.

Hierarchy is established through tight leading in headlines and generous line heights in body text to prevent fatigue during extended reading.

## Layout & Spacing
The layout follows a **Fluid Grid** model optimized for mobile viewport constraints. A standard 8px baseline grid governs all spacing.
- **Mobile:** 4-column layout with 24px side margins.
- **Desktop:** 12-column centered layout with a max-width of 1280px.
Spacing is used to group related information, such as destination details, while larger "stack-lg" gaps are used to separate major content sections like "Top Destinations" from "User Reviews."

## Elevation & Depth
Depth is created through **Tonal Layers** and **Ambient Shadows**. 
- **Surface Layer:** The main background is a very light tint of teal-grey to reduce eye strain.
- **Elevated Layer (Cards):** Pure white cards use a soft, diffused shadow (Blur: 20px, Y: 8px, Opacity: 6% Primary Color) to appear "lifted" off the map or background.
- **Image Depth:** Images must feature a **Teal Blue gradient overlay** (bottom-to-top, 60% opacity to 0%) to ensure text legibility and brand consistency when labels are placed over photography.

## Shapes
To reinforce the "seamless" and "welcoming" brand pillars, this design system avoids sharp corners.
- **Small Elements (Chips, Checkboxes):** 8px radius.
- **Medium Elements (Buttons, Inputs):** 12px radius.
- **Large Elements (Feature Cards, Modals):** 16px radius.
- **Images:** All hero and thumbnail images must follow the card's 16px radius for a unified, soft-geometric look.

## Components
- **Buttons:** Primary buttons use a solid Accent Orange with white text for maximum visibility. Secondary buttons use a Teal Blue outline. All buttons have a minimum height of 48px for mobile tap-friendliness.
- **Cards:** The signature component. Cards feature a 16px radius, a soft ambient shadow, and no borders. Text is layered over the bottom portion of images using the brand-specific teal gradient.
- **Chips:** Used for "Adventure Tags" (e.g., "Hiking," "Luxury," "Budget"). These use Travel Green backgrounds with 10% opacity and solid Travel Green text.
- **Input Fields:** Soft grey backgrounds with a 1px border that shifts to Teal Blue on focus.
- **Travel Timeline:** A custom vertical list component with a Travel Green stroke connecting "Drive-In" points, representing the seamless nature of the itinerary.