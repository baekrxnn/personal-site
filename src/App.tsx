import home from './home/home';
import header from './header/header';
import './App.css';

function App() {
  return (
    <div className="App">
      {header()}

      <div className='content'>
        {home()}

        <section className='skills'>
          <h2>Skills</h2>
          <p>to be filled</p>
        </section>

        <section id='about'>
          <h2>About Me</h2>
          <h3>Outside of Work</h3>
          <p>this is a p tag</p>
        </section>

        <section className='contact' id='contact'>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href='www.github.com/baekrxnn'>GitHub</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/karen18he/'>LinkedIn</a>
            </li>
          </ul>
        </section>
      </div>

      <footer>
        <p> © 2025 Karen He</p>
      </footer>

    </div>
  );
}

export default App;
