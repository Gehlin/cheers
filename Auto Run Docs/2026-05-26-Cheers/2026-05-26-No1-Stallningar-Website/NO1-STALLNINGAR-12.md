# No1 Ställningar — Phase 12: Impressive Hero & Drone/Photo Showcase Section

## Goal
Replace the flat blue hero with a full-screen, video-ready hero that accepts a drone video or 3 showcase photos. Build a dedicated visual showcase section below the hero that acts as the primary "wow" moment for first-time visitors.

## Design Direction
- Hero: full-screen (`min-h-screen`), dark overlay on video/image, large bold headline, strong CTA
- Video background: `<video autoPlay muted loop playsInline>` with a poster image fallback
- Photo variant: 3-panel grid or cinematic parallax strip — used when no video is available
- Showcase section: below the fold, highlights the scale and quality of their work

## Tasks

### Hero Component

- [x] Create `src/components/HeroVideo.tsx` — a reusable full-screen hero that supports both a video background and a static image fallback:
  ```tsx
  interface HeroVideoProps {
    videoSrc?: string       // e.g. '/videos/drone-showcase.mp4'
    posterSrc?: string      // fallback image shown before video loads
    imageSrc?: string       // used instead of video if no videoSrc provided
    headline: string
    subheadline: string
    primaryCta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
  }
  ```
  - Background: if `videoSrc` is provided, render `<video>` with `autoPlay muted loop playsInline poster={posterSrc}` and `object-cover w-full h-full absolute inset-0`. If only `imageSrc`, render an `<img>` with the same absolute fill classes.
  - Dark overlay: `<div className="absolute inset-0 bg-black/50" />` layered above the video/image
  - Content: centered, `max-w-4xl mx-auto text-center text-white` with:
    - `<h1>` — extra large, bold, `text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight`
    - `<p>` — subheadline, `text-xl sm:text-2xl text-white/85 mt-6 max-w-2xl mx-auto`
    - CTA buttons row — primary pink + secondary white outline
  - Scroll indicator: an animated downward chevron at the bottom-center of the hero (`absolute bottom-8 left-1/2 -translate-x-1/2`) with `animate-bounce` to invite scrolling
  - Accessibility: `<section aria-label="Hjältebanner">`, video element has `aria-hidden="true"` (decorative)
  - Placeholder asset note: if no `videoSrc` and no `imageSrc` are provided, show the existing gradient pattern as fallback (the `repeating-linear-gradient` from the original hero)

- [x] Update `src/pages/Home.tsx` — replace the current Hero section with `<HeroVideo>`:
  ```tsx
  <HeroVideo
    // videoSrc="/videos/drone-showcase.mp4"  ← uncomment when video is ready
    // posterSrc="/images/hero-poster.jpg"     ← uncomment when poster image is ready
    headline="Professionella ställningar i Göteborg"
    subheadline="No 1 Scaffolding Company AB — säkra och anpassade ställningslösningar för bygg, renovering och underhåll i Västra Götaland och Hallands län."
    primaryCta={{ label: 'Begär offert', href: '/begar-offert' }}
    secondaryCta={{ label: 'Se våra tjänster', href: '/tjanster' }}
  />
  ```

### Photo Showcase Section

- [x] Create `src/components/ShowcaseStrip.tsx` — a 3-image cinematic strip section that sits directly below the hero:
  ```tsx
  interface ShowcaseImage {
    src: string
    alt: string
    caption?: string
  }
  interface ShowcaseStripProps {
    images: ShowcaseImage[]
    headline?: string
  }
  ```
  - Layout: a full-width 3-column grid on desktop (`grid-cols-3`), 1-column on mobile
  - Each image: fixed aspect ratio `aspect-[4/3]`, `object-cover`, slight zoom on hover (`hover:scale-105 transition-transform duration-500`) wrapped in `overflow-hidden`
  - Optional caption: appears as an overlay at the bottom of each image on hover — `absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-300`
  - The entire strip has `bg-black` background so the images feel cinematic
  - No headline or a subtle one: optional `<h2>` above in white text if `headline` prop is passed

- [x] Add placeholder images data and the `<ShowcaseStrip>` to `src/pages/Home.tsx`, immediately after the `<HeroVideo>` and before the "Om No1 Ställningar" section:
  ```tsx
  const showcaseImages = [
    {
      src: 'https://placehold.co/800x600/111827/ffffff?text=Projekt+foto+1',
      alt: 'Byggnadsställningar under pågående renoveringsprojekt i Göteborg',
      caption: 'Fasadrenovering, Göteborg',
    },
    {
      src: 'https://placehold.co/800x600/111827/ffffff?text=Drone+video+här',
      alt: 'Drönarbild över byggarbetsplats med ställningar',
      caption: 'Nybyggnation, Västra Götaland',
    },
    {
      src: 'https://placehold.co/800x600/111827/ffffff?text=Projekt+foto+3',
      alt: 'Väderskydd och ställningar vid takrenovering',
      caption: 'Väderskydd, Halland',
    },
  ]
  // ...
  <ShowcaseStrip images={showcaseImages} />
  ```
  Add a comment above: `{/* Replace placeholder images with real project photos or embed drone video before launch */}`

### Video Asset Preparation

- [x] Create `public/videos/.gitkeep` — an empty placeholder so the `videos/` folder is tracked in git. Add a comment in `src/pages/Home.tsx` above the `<HeroVideo>` component:
  ```tsx
  {/*
    DRONE VIDEO: When the drone video is ready:
    1. Place the file at public/videos/drone-showcase.mp4
       Recommended: 1920×1080, H.264, < 15 MB for web
    2. Create a poster image: public/images/hero-poster.jpg (1920×1080)
    3. Uncomment the videoSrc and posterSrc props on <HeroVideo>
    4. Optionally add WebM format for better browser support
  */}
  ```
- [x] Create `public/images/.gitkeep` — placeholder folder for hero poster and showcase images.

### Update the Services Page Hero

- [x] Update the Services page hero banner in `src/pages/Tjanster.tsx` to use the same cinematic style — dark background (`bg-neutral-body`), full-width, with a subtle background pattern. Make the `<h1>` larger and more impactful: `text-4xl sm:text-5xl font-extrabold`.

- [x] Run `npm run build` — zero errors. Run `npm run dev` and verify the hero renders with the gradient fallback, the showcase strip shows the 3 placeholder images side by side, and the scroll indicator chevron animates.

<!-- MAESTRO NOTE: All tasks completed 2026-05-27. Build verified clean (55 modules, 0 errors). -->
