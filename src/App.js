import Nav from "./components/nav.jsx"
import Footer from "./components/footer.jsx";
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="fondo-nav">
      
      </div>
      <div className="title">
          <h1>Tus estilos</h1>
          <h4>En TUS ESTILOS pensamos en vos</h4>

        </div>

      <div className="quienes-somos">
          <p>En TUS ESTILOS nos enfocamos en la comodidad para vos o para tu empresa ofreciendote lo mejor en moda para que puedas sacar tu estilo adelante.<br/>
          Contamos con un excelente equipo para poder asesorarte. Nuestro primer objetivo es tu comodidad.</p>
      </div>
      <div className="categorias">
        <div className="categorias-first">
        <div className="categorias-img">
            <img src={require("./assets/c-1.jpg")} className="categorias-img-chicas"/>
        </div>
        <div className="categorias-text">
          <p>Los mejores accesorios para esta nueva temporada a un paso de distancia</p>
        </div>
        </div>
        <div className="categorias-second">
        <div className="categorias-text">
        <p>Lo mejor en moda para elevar tu loock al siguiete nivel</p>
        </div>
        <div className="categorias-img">
        <img src={require("./assets/c-2.jpg")} className="categorias-img-chicas"/>
        </div>
          </div>
        <div className="categorias-third">
        <div className="categorias-img">
        <img src={require("./assets/c-3.jpg")} className="categorias-img-larga"/>
        </div>
        <div className="categorias-text">
        <p>Te ofrecemos la mayor variedad en prendas que puedas encontrar en culquier otro sitio</p>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
