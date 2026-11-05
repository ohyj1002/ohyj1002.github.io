/**
 * Editable source content for this site.
 * Replace [TO ADD] fields only with facts supported by the supplied CV or bio.
 */
export const profile = {
  name: 'Yoo Jung (Erika) Oh',
  role: 'Assistant Professor',
  institution: 'Department of Communication · Michigan State University',
  biography:
    'Yoo Jung (Erika) Oh is an Assistant Professor in the Department of Communication at Michigan State University. Her research spans human-AI communication and human-computer interaction, with particular attention to AI chatbots, strategic communication, health communication, public health, and health technologies. Her work examines chatbot and voice-assistant interactions, health messaging, and technology-supported health behavior. She earned a PhD in Communication with a Designated Emphasis in Computational Social Science from the University of California, Davis (2023).',
  researchSummary:
    'Human-AI communication; human-computer interaction; artificial intelligence (AI) chatbots; strategic communication; health communication; public health; and health technologies.',
  email: 'ohyoojun@msu.edu',
  photo: 'images/profile.jpg',
  cvPdf: 'cv.pdf',
  academicProfiles: [
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=kZAz0c8AAAAJ&hl=en&oi=ao',
    },
  ],
} as const;

export const featuredStudy = {
  headline: 'How do people build relationships with AI chatbots?',
  label: 'Systematic review | Published 2026',
  introduction:
    'What makes a chatbot feel like a trusted or supportive communication partner? Our systematic review examines how relationships with AI chatbots develop and how those relationships help explain chatbots’ social influence.',
  facts: [
    { value: '68', label: 'Papers included' },
    { value: '78', label: 'Studies reviewed' },
    { value: '6', label: 'Databases searched' },
  ],
  findings: [
    {
      title: 'Trust and support help explain chatbot influence.',
      description:
        'Across the reviewed studies, trust and perceived social support frequently helped explain links between chatbot interactions and outcomes such as emotional responses, willingness to follow recommendations, and intentions to continue using chatbots.',
    },
    {
      title: 'How chatbots communicate deserves greater attention.',
      description:
        'Empathy and responsiveness were associated with favorable relational outcomes. However, message characteristics received less research attention than chatbot design features.',
    },
    {
      title: 'Long-term relationships remain an open question.',
      description:
        'Much of the evidence came from short-term studies. Inconsistent definitions and measures, along with limited cultural coverage, make it difficult to determine how these relationships develop and endure.',
    },
  ],
  method:
    'Following PRISMA guidelines, we searched six databases and identified 16,358 records. We synthesized findings from 68 papers reporting 78 studies, examining user characteristics, chatbot features, communication, relational outcomes, and social influence.',
  contribution:
    'We propose the Human–AI Chatbot Relationship (HAIR) Framework of Social Influence. It positions relational perceptions and behaviors as pathways connecting user, chatbot, and message characteristics to social influence outcomes.',
  frameworkExplanation:
    'Our framework proposes that characteristics of users, chatbots, and their messages shape relational perceptions and behaviors. These relational processes can help explain how chatbot interactions influence people’s perceptions and behavior.',
  limitations:
    'This review synthesizes varied findings rather than estimating a single pooled effect. Differences in study quality, measures, and interaction duration limit firm conclusions about causality and lasting relationships.',
  citation:
    'Oh, Y. J., Hu, J. M., Zhu, R., Lim, J. I., & Zhang, X. (2026). Artificial intelligence chatbots as relational agents: A systematic review of human–AI chatbot relationships. International Journal of Human–Computer Interaction.',
  paperUrl: 'https://doi.org/10.1080/10447318.2026.2648799',
  figure: {
    src: 'images/figure-1-hair-framework.png',
    alt: 'Framework linking user, message, and chatbot characteristics to relational perceptions and behaviors, followed by socially influenced perceptions and behaviors.',
    caption: 'Figure 1. Human–AI relationship framework of social influence.',
    source: 'Oh et al. (2026)',
  },
} as const;

export const navigation = [
  { label: 'About', page: 'about' },
  { label: 'Research', page: 'research' },
  { label: 'CV', page: 'cv' },
  { label: 'Contact', page: 'contact' },
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
