import { motion } from "framer-motion"
import BackgroundFX from "./BackgroundFX"

function Hero() {
  return (
    <section className="hero">
      <BackgroundFX />

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            className="hero-tag"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            Hola, soy
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            Leonel Fernandez
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            Técnico Universitario en Programación · Desarrollador Full Stack
          </motion.h2>

          <motion.p
            className="hero-location"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
          >
            📍 Corrientes, Argentina
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            Desarrollo aplicaciones web orientadas a ecommerce, sistemas de
            gestión y automatización de procesos de negocio, integrando
            frontend, backend y bases de datos para resolver problemas reales.
          </motion.p>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.62 }}
          >
            <a
              href="mailto:leeoofernandez54@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ✉
            </a>

            <a
              href="https://www.linkedin.com/in/fernandez-leonel/"
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
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.74 }}
          >
            <a href="#projects" className="primary-btn hero-main-btn">
              Ver proyectos
            </a>

            <a href="#contact" className="secondary-btn hero-secondary-btn">
              Contactarme
            </a>

            <a
              href="Fernandez-Leonel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn hero-secondary-btn hero-cv-btn"
            >
              <span>Descargar CV</span>
              <span className="download-icon">↓</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.86 }}
          >
            <div className="stat-box">
              <h3>Interfaz</h3>
              <p>React, Vite, interfaces modernas y responsivas</p>
            </div>

            <div className="stat-box">
              <h3>Backend</h3>
              <p>Node.js, Express, .NET y APIs REST</p>
            </div>

            <div className="stat-box">
              <h3>Base de datos</h3>
              <p>MySQL, MongoDB, PostgreSQL, Firebase y SQL Server</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 70, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.18 }}
        >
          <div className="hero-image-bg"></div>
          <div className="hero-image-ring"></div>

          <motion.img
            src="/images/perfil.png"
            alt="Foto de Leonel Fernandez"
            className="hero-image"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero