# Accessibility Improvements

This document outlines the changes made to "Guess The Woof" to improve its accessibility (a11y) and ensuring it adheres to WCAG and ARIA standards.

## 1. Keyboard Navigation & Focus
- **Navbar Logo**: The logo was previously a clickable `div`, which is not natively focusable. It has been converted to a `<button>` element. This ensures that keyboard users can tab to it and press `Enter` to scroll to the top of the page.
- **Focus Indicators**: Standard focus rings are preserved (and enhanced with Tailwind's `focus:ring` utilities) to ensure users know where they are navigating.

## 2. Screen Reader Feedback (ARIA Live Regions)
- **Game Feedback**: The section displaying "Correct!" or "Oops!" messages has been marked with `aria-live="polite"`.
    - **Effect**: Screen readers will now automatically announce the result of a guess without the user needing to manually navigate to that part of the page.
- **Timer**: The countdown timer is now explicitly marked with `role="timer"` and includes a descriptive `aria-label`, helping assistive technologies understand the purpose of the changing numbers.

## 3. Decorative Elements (`aria-hidden`)
- **Icons**: Decorative icons (like the paw prints and emojis used purely for visual flair) have been marked with `aria-hidden="true"`.
    - **Benefit**: This reduces "noise" for screen reader users, preventing the device from reading out file names or generic descriptions like "Paw Icon" that do not add context to the content.

## 4. Semantic HTML
- We ensured the use of semantic tags like `<nav>`, `<section>`, and `<button>` instead of generic `div` soup, providing a better document structure for navigation tools.
