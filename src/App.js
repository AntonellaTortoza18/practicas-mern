import "./index.css";
import NombreFoto from "./components/NombreFoto";
import CampoConArray from "./components/CampoConArray";
import Flechita from "./components/Flechita";
import data from "./data/events1";
import { useState } from "react";
function App() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let [numeroACambiar, setNumeroACambiar] = useState(0);
  // el hook de estado esta compuesto por dos elementos, primero la variable que tiene q cambiar y el segundo elemento es la func que va a mod/setear esa variable
  // es necesario pre-definir con q valor inicia el estado, dentro del paremtesis de estado

  let hide = () => {
    console.log(mostrarOcultar);
    setMostrarOcultar(!mostrarOcultar);
  };

  let next = (e) => {
    if (data.length - 1 > numeroACambiar) {
      setNumeroACambiar(++numeroACambiar);
    } else {
      setNumeroACambiar(0);
    }
  };
  let prev = (e) => {
    if (numeroACambiar > 0) {
      setNumeroACambiar(--numeroACambiar);
    } else {
      setNumeroACambiar(data.length - 1);
    }
  };
  return (
    <div className="card black">
      {/* // vamos a armar un condicional que depende del booleano del evento */}
      <NombreFoto
        nombre={data[numeroACambiar].category}
        foto={data[numeroACambiar].image}
      />
      {mostrarOcultar ? (
        <>
          <p className="gray flex j-center a-center" onClick={hide}>
            ocultar info
          </p>
          <CampoConArray datos={data[numeroACambiar].name} />
          <CampoConArray
            titulo="Description"
            datos={data[numeroACambiar].description}
          />{" "}
        </>
      ) : (
        <p className="gray flex j-center a-center" onClick={hide}>
          mostrar info
        </p>
      )}

      <div className="flex j-center a-center">
        <Flechita verbo="anterior" estilo="r25" onClick={prev} />
        <Flechita verbo="siguiente" estilo="l25" onClick={next} />
      </div>
    </div>
  );
}

export default App;
