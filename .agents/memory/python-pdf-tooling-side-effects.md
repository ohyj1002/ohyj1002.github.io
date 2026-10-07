---
name: Python PDF tooling side effects
description: Keep one-off document inspection dependencies from changing the website runtime configuration.
---

A one-off PDF inspection in this pnpm workspace initialized a Python project, added a sample `main.py`, created a Python package environment, and changed `.replit` to add Python modules and Nix packages. These changes were unrelated to the site and were removed after the PDF was inspected.

**Why:** Leaving document-processing setup behind can alter the app's runtime and deployment configuration.

**How to apply:** After using Python tooling for one-time document inspection, review `.replit` and root-level Python files, and remove generated scaffolding that the app does not need.
