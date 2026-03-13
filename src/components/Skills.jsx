import Reveal from "./Reveal"

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <Reveal>
          <div className="section-heading">
            <p className="section-tag">Stack</p>
            <h2 className="section-title">Tecnologías y herramientas</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="skills-icons-card">
            <img
              src="https://skillicons.dev/icons?i=js,html,css,react,vite,nodejs,express,django,mysql,mongodb,postgres,firebase,git,github"
              alt="Tecnologías principales"
            />
          </div>
        </Reveal>

        <div className="skills-grid">
          <Reveal delay={0.08}>
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React, Vite, JavaScript, HTML, CSS y diseño responsivo.</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="skill-card">
              <h3>Backend</h3>
              <p>Node.js, Express, Django, APIs REST y lógica de negocio.</p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="skill-card">
              <h3>Bases de datos</h3>
              <p>MySQL, MongoDB, PostgreSQL, Firebase y SQL Server.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="skill-card">
              <h3>Herramientas</h3>
              <p>Git, GitHub, arquitectura modular e integración de sistemas.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Skills