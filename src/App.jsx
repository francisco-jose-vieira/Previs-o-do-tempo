import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfomations from './components/WeatherInformations/WeatherInfomations'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef() //usado para pegar o valor digitado no input

  async function searchCity() {
    const city = inputRef.current.value
    const key = "467751da048f3d6c2f4f5a556e76e871"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)

  }

  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity} >Buscar</button>

      <WeatherInfomations weather={weather}/>
    </div>
  )
}

export default App
