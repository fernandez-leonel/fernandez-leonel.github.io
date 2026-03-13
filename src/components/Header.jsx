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