import React, { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  Code2, Download, ExternalLink, Github, Linkedin, Mail, MapPin,
  Menu, Phone, Send, Server, Sparkles, X, Database, Globe
} from "lucide-react";

const skills = [
  { name: "Core Java", group: "Backend", icon: Code2 },
  { name: "SQL", group: "Database", icon: Database },
  { name: "HTML5", group: "Frontend", icon: Globe },
  { name: "CSS3", group: "Frontend", icon: Globe },
  { name: "JavaScript", group: "Frontend", icon: Code2 },
  { name: "ReactJS", group: "Frontend", icon: Code2 },
  { name: "JDBC", group: "Backend", icon: Database },
  { name: "Servlets", group: "Backend", icon: Server },
  { name: "Hibernate", group: "Backend", icon: Database },
  { name: "Spring Boot", group: "Backend", icon: Server },
];

const projects = [
  {
    number: "01",
    title: "Drive Fuel Hub",
    subtitle: "Smart Car Rental & Fuel Integration",
    description:
      "A travel-support platform concept combining car rental and fuel assistance in one experience. Designed to make trip planning easier, with a focus on convenient vehicle access and support when issues arise on the road.",
    tags: ["Java", "Servlets", "JDBC", "SQL", "HTML", "CSS", "JavaScript"],
    type: "Full Stack Web Application",
    accent: "violet",
  },
  {
    number: "02",
    title: "Enterprise Helpdesk",
    subtitle: "Incident Management System",
    description:
      "A helpdesk application concept for organizing support requests and incident workflows. Built around clear issue tracking, structured records, and a maintainable foundation for enterprise support teams.",
    tags: ["Java", "Spring Boot", "ReactJS", "SQL", "REST APIs"],
    type: "Enterprise Application",
    accent: "blue",
  },
];

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title} <span>{highlight}</span></h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("padwalashwinkumar@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:padwalashwinkumar@gmail.com";
    }
  };

  const resumePath = "/resume.pdf";

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Ashwin home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">ashwin<span>dev</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" /> Open to opportunities</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Padwal Ashwin<br /><span>Kumar.</span></h1>
            <h2 className="hero-role">Java Full Stack <span>Developer</span></h2>
            <p className="hero-description">
              I build thoughtful web experiences and reliable backend applications,
              bringing together Java, databases, and modern frontend technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href={resumePath} download>
                <Download size={16} /> Download resume
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/ashwinpadwal" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/ashwin-kumar-padwal/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:padwalashwinkumar@gmail.com" aria-label="Email"><Mail size={18} /></a>
              <span className="social-divider" />
              <span className="social-caption">Connect with me</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="portrait-card">
              <div className="portrait-topline"><span>PROFILE / 2026</span><span className="live-indicator">AVAILABLE</span></div>
              <div className="portrait-placeholder">
                <div className="portrait-orbit orbit-one" />
                <div className="portrait-orbit orbit-two" />
                <div className="avatar-shape">
                  <div className="avatar-head" />
                  <div className="avatar-neck" />
                  <div className="avatar-body" />
                </div>
                <span className="portrait-initial">AK</span>
                <span className="portrait-label">ADD YOUR PHOTO</span>
              </div>
              <div className="portrait-info">
                <div>
                  <h3>Ashwin Kumar</h3>
                  <p>Java Full Stack Developer</p>
                </div>
                <span className="portrait-code"><Code2 size={20} /></span>
              </div>
            </div>
            <div className="floating-chip chip-java"><span className="chip-symbol">☕</span><span>Java</span></div>
            <div className="floating-chip chip-react"><Code2 size={16} /><span>ReactJS</span></div>
            <div className="floating-chip chip-sql"><Database size={16} /><span>SQL</span></div>
            <div className="hero-orb" />
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> Scroll to explore <ArrowDown size={14} /></a>
        </section>

        <section className="stats-strip section-wrap" aria-label="Profile summary">
          <div className="stat-item"><span className="stat-number">2026</span><span className="stat-label">Graduate</span></div>
          <div className="stat-item"><span className="stat-number">10<span className="stat-plus">+</span></span><span className="stat-label">Core technologies</span></div>
          <div className="stat-item"><span className="stat-number">02</span><span className="stat-label">Featured projects</span></div>
          <div className="stat-item"><span className="stat-number"><MapPin size={19} /></span><span className="stat-label">Hyderabad, India</span></div>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Building with purpose," highlight="learning every day." />
          <div className="about-grid">
            <div className="about-main">
              <div className="about-icon"><Sparkles size={22} /></div>
              <h3>Turning ideas into useful applications.</h3>
              <p>
                I'm a Computer Science and Engineering graduate from Bharath University,
                Chennai, focused on starting my career as a Java Full Stack Developer.
                I enjoy understanding how applications work end to end—from building
                user interfaces to connecting backend logic with databases.
              </p>
              <p>
                I'm continuing to strengthen my skills in Java, SQL, and web development
                while building practical projects and improving my problem-solving ability.
              </p>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-details">
              <div className="detail-card">
                <span className="detail-icon"><BriefcaseBusiness size={18} /></span>
                <div><span className="detail-label">CAREER FOCUS</span><strong>Java Full Stack Developer</strong><p>Entry-level opportunities</p></div>
              </div>
              <div className="detail-card">
                <span className="detail-icon"><Globe size={18} /></span>
                <div><span className="detail-label">EDUCATION</span><strong>B.Tech — Computer Science</strong><p>Bharath University, Chennai · 2026</p></div>
              </div>
              <div className="detail-card">
                <span className="detail-icon"><MapPin size={18} /></span>
                <div><span className="detail-label">BASED IN</span><strong>Hyderabad, Telangana</strong><p>Open to suitable opportunities</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap content-section">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="Technologies I"
              highlight="work with."
              description="A growing toolkit for building full-stack applications, from the interface to the database."
            />
            <div className="skill-groups">
              <div className="skill-group-label"><span className="group-line" /> BACKEND & DATABASE</div>
              <div className="skills-grid">
                {skills.filter((skill) => ["Backend", "Database"].includes(skill.group)).map(({ name, icon: Icon }) => (
                  <div className="skill-card" key={name}><span className="skill-icon"><Icon size={20} /></span><span>{name}</span><ArrowUpRight className="skill-arrow" size={15} /></div>
                ))}
              </div>
              <div className="skill-group-label"><span className="group-line" /> FRONTEND</div>
              <div className="skills-grid">
                {skills.filter((skill) => skill.group === "Frontend").map(({ name, icon: Icon }) => (
                  <div className="skill-card" key={name}><span className="skill-icon"><Icon size={20} /></span><span>{name}</span><ArrowUpRight className="skill-arrow" size={15} /></div>
                ))}
              </div>
            </div>
            <p className="skills-note"><span className="note-dot" /> Always learning, always improving.</p>
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects that"
            highlight="solve problems."
            description="Practical application concepts that reflect my interest in full-stack development and real-world workflows."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
                <div className="project-illustration">
                  {project.number === "01" ? (
                    <div className="illustration-window">
                      <div className="window-dots"><i /><i /><i /></div>
                      <div className="car-scene"><div className="road-line" /><div className="car-body"><span /><span /></div><div className="fuel-pin"><span>↗</span></div></div>
                      <div className="mini-ui"><span /><span /><span /></div>
                    </div>
                  ) : (
                    <div className="illustration-window helpdesk-window">
                      <div className="window-dots"><i /><i /><i /></div>
                      <div className="ticket-row"><span className="ticket-icon">#</span><div><b>Incident #1042</b><small>Login issue</small></div><em>Open</em></div>
                      <div className="ticket-row"><span className="ticket-icon ticket-icon-alt">✓</span><div><b>Incident #1038</b><small>Access request</small></div><em className="resolved">Resolved</em></div>
                      <div className="ticket-bars"><i /><i /><i /></div>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-footer"><span><Code2 size={15} /> Full-stack project</span><span className="project-status">Featured</span></div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-disclaimer">Project descriptions and technology tags can be updated to match your exact implementation before publishing.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <span className="eyebrow"><span className="eyebrow-dot" /> LET'S CONNECT</span>
              <h2>Have an opportunity?<br /><span>Let's build something.</span></h2>
              <p>I'm interested in entry-level Java Full Stack Developer roles and opportunities to grow with a collaborative engineering team.</p>
              <a className="button button-primary" href="mailto:padwalashwinkumar@gmail.com">Send me an email <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-list">
              <a className="contact-item" href="mailto:padwalashwinkumar@gmail.com"><span className="contact-icon"><Mail size={19} /></span><span><small>EMAIL ME</small><strong>padwalashwinkumar@gmail.com</strong></span><ArrowUpRight size={17} /></a>
              <a className="contact-item" href="tel:+917671053521"><span className="contact-icon"><Phone size={19} /></span><span><small>CALL ME</small><strong>+91 76710 53521</strong></span><ArrowUpRight size={17} /></a>
              <a className="contact-item" href="https://github.com/ashwinpadwal" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={19} /></span><span><small>GITHUB</small><strong>github.com/ashwinpadwal</strong></span><ArrowUpRight size={17} /></a>
              <a className="contact-item" href="https://www.linkedin.com/in/ashwin-kumar-padwal/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={19} /></span><span><small>LINKEDIN</small><strong>ashwin-kumar-padwal</strong></span><ArrowUpRight size={17} /></a>
              <button className="copy-email" onClick={copyEmail}>{copied ? <Check size={15} /> : <Mail size={15} />}{copied ? "Email copied" : "Copy email address"}</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#home" className="brand footer-brand"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ashwin<span>dev</span></span></a>
        <p>Designed & built with ReactJS <span>♥</span></p>
        <a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a>
        <small className="copyright">© {new Date().getFullYear()} Padwal Ashwin Kumar. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;