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
          <h2>Highlighted Skills</h2>
          <h3>Tech stack</h3>
          <ul>
            <li>React</li>
            <li>TypeScript & JavaScript</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>AWS (EC2, RDS)</li>
          </ul>
          <h3>Specializations</h3>
          <ul>
            <li>Web Accessibility (WCAG Conformance, Product Accessibility testing)</li>
            <li>UI Design with Figma</li>
          </ul>
        </section>

        <section id='about'>
          <h2>About Me</h2>
          <h3>At Work</h3>
          <p>
            I am goal oriented and always eager to learn new technologies and improve my skills.
            I have lots of cross-functional collaboration experiences, working 
            with stakeholders with different perspectives to deliver the best product.
          </p>
          <h3>Outside of Work</h3>
          <p>
            You can find me exploring the world of kpop through creative ventures, such as 
            learning choreographies, editing concert videos and vlogs, and arranging mashups.
          </p>
          <p>
            Fun fact: I am a <a href="https://archiveprogram.github.com/arctic-vault/">GitHub Arctic Code Vault</a> contributor!
          </p>
        </section>

        <section className='contact' id='contact'>
          <h2>Contact</h2>
          <p>
            You can connect with me on <a target='_blank' href='https://www.linkedin.com/in/karen18he/' rel="noreferrer">LinkedIn</a>, 
            or check out my projects on <a target='_blank' href='https://github.com/baekrxnn' rel="noreferrer">GitHub</a>!
          </p>
        </section>
      </div>

      <footer>
        <p> © 2025 Karen He</p>
      </footer>

    </div>
  );
}

export default App;
