## Packages
framer-motion | Complex animations for the floating button and page transitions
embla-carousel-react | Touch-friendly slider for the hero section
embla-carousel-autoplay | Autoplay plugin for the carousel
clsx | Utility for conditional classes (standard companion to tailwind-merge)
tailwind-merge | Utility for merging tailwind classes

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
}
The app assumes images are at /uploads/. For the purpose of this demonstration, fallback Unsplash images will be used if those specific paths are not found or to ensure the initial render is beautiful.
