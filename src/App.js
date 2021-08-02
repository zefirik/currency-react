import React from "react";


import "./App.css";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navBar";
import CalcBuy from "./components/calcBuy/calcBuy";
import CalcSale from "./components/calcSale/calcSale";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { useFetch } from "./components/hooks/useFetch";

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
  const apiUrl = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  const [rates, loading, error] = useFetch( apiUrl );
   if(error) {
    return <div>Ошибка: {error.message}</div>;
   }

  if (loading) {
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
