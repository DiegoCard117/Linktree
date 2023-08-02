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
          <a className='socialButton glow-on-hover' href="https://portfolio-js-diegocard117.vercel.app">Portifolio</a>
          <a className='socialButton glow-on-hover' href="https://github.com/DiegoCard117">GitHub</a>
          <a className='socialButton glow-on-hover' href="https://www.instagram.com/dih_cardoso117/">Instagram</a>
      </section>
    </>
  )
}

export default App
