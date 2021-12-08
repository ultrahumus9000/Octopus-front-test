import CartItem from "./CartItem";
import title from "./asset/title.svg";
export default function Cart({
  shoppingCart,
  setShoppingCart,
  totalCartQty,
  setTotalCartQty,
}) {
  const calculateTotal = () => {
    let total = 0;

    for (const item of shoppingCart) {
      const regex = /[^£]/gi;
      console.log("price", item.price);
      const modifiedPrice = item.price.match(regex).join("");

      total = total + modifiedPrice * item.qty;
    }

    return total;
  };

  const total = calculateTotal();

  return (
    <div className="shopping-cart-page">
      <header className="main-header">
        <img src={title} alt="" />
      </header>
      <main className="cart-overview">
        <section>
          {shoppingCart.map((cartItem, index) => (
            <CartItem
              key={index}
              cartItem={cartItem}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              totalCartQty={totalCartQty}
              setTotalCartQty={setTotalCartQty}
            />
          ))}
        </section>

        <p>Total: £{total.toFixed(2)}</p>
      </main>
    </div>
  );
}
