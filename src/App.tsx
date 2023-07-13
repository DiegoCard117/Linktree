import photo from './assets/img/photo.jpeg'
import DarkMode from './assets/components/DarkMode/DarkMode'

function App() {
  return (
    <>
      <header>
        <img className='photo-perfil' src={ photo } alt="foto de perfil" />
        <DarkMode />
      </header>
      <section>
        <h1>Diego Cardoso</h1>
        <p>Dev Frontend - React Js</p>
        <button className='socialButton glow-on-hover'>
          <a href="">Portifolio</a>
        </button>
        <button className='socialButton glow-on-hover'>
          <a href="https://github.com/DiegoCard117">GitHub</a>
        </button>
        <button className='socialButton glow-on-hover'>
          <a href="https://www.instagram.com/dih_cardoso117/">Instagram</a>
        </button>
      </section>
    </>
  )
}

export default App
