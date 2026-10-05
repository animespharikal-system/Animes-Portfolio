import Icon from "./components/Icon.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import {
  journey,
  learningTopics,
  profileLinks,
  projects,
  skillGroups,
} from "./data.js";

function SocialLink({ href, icon, label }) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      <Icon name={icon} size={17} />
      <span>{label}</span>
      <Icon className="social-external" name="external" size={13} />
    </a>
  );
}

function HeroArtwork() {
  return (
    <div aria-hidden="true" className="hero-art">
      <div className="hero-art-grid" />
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-orbit orbit-three" />
      <span className="hero-orbit-point point-one" />
      <span className="hero-orbit-point point-two" />
      <div className="hero-code-card">
        <div className="hero-code-head">
          <span>BUILDING / LEARNING</span>
          <span className="live-dot" />
        </div>
        <div className="hero-code-lines">
          <span><i>01</i><b className="code-blue">const</b> focus = <b className="code-purple">"AI"</b>;</span>
          <span><i>02</i><b className="code-blue">while</b> (curious) {"{"}</span>
          <span><i>03</i><em>  buildUsefulThings();</em></span>
          <span><i>04</i>{"}"}</span>
        </div>
        <div className="hero-code-foot">
          <span>PERSONAL PRACTICE</span>
          <span>01 — 04</span>
        </div>
      </div>
      <span className="orbit-caption caption-top">IDEAS → SOFTWARE</span>
      <span className="orbit-caption caption-bottom">ALWAYS IN PROGRESS</span>
    </div>
  );
}

function AboutVisual() {
  return (
    <aside aria-label="A note on how I build" className="about-note">
      <span className="about-note-number">A / 01</span>
      <p className="about-note-quote">
        Start with the problem. Build toward what helps.
      </p>
      <span className="about-note-rule" />
      <span className="about-note-caption">BUILDING MINDSET</span>
    </aside>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section aria-labelledby="hero-title" className="hero section-shell" id="home">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="eyebrow-line" />
                ENGINEERING · AI · PRODUCT
              </p>
              <h1 id="hero-title">
                Hi, I&apos;m
                <br />
                <span>Animes Pharikal.</span>
              </h1>
              <p className="hero-role">
                <span>Engineering Student</span>
                <span aria-hidden="true" className="role-divider">|</span>
                <span>Aspiring AI Engineer</span>
                <span aria-hidden="true" className="role-divider">|</span>
                <span>Full-Stack Developer</span>
              </p>
              <p className="hero-intro">
                I&apos;m learning to build practical software that solves real
                problems—and exploring where thoughtful AI can make it more useful.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore My Projects
                  <Icon name="arrow" size={17} />
                </a>
                <a className="button button-secondary" href="#contact">
                  Let&apos;s Connect
                </a>
              </div>
              <div aria-label="Social profiles" className="social-links">
                <SocialLink
                  href={profileLinks.github}
                  icon="github"
                  label="GitHub"
                />
                <SocialLink
                  href={profileLinks.linkedin}
                  icon="linkedin"
                  label="LinkedIn"
                />
              </div>
            </div>
            <HeroArtwork />
          </div>
          <div className="container hero-bottomline">
            <span>ENGINEERING STUDENT</span>
            <a href="#about">
              A LITTLE ABOUT ME <span aria-hidden="true">↓</span>
            </a>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </section>

        <section aria-labelledby="about-title" className="content-section" id="about">
          <div className="container">
            <SectionHeading
              description="Curiosity is my starting point. Building is how I make sense of what I learn."
              eyebrow="01 / A LITTLE CONTEXT"
              id="about-title"
              title="About me"
            />
            <div className="about-layout">
              <div className="about-copy">
                <p className="about-lead">
                  I&apos;m an engineering student drawn to the space between
                  <span> software, people, and useful ideas.</span>
                </p>
                <p>
                  I enjoy turning a real-world problem into something people can
                  use—from a clearer way to understand the voting process to
                  experiments with AI-powered applications. I&apos;m building my
                  full-stack foundations while learning how AI, cloud
                  technologies, and thoughtful product decisions fit together.
                </p>
                <p>
                  My long-term goal is to become an AI engineer and build
                  technology products that are practical, understandable, and
                  worth using.
                </p>
              </div>
              <AboutVisual />
            </div>
          </div>
        </section>

        <section aria-labelledby="skills-title" className="content-section skills-section" id="skills">
          <div className="container">
            <SectionHeading
              description="A working toolkit drawn from my public profile and project documentation. These are not proficiency ratings."
              eyebrow="02 / WHAT I WORK WITH"
              id="skills-title"
              title="Skills &amp; tools"
            />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-heading">
                    <span>{group.index}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="learning-row">
              <div className="learning-heading">
                <span className="learning-status"><i /> IN PROGRESS</span>
                <h3>Currently exploring</h3>
                <p>Topics I&apos;m actively learning, not claiming as mastery.</p>
              </div>
              <ul className="learning-topics">
                {learningTopics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="projects-title" className="content-section projects-section" id="projects">
          <div className="container">
            <SectionHeading
              description="A few documented projects exploring civic information, applied AI, and useful product concepts."
              eyebrow="03 / SELECTED WORK"
              id="projects-title"
              title="Projects"
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
            <a
              className="all-projects-link"
              href={profileLinks.github}
              rel="noreferrer"
              target="_blank"
            >
              See my public work on GitHub
              <Icon name="arrow" size={16} />
            </a>
          </div>
        </section>

        <section aria-labelledby="journey-title" className="content-section journey-section" id="journey">
          <div className="container">
            <SectionHeading
              description="A work in progress—grounded in engineering studies and guided by the things I want to build."
              eyebrow="04 / LEARNING AS I GO"
              id="journey-title"
              title="Journey"
            />
            <div className="journey-layout">
              <p className="journey-intro">
                There&apos;s no straight line into AI engineering. I&apos;m
                focused on strong fundamentals, learning through projects, and
                staying curious about what comes next.
              </p>
              <ol className="journey-list">
                {journey.map((item, index) => (
                  <li className="journey-item" key={item.title}>
                    <span aria-hidden="true" className="journey-index">
                      0{index + 1}
                    </span>
                    <div className="journey-marker">{item.marker}</div>
                    <div className="journey-copy">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <span aria-hidden="true" className="journey-plus">+</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="contact-section" id="contact">
          <div className="container contact-panel">
            <div className="contact-orbit" aria-hidden="true" />
            <p className="eyebrow">05 / OPEN TO GOOD CONVERSATIONS</p>
            <h2 id="contact-title">
              Let&apos;s make
              <br />
              <span>something useful.</span>
            </h2>
            <p className="contact-copy">
              Interested in AI, thoughtful software, or building in the open?
              Find me on GitHub or LinkedIn.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={profileLinks.github}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="github" size={17} />
                Connect on GitHub
                <Icon name="external" size={14} />
              </a>
              <a
                className="button button-secondary"
                href={profileLinks.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="linkedin" size={17} />
                Connect on LinkedIn
                <Icon name="external" size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#home">
            <span className="brand-mark">AP</span>
            <span>Animes Pharikal</span>
          </a>
          <span className="footer-copyright">
            © {new Date().getFullYear()} Animes Pharikal
          </span>
          <div className="footer-social">
            <a href={profileLinks.github} rel="noreferrer" target="_blank">
              GitHub <Icon name="external" size={12} />
            </a>
            <a href={profileLinks.linkedin} rel="noreferrer" target="_blank">
              LinkedIn <Icon name="external" size={12} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
