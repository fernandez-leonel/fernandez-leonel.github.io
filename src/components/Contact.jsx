import Reveal from "./Reveal"

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <Reveal>
          <div className="section-heading">
            <p className="section-tag">Contacto</p>
            <h2 className="section-title">Trabajemos juntos</h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="contact-card pro-contact-card">
            <div className="contact-intro">
              <h3>Estoy abierto a nuevas oportunidades y proyectos</h3>

              <p className="contact-text">
                Si querés contactarme por una oportunidad profesional, colaboración
                o proyecto, podés escribirme por cualquiera de estos medios.
              </p>
            </div>

            <div className="contact-grid">
              <a href="mailto:leeoofernandez54@gmail.com" className="contact-box">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>leeoofernandez54@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/leonel-fernandez-951b083a1/"
                target="_blank"
                rel="noreferrer"
                className="contact-box"
              >
                <div className="contact-icon">in</div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Ver perfil profesional</p>
                </div>
              </a>

              <a
                href="https://github.com/fernandez-leonel"
                target="_blank"
                rel="noreferrer"
                className="contact-box"
              >
                <div className="contact-icon">GH</div>
                <div>
                  <h4>GitHub</h4>
                  <p>Ver repositorios y proyectos</p>
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact