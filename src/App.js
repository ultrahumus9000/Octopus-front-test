import { useState } from "react";
import cart from "./asset/cart.svg";
import title from "./asset/title.svg";
import "./App.css";

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={title} />
        <img className="shopping-cart" src={cart} />
      </header>
    </div>
  );
}

export default App;
