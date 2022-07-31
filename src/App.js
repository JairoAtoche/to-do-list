import './App.css';
import ListaDeTareas from '../src/componentes/ListaDeTareas';

function App() {
  return (
    <div className="to-do-list">
      <header className='header'>
        <h1 className='header__h1'>Lista de pendientes</h1>
      </header>
      <main className='main'>
        <article className='tareas'>
          <ListaDeTareas />
        </article>
      </main>
      <footer className='footer'>
        <a className='footer__a' href='https://www.github.com/jairoatoche' target='_blank' rel='noreferrer'>
          Desarrollado por @JairoAtoche
        </a>
      </footer>
    </div>
  );
}

export default App;
