import Reveal from "./Reveal"

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">

        <Reveal>
          <h2 className="section-title">Antecedentes académicos</h2>
        </Reveal>

        <div className="education-timeline">

          <Reveal>
            <div className="education-item">
              <span className="education-year">2026</span>

              <h3>Graduación</h3>

              <p>
                <strong>Técnico Universitario en Programación</strong><br/>
                Universidad Tecnológica Nacional – Facultad Regional Resistencia
              </p>

              <p>
                Formación orientada al desarrollo de software, arquitectura de sistemas,
                backend, bases de datos y buenas prácticas de ingeniería.
              </p>

              <p>
                Promedio general: <strong>7.7 / 10</strong>
              </p>

              <p>
                Actualmente busco mi primera oportunidad profesional en desarrollo
                de software para integrarme a equipos de trabajo y seguir creciendo
                profesionalmente.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="education-item">
              <span className="education-year">2025</span>

              <h3>Segundo año | Formación técnica avanzada</h3>

              <p>
                Especialización en desarrollo backend y arquitectura de software,
                aplicando prácticas profesionales y herramientas modernas.
              </p>

              <ul>
                <li>Desarrollo de API REST con .NET y C#</li>
                <li>Programación avanzada orientada a objetos</li>
                <li>Patrones de diseño y arquitectura en capas</li>
                <li>Manejo de transacciones y persistencia de datos</li>
                <li>Buenas prácticas de código y Entity Framework</li>
              </ul>

              <p>
                Promedio del año: <strong>8 / 10</strong>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="education-item">
              <span className="education-year">2024</span>

              <h3>Primer año | Fundamentos de programación</h3>

              <p>
                Introducción al desarrollo de software dentro de la carrera Técnico
                Universitario en Programación.
              </p>

              <ul>
                <li>Desarrollo de aplicaciones con Java</li>
                <li>Programación orientada a objetos</li>
                <li>Modelado y diseño de bases de datos</li>
                <li>Consultas SQL y procedimientos almacenados</li>
              </ul>

              <p>
                Tecnologías: MySQL · SQL Server
              </p>

              <p>
                Promedio del año: <strong>7.38 / 10</strong>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="education-item">
              <span className="education-year">2023 — 2024</span>

              <h3>Preparación universitaria</h3>

              <p>
                Preparación intensiva para el ingreso universitario,
                fortaleciendo la lógica computacional, algoritmos y
                fundamentos de programación.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default Education