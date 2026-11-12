# Al Amin — Student Portfolio

A dark, editorial-style personal portfolio for Al Amin.
Curious by nature. Learning by choice.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add your portrait

Drop your photo at `public/images/portrait.jpg` (JPEG, roughly portrait orientation).
Until then the site shows an elegant placeholder frame in the hero section.

## Project structure

```
src/
├── app/            # App Router: layout, page, global styles, metadata, favicon
├── components/     # Navbar, Hero, About, Education, Skills, Contact, cursor, helpers
├── hooks/          # useActiveSection (scroll-spy)
└── lib/            # content (single source of truth) + motion presets
```

## Notes

- Fully responsive, semantic HTML, keyboard accessible.
- Animations respect `prefers-reduced-motion`; the custom cursor only runs on
  fine-pointer (desktop) devices.
