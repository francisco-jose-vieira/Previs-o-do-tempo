import { useRef } from "react";
import axios from "axios";

import "./App.css";

function App() {

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "467751da048f3d6c2f4f5a556e76e871"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const data = await axios.get(url)
    console.log(data);
    
  }


  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
    </div>
  );
}

export default App;
