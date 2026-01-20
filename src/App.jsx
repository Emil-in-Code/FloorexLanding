import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './widgets/Navbar/Navbar.jsx';
import imgIzquierda from './assets/img/path1.webp';
import imgDerecha from './assets/img/path2.webp';

function App() {
  const [scrollFraction, setScrollFraction] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculamos cuánto se ha scrolleado (0 a 1) en los primeros 500px
      const scrollTop = window.scrollY;
      const maxScroll = 100; // Distancia en px para que se abran del todo
      const fraction = Math.min(scrollTop / maxScroll, 1);
      setScrollFraction(fraction);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* CAPA DE BIENVENIDA (LAS IMÁGENES) */}
      <div className="welcome-wrapper">
        <div 
          className="door left-door" 
          style={{ transform: `translateX(-${scrollFraction * 100}%)` }}
        >
          <img src={imgIzquierda} alt="Lado izquierdo" />
        </div>
        <div 
          className="door right-door" 
          style={{ transform: `translateX(${scrollFraction * 100}%)` }}
        >
          <img src={imgDerecha} alt="Lado derecho" />
        </div>
      </div>

      {/* CONTENIDO DE LA LANDING */}
      <main className="main-content">
        <Navbar />
        <section className="hero">
          <h1>HOLA</h1>
          <p>Bienvenido a la página que se abre al mundo.</p>
        </section>
        {/* Agrega mucho contenido aquí para poder scrollear */}
        <div style={{ height: '200vh' }}></div> 
      </main>
    </div>
  );
}

export default App;




