import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "A brief description of what this project does. Highlight any cool tech or challenges you solved."
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Another project with a cool feature or tech stack explained.",
    },
  ];

  return (
    <div className="container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <h1 className="name">Robin Dool</h1>
          <h2 className="title">Front end developer</h2>
          <p className="subtitle">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          <nav className="nav-links">
            <a href="#about">About me</a>
            <a href="#projects">Projects</a>
          </nav>

          <a href="mailto:robindool07@gmail.com" className="email">
            robindool07@gmail.com
          </a>

          <div className="social-icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </aside>

      {/* Right Scrollable Content */}
      <main className="content">
        <section id="about">
          <h2>About Me</h2>
          <p>
            I'm Robin Dool, a front-end developer passionate about creating engaging,
            accessible, and pixel-perfect digital experiences. With a strong eye for design
            and performance, I specialize in building modern interfaces using HTML, CSS,
            JavaScript, and React.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <div className="project-img">IMG</div>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="resume-link">
          <a href="#">Resume →</a>
        </div>
      </main>
    </div>
  );
}

export default App;
