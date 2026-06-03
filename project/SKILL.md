---
name: ruwanwelisaya-design
description: Use this skill to generate well-branded interfaces and assets for Ruwanwelisaya — the digital sanctuary for the Great Stupa of Anuradhapura, Sri Lanka. Contains essential design guidelines, colours, type, fonts, brand marks, and a UI kit for building reverent, devotional Buddhist heritage content surfaces — production code or throwaway prototypes/mocks.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — all design tokens as CSS custom properties and ready-to-use semantic type classes.
- `assets/` — original SVG marks (stupa, lotus, dharma wheel, oil lamp) for use as brand marks, dividers, and ornaments.
- `preview/` — small reference cards showing the system in use (colours, type, components, motion).
- `ui_kits/website/` — JSX components covering hero, navbar, footer, content cards, daily quote, lamp offering, forum post. Start here when building a new page.

If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy assets out of `assets/` and reference them via relative paths in self-contained HTML files. Lean on Cinzel (serif) for headings, Inter (sans) for body, and the gold/cream/grey palette only — no purples, teals, or saturated colour. Generous whitespace, slow `easeOut` fades, gold-tinted hover shadows. ALL-CAPS wide-tracked wordmarks; sentence-case body.

If working on **production code**, copy `colors_and_type.css` and the JSX components from `ui_kits/website/` into the target project. The tokens map cleanly to a Tailwind v4 `@theme` block — see the source repo at https://github.com/LasaKaru/ruwanwelisaya-web for one working example.

If the user invokes this skill without any other guidance, ask them what they want to build or design — a new page, a redesign, a specific component, a deck about the site? Ask whether they want to match the existing site's vocabulary faithfully or want a more contemporary redesign (the UI kit here proposes a refinement; the README documents the existing system). Then act as an expert designer who outputs HTML artifacts or production code, depending on the need.

**Tone reminder.** This is sacred-heritage content. Avoid anything that reads as e-commerce, SaaS, or dashboard. Use Pali / Sinhala terms freely (Poya, Vesak, Sadhu, stupa, dagoba) without italics. Emoji only as cultural punctuation (✿ 🙏), never as decorative filler. One thousand no's for every yes.
