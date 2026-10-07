# Updating this site

- Edit `src/content.ts` for the name, role, institution, biography, research summary, email, and three publication entries. Replace `[TO ADD]` only with facts from the CV or other materials you provide. Add a publication URL only if it appears in those materials.
- For a portrait, add `public/profile.jpg` and set `photo: 'profile.jpg'` in `src/content.ts`. Without a photo, the page stays text-focused.
- Add your actual CV as `public/cv.pdf`, then set `cvPdf: 'cv.pdf'` in `src/content.ts`. “View CV” will open the PDF in a new tab. Until then, the page shows the missing-file notice rather than a broken link.
- Set `email` in `src/content.ts` to your public professional email; the site will display it and enable a `mailto:` link. Add verified academic profile links to `academicProfiles` only if they appear in your materials.
- To build static files, run `PORT=5000 BASE_PATH=/ pnpm --filter @workspace/academic-website run build`. Output is in `artifacts/academic-website/dist/public`.
- For a GitHub Pages project site, set `BASE_PATH` to `/<repository-name>/` in its build workflow; use `/` for a custom domain. Publish the contents of `artifacts/academic-website/dist/public`.
