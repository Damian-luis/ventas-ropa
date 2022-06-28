import Nav from "./components/nav.jsx"
import Footer from "./components/footer.jsx";
import Card from "./components/card.jsx";
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
      <div className="cards">
        <div className="buzos">
        <Card nombre="buzos1" descripcion="BUZO HOMBRE" tipo="Buzo hombre naranja talle:L" precio="8999"/>
        <Card nombre="buzos2" descripcion="BUZO HOMBRE" tipo="Buzo hombre azul talle:M" precio="8999"/>
        <Card nombre="buzos3" descripcion="BUZO HOMBRE" tipo="Buzo hombre gris talle:L" precio="7999"/>
        </div>
        <div className="zapatos">
        <Card nombre="zapatos1" descripcion="ZAPATO MUJER" tipo="Zapato mujer rojo talle: 35" precio="7500"/>
        <Card nombre="zapatos2" descripcion="ZAPATO MUJER" tipo="Zapato mujer dorado talle: 30" precio="9999"/>
        <Card nombre="zapatos3" descripcion="ZAPATO MUJER" tipo="Zapato mujer negro talle: 38" precio="6999"/>
        </div>
        <div className="vestidos">
        <Card nombre="vestidos1" descripcion="VESTIDO MUJER" tipo="Vestido mujer color rojo talle: L" precio="7999"/>
        <Card nombre="vestidos2" descripcion="VESTIDO MUJER" tipo="Vestido mujer color negro talle: M" precio="8500"/>
        <Card nombre="vestidos3" descripcion="VESTIDO MUJER" tipo="Vestido mujer color blanco-rojo talle: L" precio="10999"/>
        </div>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
