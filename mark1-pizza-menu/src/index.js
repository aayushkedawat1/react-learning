import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span> {pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}
function Header() {
  // const style = { color: 'red ', fontSize: '48px', textTransform: 'uppercase' };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast Pizza Service</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>Authentic Pizzas & Italian cuisines, a must try pizza shop</p>
          <ul className="pizzas ">
            {pizzas.map((element) => (
              <Pizza pizzaObject={element} key={element.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on the menu, please come back later :)</p>
      )}
      {/* {numPizzas > 0 && (
        
      )} */}
    </main>
  );
}
function Footer() {
  const hours = new Date().getHours();

  const openHours = 8;
  const closedHours = 20;

  const isOpen = hours >= openHours && hours < closedHours;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHours} closedHours={closedHours} />
      ) : (
        <p>
          We are open between {openHours}:00 && {closedHours}:00
        </p>
      )}
    </footer>
  );
}

function Order({ openHours, closedHours }) {
  return (
    <div className="order">
      <p>
        We're open from {openHours}:00 until {closedHours}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
