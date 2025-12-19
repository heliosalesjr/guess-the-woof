# Guess The Woof! - Design System

**Version**: 1.0.0
**Status**: Active

## 1. Core Philosophy
"Guess The Woof!" is designed to be **playful, modern, and energetic**. The visual language combines deep, sophisticated backgrounds with vibrant, fun accents and fluid motion. The interface aims to feel "alive" through extensive use of micro-interactions and physics-based animations.

---

## 2. Color Palette

The interface relies on a strong "Indigo & Purple" core, accented by gradients and glassmorphism.

### Primary Gradient (Brand Identity)
Used for backgrounds (Hero, Learn More) and brand moments.
- **Start**: `indigo-600` / `indigo-900`
- **Mid**: `purple-600` / `purple-900`
- **End**: `indigo-800`

### Surface Colors
- **Light Theme**: `white` (Game Section)
- **Dark Theme / Glass**: `white/10` with `backdrop-blur-md` (Learn More Cards)
- **Overlay**: `black/20` to `black/40` (Hero Image Overlay)

### Functional Colors
- **Action/CTA**: `indigo-600` (Primary Button), `white` (Secondary Button on dark bg)
- **Success**: `green-500` / `green-600` (Correct answer)
- **Error**: `red-500` / `red-600` (Wrong answer)
- **Accents**: `pink-400`, `yellow-400` (Icons and highlights)

### Text Colors
- **Headings (Dark Bg)**: `white`
- **Headings (Light Bg)**: `gray-900`, `gray-800`
- **Body (Dark Bg)**: `indigo-100`, `indigo-50`
- **Body (Light Bg)**: `gray-600`
- **Brand Highlight**: `indigo-200` (e.g., "Woof" span)

---

## 3. Typography

The application uses the system sans-serif font stack (Tailwind default) but adjusted for a bold, friendly character.

- **Display Headings**: `font-extrabold`, `text-5xl` to `text-7xl`. Tight tracking (`tracking-tight`) for a poster-like feel.
- **Component Titles**: `font-bold`, `text-3xl`.
- **Body Text**: `text-lg` or `text-xl` for readability, often with `leading-relaxed`.
- **Interactive Text**: `font-bold`, `uppercase` tracking for buttons and labels.

---

## 4. UI Components

### Buttons
Buttons are pill-shaped and tactile.
- **Shape**: `rounded-full`
- **Padding**: Generous (`py-3 px-8` or larger)
- **Shadow**: `shadow-lg` or `shadow-xl` to lift them off the page.
- **Interaction**:
    - **Hover**: Scale up (`scale-105`), lighten background.
    - **Tap**: Scale down (`scale-95`).

### Cards (Glassmorphism)
Used in the "Learn More" section.
- **Background**: `bg-white/10` (10% white transparency)
- **Border**: `border-white/10` or `border-white/20`
- **Blur**: `backdrop-blur-md`
- **Shape**: Square aspect ratio (`aspect-square`) with large rounded corners (`rounded-[2.5rem]`).
- **Hover**: Inner flow, subtle rotation of internal elements, lift effect (`y: -10`).

### Hero Image
- **Shape**: Rounded corners (`rounded-[2rem]`).
- **Style**: Tilted (`rotate-6`) for a casual look.
- **Interactive**: Hover to reveal "Click to find out", Click to reveal breed name.

---

## 5. Animation & Motion

Motion is central to the experience, utilizing `framer-motion` for physics-based interactions.

### Principles
- **Springy**: Elements pop in with a bounce (Scale 0.8 -> 1).
- **Responsive**: Elements react immediately to Hover (`scale-105`, `y-5`).
- **Continuous**: Decorative elements (like the paw prints or background blobs) may have subtle infinite animations (`animate-bounce`, `animate-pulse`).

### Standard Transitions
- **Hover**: `transition-all duration-300`
- **Entrance**: `duration-500` or `duration-800` depending on size.

---

## 6. Iconography

Icons are used as visual anchors and are drawn from `react-icons/fa` (FontAwesome).
- **Style**: Solid shapes (`FaPaw`, `FaHeart`).
- **Presentation**: Often enclosed in a rounded container or "bubble" with a contrasting background color.
- **Animation**: Icons often bounce or rotate on hover.
