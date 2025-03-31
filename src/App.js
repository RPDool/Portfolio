import logo from './banner.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <nav className="App-nav">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <h1>My Portfolio</h1>
      </header>

      {/* Your content sections */}
      <section id="about">
        <h2>About Me</h2>
        <div>
          <p>Hello</p>
          <p>I'm a software developer with a passion for creating web applications.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {/* Content for projects section */}
      </section>

      <section id="contact">
        <h2>Contact</h2>
        {/* Content for contact section */}
      </section>
    </div>
  );
}

export default App;
