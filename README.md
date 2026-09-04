# Louis Alano — Engineering Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Building for production is `npm run build && npm start`. The
first build needs internet access once, to fetch the Google Fonts (Archivo, Inter, IBM Plex
Mono) used in `app/layout.tsx`.

## Images are real now, everywhere

Every image on the site — hero photo, all 13 project heroes, and every gallery shot (69
images total) — is now a real photo or CAD render pulled directly from the source `.pptx`
media, not a placeholder. `ASSET_MANIFEST.md` is kept as a reference map of what's where, in
case you want to swap anything out later. A handful of originally-planned gallery images
(AEM-VTMD's active-coil shot, one Beetleweight assembly angle, one Magnetic Charger render,
one Crop Washer angle) weren't findable as distinct images in the deck, so those gallery
entries were removed rather than left broken — everything currently in the data has a real
file behind it.

## Other fixes in this round

- **Resume** — added the "7th Academic Research Conference for Mechanical Engineers - 3rd
  Place" achievement and filled in "Solid Edge Associate" for the certification that was
  blank, per your corrections. Still one page.
- **Hero layout** — the homepage text now sits further right (wider content container), per
  your feedback.
- **Projects PDF** — renamed "Selected Work" to "Project Portfolio" (title text and filename:
  `Louis_Alano_Project_Portfolio.pdf`), and every project page now has its real hero image
  instead of being text-only.

## Category system rebuilt to match the real filter bar

Categories are now **Prototype Vehicle / Products / Simulation and Analysis / Fabrication**
(matching the actual Figma filter bar, not the brief's motorsport/robotics/product/analysis
set) — `robotics` and `motorsport` are gone entirely, remapped as follows:

- SIDLAK II → now tagged Simulation and Analysis (highlights the roll bar + flanged FEA),
  plus Prototype Vehicle and Fabrication
- Autonomous Steering → added to Simulation and Analysis
- Aerosol Dispenser and Thread Finder → removed from Simulation and Analysis (now Products
  only / Products + Fabrication)
- Automated Body Misting Device → added to Simulation and Analysis (highlights the CFD/
  pressure simulation)

**New feature**: when the "Simulation and Analysis" filter is active, SIDLAK II, AEM-VTMD, and
Automated Body Misting Device's grid card image crossfades to their analysis image (roll bar
FEA / frequency-response plot / CFD pressure sim) instead of the normal hero shot, with a small
"Simulation" badge. This is driven by the new `analysisImage` field on `Project` in
`lib/types.ts` — add it to any other project to get the same behavior.

## Other fixes in this round

- **SIDLAK II gallery trimmed** from 12 images down to 7 — removed the ones that duplicated the
  Autonomous Steering project's own gallery or were lower-value (both autonomous-steering
  close-ups, the captioned fiberglass-mold shot, the real dirty-mold photo, and the indoor
  technical-inspection photo).
- **Every image now has a caption** — all 70 image objects across every project's hero +
  gallery.
- **True fullscreen lightbox restored**: clicking the big/main image on a project page now
  opens a fullscreen view (object-contain, so nothing gets cropped) — separate from clicking a
  thumbnail, which still just swaps the main image. Arrow keys and click-outside both work.
- Removed the now-unused `components/ImageGallery.tsx` (fully replaced by `ProjectMedia.tsx`).

## Major round: real photos everywhere + UI fixes

- **All 69 project/experience images upgraded** to your high-resolution versions from
  `PORTFOLIO_PHOTOS.zip` — hero shots, CAD renders, FEA plots, and real photos across all 13
  projects and all 3 experience entries. Crop Washer also gained two new gallery images
  (`cad-render-2.jpg`, `cad-render-3.jpg`) since you sent extra angles for it.
- **PUP Hygears now has 2 new product photos** — MagSafe Stand Power Bank and Collapsible
  Drawing Canister — added as experience photos per your note.
- **Resume 404 fixed** — the PDF is now actually at `public/resume.pdf`, so the nav/hero
  "Resume" link resolves instead of 404ing.
- **Fixed a real bug**: two headings had a literal `\u2014` showing as text instead of an
  em dash — that's a JSX quirk (raw JSX text doesn't interpret unicode escapes the way JS
  strings do). Both fixed.
- **Project grid is now uniform-sized** cards instead of the mixed bento sizing.
- **Project detail pages redesigned**: the main image and a "Project Gallery" thumbnail grid
  now sit together near the top (click a thumbnail to swap the main image), replacing the old
  separate gallery section at the bottom. Thumbnails show caption pills where a caption exists.
- **Boat Docking Claw Arm** rewritten with your real explanation text as page sections
  (not baked into the image anymore) plus the new 102 mm → 45 mm / 126.7%-stiffer numbers, and
  your two cleaned-up FEA images.
- **Scroll animations**: Skills cards, Experience entries, and Project cards now rise/fade in
  with a staggered delay as you scroll to them, instead of appearing all at once.

## Latest round of changes

- **Experience photos are real now** — pulled directly out of the source `.pptx` media
  (not placeholders): the wiring/robotics and CAD+workshop shots for Yuro, the pit-garage
  team photo and classroom teaching photo for PUP Wired, and the Solid Edge frame render for
  PUP Hygears. They live in `public/assets/experience/<org-slug>/` and render automatically.
- **Contact section** — removed the "Open to mechanical design..." sentence; now shows your
  real email, phone, and LinkedIn as clickable rows (`lib/site.ts` → `SITE`).
- **Resume PDF** (`John_Louis_Alano_Resume.pdf`, delivered alongside this zip) — rebuilt in
  the layout of the reference resume you sent (serif name, colored section labels + rule,
  right-aligned dates), using the site's green, with your exact .docx content unchanged. It
  includes a "Portfolio" hyperlink — currently pointing at a placeholder URL
  (`https://louisalano.vercel.app`) since the site isn't deployed yet. Send me the real URL
  once you have one and I'll swap it in. One thing to flag: your source .docx has a
  Certifications bullet that's just "— | Sep 2024" with no certification name — kept as-is
  rather than guessed at, but you'll want to fill that in yourself.
- **Projects PDF deck** (`Louis_Alano_Selected_Work.pdf`, delivered alongside this zip) — a
  14-page landscape PDF (cover + one page per project) matching the site's dark/teal look,
  each page hyperlinked to that project's live page on the same placeholder domain above.

## Where the content came from

The Figma MCP connector hit its rate limit partway through the first pass (Starter-plan quota,
resets monthly). You then exported the deck as a `.pptx` and sent that over, which let me read
every remaining slide directly — no rate limit on a file. Everything in `lib/projects.ts` and
`lib/experience.ts` is now sourced from the real deck, not the brief document, including:

- Hero name/stats/tagline, the About/Summary paragraph, the real skills matrix
- All three Experience entries (PUP Wired, Yuro, PUP Hygears) with real dates and descriptions,
  recreated as clean cards rather than the LinkedIn screenshots in the deck, per the brief.
  The deck's Experience section only has these three organizations — no "DBBC Engineering
  Consultancy" entry — so that stays excluded per your instruction.
- Full case-study content (Problem / Role / Key Results / Design Approach / tags) for all 8
  featured projects and full detail for all 4 secondary projects, including real numbers: FEA
  stresses and torque specs (SIDLAK II), damping/vibration figures (AEM-VTMD), pressure-loss and
  misting success rate (Body Misting), tolerance/deviation figures (Thread Finder), turbine
  geometry (Wave Generator with Wells Turbine), and more.
- The accent color: teal/emerald, matching the deck — not the blue described in the brief text.

### Three projects that weren't in the original brief

The deck's continuation slides included three complete case studies that never appeared in the
original brief document. I added them as new featured projects since they're fully documented
in the same format as everything else:

- **Beetleweight Battle Bot** — combat robotics, BLDC drivetrain, weight-driven optimization
- **Mood Coaster** — a compact folding mood-tracking coaster, hinge/cable-routing mechanism design
- **Aerosol Insecticide Dispenser** — spray-mechanism root-cause analysis and redesign

### The claw-arm FEA slide

The deck's final slide (titled "PUT IN SIMULATION AND ANALYSIS") is now in as **Boat Docking
Claw Arm**, added at the very end of `lib/projects.ts` as the last, lightest secondary project
— it's simulation-only, so it skips the Design Approach section the other projects have and
just covers Role and Results, per your instruction to keep it least-emphasized.

### Per your instructions

- **Magnetic Levitation Wind Turbine** — removed entirely (data, asset folder, manifest entry).
- **DBBC Engineering Consultancy** — stays excluded from Experience (see above).

### Still a placeholder

No contact email/phone appears anywhere in the deck or brief, so `lib/site.ts` still has a
placeholder email (`hello@louisalano.com`) in the Contact section — replace it with your real
address before shipping.

## Adding your real images

No image *files* can be extracted through the Figma MCP integration in this environment, only
visual previews — so **`ASSET_MANIFEST.md`** lists the exact file every project expects, in the
exact folder it expects it in (e.g. `public/assets/projects/sidlak-ii/hero.jpg`). Export each
image from Figma (select the layer → Export) and drop it in — nothing else needs to change.
Until a file is there, that spot renders a labeled technical-grid placeholder instead of a
broken image or a stock photo, so the site looks intentional either way.

Also drop in:
- `public/assets/hero.jpg` — the Shell Eco-marathon photo used behind your name on the homepage
- `public/resume.pdf` — wired up to the nav's "Resume" link and the hero's Resume button

## Project structure

```
app/
  layout.tsx              fonts + metadata
  page.tsx                 home page (assembles all sections)
  work/[slug]/page.tsx      project detail route
components/                 Navbar, Hero, About, ExperienceTimeline, ProjectGrid,
                             ProjectCard, SecondaryProjectCard, ProjectFilters,
                             ImageGallery, ProjectImage, DetailBlock, Contact, Footer
lib/
  types.ts                  shared TS types
  site.ts                   nav / hero / about / skills / contact copy
  experience.ts              the 3 experience entries
  projects.ts                all 13 projects (this is the file to edit for copy changes)
```

To add a project, add an entry to `lib/projects.ts` and (optionally) its images — the grid,
filters, and detail page all read from that one file.

## Notes on the build

- Categories follow the brief exactly: All / Motorsport / Robotics / Product / Analysis /
  Fabrication, and projects can carry multiple categories.
- 8 featured projects, 5 secondary — the featured grid uses a repeating bento size pattern
  (`components/ProjectCard.tsx`) so it stays visually varied no matter which category filter is
  active.
- Motion is intentionally restrained per the design brief: one orchestrated hero entrance,
  scroll-reveal once per section (not per card), and hover/press feedback that responds to the
  person's own cursor rather than firing on load.
- `next.config.mjs` sets `images.unoptimized: true` since the project images are served as
  plain static files rather than through an image CDN.
