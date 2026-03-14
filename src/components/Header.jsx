function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          LF
        </a>

        <nav className="nav">
          <a href="#about">Acerca de mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#skills">Stack</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div className="header-actions">
          <a
            href="mailto:leeoofernandez54@gmail.com"
            className="header-btn secondary-btn"
          >
            Correo electrónico
          </a>

          <a
            href="/Leonel_Fernandez_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header-btn secondary-btn cv-header-btn"
          >
            CV 
           <svg
             className="download-svg"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2.2"
             strokeLinecap="round"
             strokeLinejoin="round"
             aria-hidden="true"
           >
             <path d="M12 3v12" />
             <path d="M7 10l5 5 5-5" />
             <path d="M5 21h14" />
            </svg>
          </a>

          <a
            href="https://github.com/fernandez-leonel"
            target="_blank"
            rel="noreferrer"
            className="header-btn primary-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header