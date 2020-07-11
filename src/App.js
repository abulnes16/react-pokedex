import React from "react";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={"assets/img/logo.png"} alt="logo" width="200" />
      </header>
      <main className="main">
        <section className="form-container">
          <div className="form">
            <input type="text" placeholder="Nombre del pokemon" />
            <button>Buscar</button>
          </div>
        </section>
        <section className="pokemon-list">
         
            <article className="pokemon-item">
              <span className="pokemon-number"># 25</span>
              <img
                src={"./assets/img/pikachu.png"}
                alt="pokemon-img"
              />
              <div className="pokemon-detail">
                <h4>Pikachu</h4>
                <div className="type-list">
                  <span className="badge electric">Eléctrico</span>
                </div>
              </div>
            </article>
            <article className="pokemon-item">
              <span className="pokemon-number"># 25</span>
              <img
                src={"./assets/img/pikachu.png"}
                alt="pokemon-img"
              />
              <div className="pokemon-detail">
                <h4>Pikachu</h4>
                <div className="type-list">
                  <span className="badge electric">Eléctrico</span>
                </div>
              </div>
            </article>
            <article className="pokemon-item">
              <span className="pokemon-number"># 25</span>
              <img
                src={"./assets/img/pikachu.png"}
                alt="pokemon-img"
              />
              <div className="pokemon-detail">
                <h4>Pikachu</h4>
                <div className="type-list">
                  <span className="badge electric">Eléctrico</span>
                </div>
              </div>
            </article>
            <article className="pokemon-item">
              <span className="pokemon-number"># 25</span>
              <img
                src={"./assets/img/pikachu.png"}
                alt="pokemon-img"
              />
              <div className="pokemon-detail">
                <h4>Pikachu</h4>
                <div className="type-list">
                  <span className="badge electric">Eléctrico</span>
                </div>
              </div>
            </article>
            <article className="pokemon-item">
              <span className="pokemon-number"># 25</span>
              <img
                src={"./assets/img/pikachu.png"}
                alt="pokemon-img"
              />
              <div className="pokemon-detail">
                <h4>Pikachu</h4>
                <div className="type-list">
                  <span className="badge electric">Eléctrico</span>
                </div>
              </div>
            </article>
            <article className="pokemon-item">
              <span className="pokemon-number"># 25</span>
              <img
                src={"./assets/img/pikachu.png"}
                alt="pokemon-img"
              />
              <div className="pokemon-detail">
                <h4>Pikachu</h4>
                <div className="type-list">
                  <span className="badge electric">Eléctrico</span>
                </div>
              </div>
            </article>
            <article className="pokemon-item">
              <span className="pokemon-number"># 25</span>
              <img
                src={"./assets/img/pikachu.png"}
                alt="pokemon-img"
              />
              <div className="pokemon-detail">
                <h4>Pikachu</h4>
                <div className="type-list">
                  <span className="badge electric">Eléctrico</span>
                </div>
              </div>
            </article>
            <article className="pokemon-item">
              <span className="pokemon-number"># 25</span>
              <img
                src={"./assets/img/pikachu.png"}
                alt="pokemon-img"
              />
              <div className="pokemon-detail">
                <h4>Pikachu</h4>
                <div className="type-list">
                  <span className="badge electric">Eléctrico</span>
                </div>
              </div>
            </article>
        
        </section>
      </main>
      <footer>
        <h3>Creado con amor por @abulnes16</h3>
      </footer>
    </div>
  );
}

export default App;
