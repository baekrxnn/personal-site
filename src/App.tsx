import React from 'react';
import photo from './placeholder_photo.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>page title</h1>

      <section className='summary'>
        <div className='summary-text'>
          <h2>Karen He</h2>
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

      <section className='contact'>
        <h2>Contact</h2>
        <a href='www.github.com/baekrxnn'>GitHub</a>
        <a href='https://www.linkedin.com/in/karen18he/'>LinkedIn</a>
      </section>


    </div>
  );
}

export default App;
