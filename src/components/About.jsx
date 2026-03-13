import Reveal from "./Reveal"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <Reveal>
          <div className="section-heading">
            <p className="section-tag">Acerca de mí</p>
            <h2 className="section-title">Perfil profesional</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.05}>
            <div className="about-card about-main">
              <h3>Desarrollador Full Stack orientado a soluciones reales</h3>

              <p>
                Soy Técnico Universitario en Programación y me enfoco en construir
                aplicaciones web completas, integrando frontend, backend y bases
                de datos para resolver problemas concretos en negocios y
                organizaciones.
              </p>

              <p>
                Mi perfil está orientado al desarrollo de ecommerce, sistemas de
                gestión, paneles administrativos y automatización de procesos,
                buscando siempre una arquitectura clara, escalable y mantenible.
              </p>

              <p>
                Me interesa crear software útil, bien estructurado y pensado para
                generar impacto real en el trabajo diario de quienes lo utilizan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="about-card">
              <h3>Enfoque</h3>
              <ul>
                <li>Sistemas web y software de gestión</li>
                <li>Ecommerce y plataformas administrativas</li>
                <li>Backend con APIs REST</li>
                <li>Integración con bases de datos SQL y NoSQL</li>
                <li>Interfaces modernas y responsivas</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="about-card">
              <h3>Objetivo</h3>
              <p>
                Seguir creciendo como desarrollador, participando en proyectos
                donde pueda aportar valor con soluciones sólidas, mejorar procesos
                y construir productos de calidad profesional.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About