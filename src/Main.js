import cart from "./asset/cart.svg";
import title from "./asset/title.svg";

export default function Main() {
  return (
    <div>
      <header className="App-header">
        <img src={title} />
        <img className="shopping-cart" src={cart} />
      </header>
    </div>
  );
}
