# Updating this site

- Edit `src/content.ts` for the name, role, institution, biography, research summary, email, and three selected publication entries. Keep publication titles, author lists, dates, and links aligned with the CV.
- For a portrait, add `public/profile.jpg` and set `photo: 'profile.jpg'` in `src/content.ts`. Without a photo, the page stays text-focused.
- Replace `public/cv.pdf` when updating the CV. `cvPdf: 'cv.pdf'` is already configured, and “View CV” opens the PDF in a new tab.
- Set `email` in `src/content.ts` to your public professional email; the site will display it and enable a `mailto:` link. Add verified academic profile links to `academicProfiles` only if they appear in your materials.
- To build static files, run `PORT=5000 BASE_PATH=/ pnpm --filter @workspace/academic-website run build`. Output is in `artifacts/academic-website/dist/public`.
- For a GitHub Pages project site, set `BASE_PATH` to `/<repository-name>/` in its build workflow; use `/` for a custom domain. Publish the contents of `artifacts/academic-website/dist/public`.
