import React from 'react';
import photo from './placeholder_photo.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <nav className='navbar'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      <section className='home' id='home'>
        <div className='summary-text'>
          <h1>Karen He</h1>
          <p className='blurb'>
            I'm a software engineer based in the San Francisco Bay Area. 
            I have a passion for helping the world through software and accessibility. 
          </p>
        </div>
        <div className='headshot'>
          <img src={photo} id='photo' alt='Karen headshot'/>
        </div>
      </section>

      <section className='skills'>
        <h2>Skills</h2>
        <p>to be filled</p>
      </section>

      <section id='about'>
        <h2>About Me</h2>
        <h2>Outside of Work</h2>
      </section>

      <section className='contact' id='contact'>
        <h2>Contact</h2>
        <a href='www.github.com/baekrxnn'>GitHub</a>
        <a href='https://www.linkedin.com/in/karen18he/'>LinkedIn</a>
      </section>

      <footer>
        <p>this is the footer</p>
      </footer>

    </div>
  );
}

export default App;
