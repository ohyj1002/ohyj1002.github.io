import { profile, publications, navigation } from './content';

function App() {
  const assetUrl = (path: string) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Academic profile, back to top">
            <span className="wordmark-mark" aria-hidden="true" />
            <span>Academic profile</span>
          </a>
          <nav className="primary-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className={`hero page-width${profile.photo ? ' has-portrait' : ''}`} id="top" aria-labelledby="profile-name">
          <div className="hero-copy">
            <p className="eyebrow">ACADEMIC PROFILE</p>
            <h1 id="profile-name">{profile.name}</h1>
            <p className="role-line">{profile.role}</p>
            <p className="institution-line">{profile.institution}</p>
            <div className="hero-rule" />
            <p className="hero-note">Research, writing, and scholarly work.</p>
          </div>
          {profile.photo && (
            <div className="portrait-slot">
              <img
                className="portrait-image"
                src={assetUrl(profile.photo)}
                alt={`${profile.name} portrait`}
              />
            </div>
          )}
        </section>

        <section className="content-section page-width" id="about" aria-labelledby="about-title">
          <div className="section-index">01 <span>PROFILE</span></div>
          <div className="section-body">
            <h2 id="about-title">About</h2>
            <p className="section-intro">A short introduction</p>
            <div className="editable-prompt">
              <p>{profile.bioPrompt}</p>
              <p className="helper-copy">Replace this prompt with an approximately 100-word bio based on supplied source material.</p>
            </div>
          </div>
        </section>

        <section className="content-section page-width" id="research" aria-labelledby="research-title">
          <div className="section-index">02 <span>INQUIRY</span></div>
          <div className="section-body">
            <h2 id="research-title">Research</h2>
            <p className="section-intro">Research interests and current work</p>
            <div className="editable-prompt research-prompt">
              <p>{profile.researchPrompt}</p>
              <p className="helper-copy">Add only verified themes, project descriptions, or current work here.</p>
            </div>
            <div className="publications-heading">
              <h3>Selected publications</h3>
              <span>3 entries</span>
            </div>
            <ol className="publication-list">
              {publications.map((publication, index) => (
                <li className="publication-item" key={index} data-testid={`publication-placeholder-${index + 1}`}>
                  <span className="publication-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="publication-title">
                      {publication.url ? (
                        <a href={publication.url} target="_blank" rel="noreferrer">
                          {publication.title}
                        </a>
                      ) : publication.title}
                    </p>
                    <p className="publication-meta">{publication.authors}<span aria-hidden="true"> · </span>{publication.year}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="content-section page-width" id="cv" aria-labelledby="cv-title">
          <div className="section-index">03 <span>RECORD</span></div>
          <div className="section-body">
            <h2 id="cv-title">Curriculum vitae</h2>
            <p className="section-intro">Education, appointments, and selected work</p>
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
            <p id="cv-missing-note" className="helper-copy cv-note">
              Add the supplied PDF as <code>public/cv.pdf</code>, then set <code>cvPdf: 'cv.pdf'</code> in <code>src/content.ts</code> to enable the link.
            </p>
          </div>
        </section>

        <section className="content-section contact-section page-width" id="contact" aria-labelledby="contact-title">
          <div className="section-index">04 <span>CONNECT</span></div>
          <div className="section-body">
            <h2 id="contact-title">Contact</h2>
            <p className="section-intro">For academic correspondence</p>
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
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <span>Academic profile</span>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
