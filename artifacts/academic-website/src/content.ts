/**
 * Editable source content for this site.
 * Replace [TO ADD] fields only with facts supported by the supplied CV or bio.
 */
export const profile = {
  name: '[TO ADD: name]',
  role: '[TO ADD: title or position]',
  institution: '[TO ADD: department and institution]',
  bioPrompt: '[TO ADD: approximately 100-word biography]',
  researchPrompt: '[TO ADD: research interests and current work]',
  email: null as string | null,
  photo: null as string | null,
  cvPdf: null as string | null,
  academicProfiles: [] as { label: string; url: string }[],
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
] as const;

export const publications = [
  { title: '[TO ADD]', authors: '[TO ADD]', year: '[TO ADD]', url: null as string | null },
  { title: '[TO ADD]', authors: '[TO ADD]', year: '[TO ADD]', url: null as string | null },
  { title: '[TO ADD]', authors: '[TO ADD]', year: '[TO ADD]', url: null as string | null },
] as const;
