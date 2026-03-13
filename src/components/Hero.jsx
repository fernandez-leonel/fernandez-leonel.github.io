import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-tag">Hola, soy</p>

          <h1 className="hero-title">Leonel Fernandez</h1>

          <h2 className="hero-subtitle">
            Técnico Universitario en Programación · Desarrollador Full Stack
          </h2>

          <p className="hero-location">📍 Corrientes, Argentina</p>

          <p className="hero-description">
            Desarrollo aplicaciones web orientadas a ecommerce, sistemas de gestión
            y automatización de procesos de negocio, integrando frontend, backend
            y bases de datos para resolver problemas reales.
          </p>

          <div className="hero-socials">
            <a
              href="mailto:leeoofernandez54@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ✉
            </a>

            <a
              href="https://www.linkedin.com/in/leonel-fernandez-951b083a1/"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>

            <a
              href="https://github.com/fernandez-leonel"
              target="_blank"
              rel="noreferrer"
            >
              GH
            </a>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn hero-main-btn">
              Ver proyectos
            </a>

            <a href="#contact" className="secondary-btn hero-secondary-btn">
              Contactarme
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <h3>Interfaz</h3>
              <p>React, Vite, interfaces modernas y responsivas</p>
            </div>

            <div className="stat-box">
              <h3>Backend</h3>
              <p>Node.js, Express, Django y APIs REST</p>
            </div>

            <div className="stat-box">
              <h3>Base de datos</h3>
              <p>MySQL, MongoDB, PostgreSQL, Firebase y SQL Server</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <div className="hero-image-bg"></div>

          <img
            src="/images/perfil.png"
            alt="Foto de Leonel Fernandez"
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero