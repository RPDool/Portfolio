  import './App.css';

  function App() {
    const projects = [
      {
        id: 1,
        title: "3D Game",
        description: "This is my first 3d game project. Its a basic shooter. you can walk around and shoot",
        image: "/3d-game.png",
      },
      // {
      //   id: 2,
      //   title: "Project Title 2",
      //   description: "Another project with a cool feature",
      //   image: "/3d-game.png", // Path to the image in the public folder
      // },
    ];

    return (
      <div className="container">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-content">
            <h1 className="name">Robin Dool</h1>
            <h2 className="title">Front end and game developer</h2>
            <p className="subtitle">
            I build accessible, pixel-perfect digital experiences for the web, and I also create engaging games in Unity.
            </p>

            <nav className="nav-links">
              <a href="#about">About me</a>
              <a href="#projects">Projects</a>
            </nav>

            <a href="mailto:robindool07@gmail.com" className="email">
              robindool07@gmail.com
            </a>
            <a href='https://robsnor.itch.io/' className="email" >robsnor.itch.io </a>

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
              I'm Robin Dool, a front-end/game developer passionate about creating engaging,
              accessible, and pixel-perfect digital experiences. With a strong eye for design
              and performance, I specialize in building modern interfaces using HTML, CSS,
              JavaScript, and React. With game development i specialize in Unity and C#.
            </p>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
              {projects.map((project) => (
                <div className="project" key={project.id}>
                  <div className="project-img">
                    <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                  </div>
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="resume-link">
            <a href="/CV Robin Dool.pdf" download="Robin_Dool_Resume.pdf">
              Resume →
            </a>
          </div>
        </main>
      </div>
    );
  }

  export default App;
