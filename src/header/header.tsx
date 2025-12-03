import './header.css'

const header = () => {
  return (
    <header>
      {/* TODO: only show menu icon for mobile */}
      {/* <span className="material-icons">menu</span> */}
      <nav className='navbar'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </nav>
    </header>
  )
}

export default header;