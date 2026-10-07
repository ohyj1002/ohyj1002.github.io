import type { ReactNode } from 'react';

import { featuredStudy, navigation, profile, publications } from './content';

type SitePage = 'about' | 'research' | 'cv' | 'contact';

const currentPage = (document.documentElement.dataset.page ?? 'about') as SitePage;
const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

function pageUrl(page: SitePage) {
  return page === 'about' ? basePath : `${basePath}${page}/`;
}

function assetUrl(path: string) {
  return `${basePath}${path.replace(/^\/+/, '')}`;
}

function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href={pageUrl('about')} aria-label={`${profile.name}, About`}>
            <span className="wordmark-mark" aria-hidden="true" />
            <span>{profile.name}</span>
          </a>
          <nav className="primary-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.page}
                href={pageUrl(item.page)}
                aria-current={currentPage === item.page ? 'page' : undefined}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="page-main">{children}</main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="footer-name" href={pageUrl('about')}>{profile.name}</a>
          <span>Academic profile</span>
        </div>
      </footer>
    </div>
  );
}

function AboutPage() {
  return (
    <section className="hero has-portrait page-width" aria-labelledby="profile-name">
      <div className="hero-copy">
        <p className="eyebrow">ABOUT</p>
        <h1 id="profile-name">
          <a className="name-home-link" href={pageUrl('about')}>{profile.name}</a>
        </h1>
        <p className="role-line">{profile.role}</p>
        <p className="institution-line">{profile.institution}</p>
        <div className="hero-rule" aria-hidden="true" />
        <p className="about-bio">{profile.biography}</p>
      </div>
      <figure className="portrait-slot">
        {profile.photo ? (
          <img
            className="portrait-image"
            src={assetUrl(profile.photo)}
            alt={`${profile.name} portrait`}
          />
        ) : (
          <figcaption className="portrait-placeholder">
            <span className="portrait-placeholder-mark" aria-hidden="true">PHOTO</span>
            <span>[TO ADD: portrait photograph]</span>
          </figcaption>
        )}
      </figure>
    </section>
  );
}

function ContentPage({
  index,
  label,
  title,
  intro,
  pageClassName,
  children,
}: {
  index: string;
  label: string;
  title: string;
  intro: string;
  pageClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`content-section page-content page-width ${pageClassName ?? ''}`}
      aria-labelledby="page-title"
    >
      <div className="section-index">{index} <span>{label}</span></div>
      <div className="section-body">
        <h1 id="page-title">{title}</h1>
        <p className="section-intro">{intro}</p>
        {children}
      </div>
    </section>
  );
}

function FeaturedStudyPanel() {
  return (
    <article className="featured-study" aria-labelledby="featured-study-title">
      <header className="featured-study-header">
        <p className="featured-study-label">{featuredStudy.label}</p>
        <h2 id="featured-study-title" className="featured-study-title">{featuredStudy.headline}</h2>
        <p className="featured-study-intro">{featuredStudy.introduction}</p>
        <div className="study-facts" aria-label="Study facts">
          {featuredStudy.facts.map((fact) => (
            <dl className="study-fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </dl>
          ))}
        </div>
      </header>

      <div className="featured-study-content">
        <section className="study-framework-section" aria-labelledby="study-framework-title">
          <p className="study-framework-type">Conceptual framework</p>
          <h3 id="study-framework-title" className="study-section-title">Our research framework</h3>
          <figure className="study-framework">
            <img
              src={assetUrl(featuredStudy.figure.src)}
              alt={featuredStudy.figure.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              {featuredStudy.figure.caption} Source:{' '}
              <a href={featuredStudy.paperUrl} target="_blank" rel="noreferrer">
                {featuredStudy.figure.source}
              </a>.
            </figcaption>
          </figure>
          <p className="study-framework-explanation">{featuredStudy.frameworkExplanation}</p>
          <a
            className="study-figure-fullsize"
            href={assetUrl(featuredStudy.figure.src)}
            target="_blank"
            rel="noreferrer"
            data-testid="study-framework-full-size"
          >
            View full-size figure <span aria-hidden="true">↗</span>
          </a>
        </section>

        <h3 className="study-section-title">Key findings</h3>
        <ol className="study-findings">
          {featuredStudy.findings.map((finding) => (
            <li className="study-finding" key={finding.title}>
              <h4>{finding.title}</h4>
              <p>{finding.description}</p>
            </li>
          ))}
        </ol>

        <details className="study-details" data-testid="study-details">
          <summary>Read study details</summary>
          <div className="study-details-content">
            <section className="study-detail-section">
              <h3>What we did</h3>
              <p>{featuredStudy.method}</p>
            </section>
            <section className="study-detail-section">
              <h3>What this contributes</h3>
              <p>{featuredStudy.contribution}</p>
            </section>
            <section className="study-detail-section">
              <h3>Limitations</h3>
              <p>{featuredStudy.limitations}</p>
            </section>
            <p className="study-citation"><cite>{featuredStudy.citation}</cite></p>
            <a
              className="study-paper-link"
              href={featuredStudy.paperUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="study-paper-link"
            >
              Read the paper <span aria-hidden="true">↗</span>
            </a>
          </div>
        </details>
      </div>
    </article>
  );
}

function ResearchPage() {
  return (
    <ContentPage
      index="02"
      label="INQUIRY"
      title="Research"
      intro="Research interests and selected publications"
      pageClassName="research-content"
    >
      <FeaturedStudyPanel />
      <div className="editable-prompt research-prompt">
        <p>{profile.researchSummary}</p>
      </div>
      <div className="publications-heading">
        <h2>Selected publications</h2>
        <span>{publications.length} entries</span>
      </div>
      <ol className="publication-list">
        {publications.map((publication, index) => (
          <li className="publication-item" key={publication.title} data-testid={`publication-${index + 1}`}>
            <span className="publication-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className="publication-title">
                {publication.url ? (
                  <a href={publication.url} target="_blank" rel="noreferrer">
                    {publication.title}
                  </a>
                ) : publication.title}
              </p>
              <p className="publication-meta">
                {publication.authors}<span aria-hidden="true"> · </span>{publication.year}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </ContentPage>
  );
}

function CvPage() {
  return (
    <ContentPage
      index="03"
      label="RECORD"
      title="Curriculum vitae"
      intro="Education, appointments, and selected work"
    >
      {profile.cvPdf ? (
        <a
          className="cv-placeholder cv-link"
          href={assetUrl(profile.cvPdf)}
          target="_blank"
          rel="noreferrer"
          aria-label="View CV PDF in a new tab"
        >
          <span className="document-mark" aria-hidden="true"><span>PDF</span></span>
          <span className="cv-link-copy">
            <span className="cv-label">View CV</span>
            <span className="missing-value">Open curriculum vitae (PDF)</span>
          </span>
          <span className="cv-state">PDF</span>
        </a>
      ) : (
        <div className="cv-placeholder" aria-describedby="cv-missing-note">
          <span className="document-mark" aria-hidden="true"><span>PDF</span></span>
          <span className="cv-missing-copy">
            <span className="cv-label">View CV</span>
            <span className="missing-value">[TO ADD: attach CV PDF]</span>
          </span>
          <span className="cv-state">Not yet available</span>
        </div>
      )}
      {!profile.cvPdf && (
        <p id="cv-missing-note" className="helper-copy cv-note">
          Add the supplied PDF as <code>public/cv.pdf</code>, then set <code>cvPdf: 'cv.pdf'</code> in <code>src/content.ts</code> to enable the link.
        </p>
      )}
    </ContentPage>
  );
}

function ContactPage() {
  return (
    <ContentPage
      index="04"
      label="CONNECT"
      title="Contact"
      intro="For academic correspondence"
    >
      <div className="contact-row">
        <span className="contact-label">Email</span>
        {profile.email ? (
          <a className="contact-value" href={`mailto:${profile.email}`}>{profile.email}</a>
        ) : (
          <span className="contact-value">[TO ADD: professional email]</span>
        )}
      </div>
      <div className="contact-row">
        <span className="contact-label">Profiles</span>
        {profile.academicProfiles.length > 0 ? (
          <ul className="profile-link-list">
            {profile.academicProfiles.map((item) => (
              <li key={item.url}>
                <a href={item.url} target="_blank" rel="noreferrer">{item.label}</a>
              </li>
            ))}
          </ul>
        ) : (
          <span className="contact-value">[TO ADD: academic profile links, if any]</span>
        )}
      </div>
    </ContentPage>
  );
}

function App() {
  const pages: Record<SitePage, ReactNode> = {
    about: <AboutPage />,
    research: <ResearchPage />,
    cv: <CvPage />,
    contact: <ContactPage />,
  };

  return <SiteLayout>{pages[currentPage] ?? pages.about}</SiteLayout>;
}

export default App;
