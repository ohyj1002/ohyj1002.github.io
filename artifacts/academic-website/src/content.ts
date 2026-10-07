/**
 * Editable source content for this site.
 * Replace [TO ADD] fields only with facts supported by the supplied CV or bio.
 */
export const profile = {
  name: 'Yoo Jung (Erika) Oh',
  role: 'Assistant Professor',
  institution: 'Department of Communication · Michigan State University',
  bioPrompt:
    'Yoo Jung (Erika) Oh is an Assistant Professor in the Department of Communication at Michigan State University. Her research spans human-AI communication and human-computer interaction, with particular attention to AI chatbots, strategic communication, health communication, public health, and health technologies. Her work examines chatbot and voice-assistant interactions, health messaging, and technology-supported health behavior. She earned a PhD in Communication with a Designated Emphasis in Computational Social Science from the University of California, Davis (2023), an MA in Journalism and Mass Communication from Korea University (2018), and a BA in English Interpretation and Translation & Japanese Area Studies from Hankuk University of Foreign Studies (2016).',
  researchPrompt:
    'Human-AI communication; human-computer interaction; artificial intelligence (AI) chatbots; strategic communication; health communication; public health; and health technologies.',
  email: 'ohyoojun@msu.edu',
  photo: null as string | null,
  cvPdf: 'cv.pdf',
  academicProfiles: [
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=kZAz0c8AAAAJ&hl=en&oi=ao',
    },
  ],
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
] as const;

export const publications: ReadonlyArray<{
  title: string;
  authors: string;
  year: string;
  url?: string;
}> = [
  {
    title: 'Profiles of technology engagement and older adults’ endorsement or resistance of stereotypes about technology and aging: A mixed method investigation.',
    authors: 'Cooper, R.A., McNamara, L., Wolfe, B. H., Oh, Y. J., Choung, H., Cui, X., & Chopik, W. J.',
    year: '(in press)',
    url: 'https://doi.org/10.1016/j.chbr.2026.101286',
  },
  {
    title: 'Boosting organ donation self-efficacy through AI-generated health messaging: the differential impacts of “why” vs. “how” messaging and media modality.',
    authors: 'Oh, Y. J.*, Park, S., & Ryu, J. Y.',
    year: '2026',
    url: 'https://doi.org/10.1080/10410236.2025.2580327',
  },
  {
    title: 'Exploring older adults’ use of AI voice assistants through the lens of self-determination theory.',
    authors: 'Choung, H., Oh, Y. J., Wolfe, B. H., Cui, X., Weinzapfel, J., & Cooper, R.A.',
    year: '2026',
    url: 'https://doi.org/10.1080/10410236.2026.2694693',
  },
];
