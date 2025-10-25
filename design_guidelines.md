# Student Document Explainer AI - Design Guidelines

## Design Approach

**Selected Approach:** Design System Foundation with Educational Product Inspiration

Drawing from modern educational platforms like Quizlet, Khan Academy, and Notion, this design prioritizes clarity, approachability, and efficiency for student users. The interface balances professional functionality with friendly, encouraging aesthetics that reduce academic anxiety.

**Core Principles:**
- Clarity over decoration
- Encouraging and supportive visual language
- Efficient information hierarchy
- Mobile-first accessibility for students on any device

---

## Color Palette

### Light Mode
- **Primary:** 217 91% 60% (Warm blue - trustworthy, calming)
- **Primary Hover:** 217 91% 50%
- **Secondary:** 142 71% 45% (Success green for positive actions)
- **Background:** 0 0% 100% (Pure white)
- **Surface:** 220 13% 98% (Subtle gray for cards)
- **Border:** 220 13% 91%
- **Text Primary:** 222 47% 11% (Deep slate)
- **Text Secondary:** 215 16% 47% (Muted slate)

### Dark Mode
- **Primary:** 217 91% 65%
- **Primary Hover:** 217 91% 75%
- **Secondary:** 142 71% 50%
- **Background:** 222 47% 11%
- **Surface:** 217 33% 17%
- **Border:** 217 33% 24%
- **Text Primary:** 210 40% 98%
- **Text Secondary:** 215 20% 65%

### Accent Colors (Minimal Use)
- **Warning/Info:** 38 92% 50% (Amber for key terms)
- **Success:** 142 71% 45% (Green for completed explanations)

---

## Typography

**Font Families:**
- Primary: 'Inter' (Google Fonts) - Clean, modern sans-serif for UI elements
- Reading: 'Source Serif 4' (Google Fonts) - Comfortable serif for explanation paragraphs

**Type Scale:**
- **Hero/Display:** text-5xl md:text-6xl, font-bold (Inter)
- **Page Headers:** text-3xl md:text-4xl, font-bold (Inter)
- **Section Headers:** text-2xl, font-semibold (Inter)
- **Subsection:** text-xl, font-semibold (Inter)
- **Body (UI):** text-base, font-normal (Inter)
- **Body (Reading):** text-lg, leading-relaxed (Source Serif 4)
- **Small/Meta:** text-sm, font-medium (Inter)
- **Tiny/Labels:** text-xs, font-medium, uppercase, tracking-wide (Inter)

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24

**Container Strategy:**
- Maximum width: max-w-6xl (main content)
- Reading content: max-w-4xl (optimal line length)
- Padding: px-4 md:px-6 lg:px-8
- Section spacing: py-12 md:py-16 lg:py-20

**Grid System:**
- Single column for main content flow
- Two-column split for input section: 60/40 (form/preview) on desktop
- Three-column grid for feature showcases on landing page

---

## Component Library

### Navigation
- **Header:** Sticky top, backdrop-blur-lg with border-b, height h-16
- Logo left, nav links center (desktop), action button right
- Mobile: Hamburger menu with slide-in drawer
- Shadow: subtle shadow-sm on scroll

### Hero Section
- **Layout:** Full-width with gradient background (primary to secondary, diagonal)
- Height: min-h-[500px] md:min-h-[600px]
- Content: Centered, max-w-4xl
- Include illustration or abstract pattern overlay (not photo)

### Input Section (Core Feature)
**Upload Card:**
- Large dropzone with dashed border (border-2 border-dashed)
- Icon: Upload cloud (large, 64px)
- Background: surface color with hover:brightness-105
- Rounded: rounded-2xl
- Padding: p-8 md:p-12

**Options Panel:**
- Radio buttons with custom styling (large touch targets)
- Number input with +/- buttons
- Toggle between modes with smooth transition
- Sticky on scroll for easy access

### Results Display
**Explanation Card:**
- Clean white/surface background
- Border-l-4 with primary color accent
- Generous padding: p-6 md:p-8
- Section dividers with decorative emoji icons
- Bullet points with custom markers (✓ or •)
- Paragraph mode: comfortable line-height (leading-relaxed)

**Key Terms Section:**
- Grid layout: grid-cols-1 md:grid-cols-2 gap-4
- Each term: rounded-lg bg-amber-50 dark:bg-amber-900/20 p-4
- Bold term with definition below
- Icon prefix for visual interest

### Buttons
**Primary:** 
- Solid fill with primary color
- Padding: px-6 py-3, rounded-lg
- Shadow: shadow-md hover:shadow-lg
- Font: font-semibold

**Secondary:** 
- Outline variant with border-2
- When on images: backdrop-blur-md bg-white/20 dark:bg-black/20

**Icon Buttons:**
- Square, padding: p-2
- Hover background with subtle transition

### Form Elements
**Input Fields:**
- Height: h-12
- Border: border-2 with focus ring
- Rounded: rounded-lg
- Padding: px-4
- Background matches surface in dark mode

**File Upload:**
- Visual preview for uploaded files
- File name display with size
- Remove button (×) in corner

### Cards
**Feature Cards:**
- Rounded: rounded-xl
- Padding: p-6
- Border: border with surface background
- Hover: lift effect (hover:-translate-y-1)
- Icon top, heading, description below

### Loading States
- Skeleton screens for content areas
- Spinner for processing (animated SVG)
- Progress bar for file upload
- Shimmer effect on placeholders

---

## Images & Illustrations

### Hero Section
**Illustration Style:** Abstract, educational-themed illustration
- Depict: Books, documents, light bulbs (ideas), students studying
- Style: Modern, flat illustration with gradients
- Placement: Right side of hero on desktop, above text on mobile
- Source: Use illustration library (unDraw, Humaaans, or similar)

### Supporting Images
**Feature Section Icons:**
- Document icons (PDF, Word, etc.) - use icon library
- Upload/download iconography
- Abstract patterns for section backgrounds (subtle, low opacity)

**Result Section:**
- No images needed - focus on clean text presentation
- Emoji/Unicode symbols for visual markers (📘, ⭐, 🗝️, etc.)

### Background Elements
- Subtle gradient meshes in hero and CTA sections
- Decorative dots/grid patterns at low opacity (5-10%)
- No busy background images that compete with content

---

## Animations & Interactions

**Minimal, Purposeful Motion:**
- Fade-in on scroll for sections (once)
- Button hover: slight scale (1.02) with shadow growth
- Card hover: subtle lift (-translate-y-1)
- Page transitions: fade (200ms)
- Loading spinner: rotate animation
- Success state: checkmark scale-in with bounce

**NO:**
- Parallax effects
- Auto-playing carousels
- Distracting background animations
- Excessive micro-interactions

---

## Page Structure

### Landing Page
1. **Navigation** - Sticky header
2. **Hero Section** - Value proposition + illustration + CTA
3. **How It Works** - 3-step visual process (upload → process → understand)
4. **Features Grid** - 3-column cards (bullet/paragraph modes, multiple formats, key terms)
5. **Example Result** - Show sample output with actual formatting
6. **CTA Section** - "Try it now" with gradient background
7. **Footer** - Links, social, minimal

### Tool Page
1. **Header** - With quick navigation back
2. **Input Section** - Two-column: upload/URL form (left) + options panel (right)
3. **Results Area** - Full-width explanation display
4. **Share Section** - Copy link functionality
5. **Footer** - Minimal

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (adapt to 2 columns where suitable)
- Desktop: > 1024px (full layout)

**Mobile Optimizations:**
- Larger touch targets (min 44px)
- Simplified navigation (hamburger)
- Stack all multi-column layouts
- Reduce padding/margins proportionally
- Ensure text remains readable (min 16px)

---

## Accessibility
- WCAG AA contrast ratios maintained
- Focus visible states on all interactive elements
- Skip to main content link
- ARIA labels for icon buttons
- Semantic HTML structure
- Keyboard navigation support
- Dark mode respects system preference