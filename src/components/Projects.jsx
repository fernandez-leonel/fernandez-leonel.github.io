import { useState } from "react"
import Reveal from "./Reveal"

function ProjectShowcase({
  title,
  badge,
  description1,
  description2,
  techs,
  repoLink,
  images,
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const openModal = (index) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const prevModalImage = () => {
    setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextModalImage = () => {
    setModalIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="project-card">
        <div className="project-content enhanced-project-layout">
          <div className="project-text">
            <span className="project-badge">{badge}</span>

            <h3>{title}</h3>

            <p>{description1}</p>
            <p>{description2}</p>

            <div className="project-tech">
              {techs.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                Ver repositorio
              </a>
            </div>
          </div>

          <div className="project-gallery-wrapper">
            <button
              type="button"
              className="project-main-image-card"
              onClick={() => openModal(activeIndex)}
            >
              <img
                src={images[activeIndex]}
                alt={`${title} captura principal`}
                className="project-main-image"
              />
            </button>

            <div className="project-thumbnails">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`project-thumbnail ${
                    activeIndex === index ? "active-thumb" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={img} alt={`Miniatura ${index + 1} de ${title}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div
            className="image-modal-content carousel-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-modal-close"
              onClick={closeModal}
              type="button"
            >
              ×
            </button>

            <button
              className="carousel-btn carousel-btn-left"
              onClick={prevModalImage}
              type="button"
            >
              ‹
            </button>

            <img
              src={images[modalIndex]}
              alt={`Vista ampliada ${modalIndex + 1}`}
            />

            <button
              className="carousel-btn carousel-btn-right"
              onClick={nextModalImage}
              type="button"
            >
              ›
            </button>

            <div className="modal-counter">
              {modalIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Projects() {
  const feraytekImages = [
    "/images/inicio.png",
    "/images/productos.png",
    "/images/producto.png",
    "/images/carrito.png",
    "/images/mis-pedidos.png",
    "/images/pedidos.png",
    "/images/productos-admin.png",
    "/images/informe.png",
    "/images/informes.png",
  ]

  const integradorImages = [
    "/images/home.png",
    "/images/products.png",
    "/images/product.png",
    "/images/compra.png",
    "/images/categorias.png",
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <Reveal>
          <div className="section-heading">
            <p className="section-tag">Proyectos</p>
            <h2 className="section-title">Trabajo destacado</h2>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <ProjectShowcase
            badge="Proyecto principal"
            title="Feraytek · Ecommerce y sistema de gestión"
            description1="Plataforma web orientada a comercio electrónico y administración comercial, con catálogo de productos, carrito, detalle de productos, pedidos, panel administrativo, informes y gestión de datos."
            description2="Este proyecto refleja un enfoque full stack real, combinando experiencia de usuario, backend, base de datos y lógica de negocio en una sola solución."
            techs={["React", "Node.js", "Express", "MySQL", "MongoDB"]}
            repoLink="https://github.com/fernandez-leonel/feraytek-sistema-gestion"
            images={feraytekImages}
          />
        </Reveal>

        <Reveal delay={0.12}>
          <ProjectShowcase
            badge="Proyecto integrador"
            title="Integrador de comercio electrónico P4"
            description1="Proyecto de comercio electrónico desarrollado como trabajo integrador para Programación IV, combinando gestión de usuarios, productos y pedidos con una arquitectura más completa y prácticas modernas de desarrollo."
            description2="Incluye autenticación JWT, comunicación en tiempo real, microservicio de IA, implementación con Docker y una estructura orientada a buenas prácticas de ingeniería."
            techs={[
              "Python",
              "Django",
              "FastAPI",
              "PostgreSQL",
              "Node.js",
              "Express",
              "Firebase",
              "Docker",
              "GitHub Actions",
              "JWT",
            ]}
            repoLink="https://github.com/gabo4567/ecommerce-integrador-p4"
            images={integradorImages}
          />
        </Reveal>
      </div>
    </section>
  )
}

export default Projects