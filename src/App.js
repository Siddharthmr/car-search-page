import logo from './logo.svg';
import './App.css';
import Car from "./Car.js";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();
    let searchParams = new URLSearchParams(window.location.search);

  var [state, setState] = useState({
    
    make: searchParams.get("make") || 'Honda',
    page: searchParams.get("page") || 1,
  });
  var [cars, setCars] = useState({
    cars: []
  });

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);

    console.log(searchParams);
    fetch(
      `https://www.autolist.com/search?page=${searchParams.get("page") || state.page}&location=Austin%2CTX&make=${searchParams.get("make") || state.make}&ads=web`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.records);
        setCars({ ...cars, cars: data.records });
      });

  }, [window.location.href]);
  return (
    <div className="App">
      <h1>Car Search</h1>

      <select value={state.make} onChange={(e) => {
        let newState = { ...state, make: e.target.value }
        setState(newState)
        let search = new URLSearchParams(newState);
        navigate(`/?${search}`)
      }}>
        <option value="Honda">Honda</option>
        <option value="Jeep">Jeep</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Tesla">Tesla</option>
        <option value="Rolls-Royce">Rolls Royce</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Bugatti">Bugatti</option>
      </select><br></br>
      {[1, 2, 3, 4, 5].map((number,i) => (<button key={`page${i}`} value={number} onClick={(e) => {
        let newState = { ...state, page: e.target.value }
        setState(newState)

        let search = new URLSearchParams(newState);
        navigate(`/?${search}`)
      }} className={state.page == number ? "active" : ""}>{number}</button>))}

      <div className='flex-box'>
        {cars.cars.map((car, i) => (
          <Car key={`car${i}`}car={car}></Car>
        ))}

      </div>
    </div>
  );
}

export default App;
