import React, { useState, useEffect } from "react";


import "./App.css";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navBar";
import CalcBuy from "./components/calcBuy/calcBuy";
import CalcSale from "./components/calcSale/calcSale";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <Container className="text-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden"> Loading... </span>
      </Spinner>
    </Container>
  )
}


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rates, setRates] = useState([]);
  
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setIsLoaded(true);
      return jsonData;
    }
    catch (error){
        setIsLoaded(true);
        setError(error);
    }
  };

  useEffect(() => {
    const apiUrl = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    fetchData(apiUrl).then((rates) => {
      setRates(rates);
    })
  },[]);
  
   if(error) {
    return <div>Ошибка: {error.message}</div>;
   }

  if (!isLoaded) {
    return LoadingSpinner();
  }

  return (
    <Container className="text-center">
      <Header rates = {rates} />
      <BrowserRouter>
        <NavBar />
          <Route path="/buy">
            <CalcBuy rates = {rates} />
          </Route>
          <Route path="/sale">
          <CalcSale rates= {rates} />
          </Route> 
      </BrowserRouter>
      </Container>
  );

}

export default App;
