import photo from './placeholder_photo.jpeg';
import './home.css';

const home = () => {
  return (
    <section className='home' id='home'>
      <div className='summary-text'>
        <h1>Karen He</h1>
        <p className='blurb'>
          I'm a <span id='highlight_swe'>software engineer</span> based in the San Francisco Bay Area. 
          I have a passion for helping the world through software and accessibility. 
        </p>
      </div>
      <div className='headshot'>
        <img src={photo} id='photo' alt='Karen headshot'/>
      </div>
    </section>
  )
}

export default home;