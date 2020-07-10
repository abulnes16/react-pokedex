import React from "react";
import "./css/App.css";

/* Components */
import Header from "./components/Header";
import Form from "./components/Form";
import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header logoPath="./assets/img/logo.png" />
      <main className="main">
        <Form />
        <PokemonList />
      </main>
      <Footer author='@abulnes16' />
    </div>
  );
}

export default App;
