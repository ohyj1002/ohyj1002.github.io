# Updating this site

- Edit `src/content.ts` for the name, role, institution, biography, research summary, email, academic profile links, and selected publication entries. Keep publication details and URLs aligned with the source materials.
- The About page is the root `index.html`. To add a portrait, place `profile.jpg` in `public/` and set `photo: 'profile.jpg'` in `src/content.ts`; the About page currently marks the missing portrait.
- Replace `public/cv.pdf` when updating the CV. `cvPdf: 'cv.pdf'` is already configured, and “View CV” opens the PDF in a new tab.
- The other pages have their own HTML entry files: `research/index.html`, `cv/index.html`, and `contact/index.html`. Their shared content and navigation are rendered from `src/App.tsx`.
- To build static files, run `PORT=5000 BASE_PATH=/ pnpm --filter @workspace/academic-website run build`. Output is in `artifacts/academic-website/dist/public`, including each page's own `index.html`.
- For a GitHub Pages project site, set `BASE_PATH` to `/<repository-name>/` in its build workflow; use `/` for a custom domain. Publish the contents of `artifacts/academic-website/dist/public`.
