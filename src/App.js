import React from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
  
      <header className="header">
        <h1>Experimentando con Spline</h1>
        <p>Explora nuestro modelo interactivo en 3D, intenta haciendo Scroll y Click derecho para manipular el objeto</p>
      </header>
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/vkHuDR9pP-DzLw4H/scene.splinecode" />
      </div>
      <div className="cta">
        <a
          href="https://spline.design/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Explorar Más
        </a>
      </div>
    </div>
  );
}

export default App;
