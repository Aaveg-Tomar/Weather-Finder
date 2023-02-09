import './App.css';

import { useState } from 'react';
import axios from "axios";


function App() {
  const apiKey = "713d96b181acca03d69030b1ee2b0511"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }

  return (



    <div className='h-screen'>
      <div className="  grid  place-items-center">
      <div>
      <h1 className="mb-4 text-3xl p-10 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Weather </span></h1>
      </div>
      <div className="flex space-x-1">
        <input type="text" onChange={handleChangeInput} value={inputCity} className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Search..." />
        <button className="px-4 text-white bg-purple-600 rounded-full  " onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg pt-10">
        <img className="w-full  object-center rounded-full " src="./day.gif" alt="Sunset in the mountains" />
        <div className=" pl-16 pt-2">
          <h1 className="font-bold text-2xl mb-2">{data?.name}</h1>
          <h1 className="text-black text-xl m-3  pr-5 w-55 hover:text-2xl hover:text-red-700">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h1>
        </div>
        
      </div>
    </div>

    </div>

  );
}

export default App;
