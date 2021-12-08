import { useState } from "react";
import cart from "./asset/cart.svg";
import title from "./asset/title.svg";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

export default function Main({
  totalCartQty,
  setTotalCartQty,
  products,
  setShoppingCart,
  shoppingCart,
}) {
  const navigate = useNavigate();
  // click shopping cart on the top corner can direct you to the shoppingcart page
  return (
    <div>
      <header className="main-header">
        <img src={title} alt="" />
        <div
          className="shopping-cart"
          onClick={() => {
            navigate("/shopping-cart");
          }}
        >
          <img src={cart} alt="" />
          {/* if shopping cart has item, then it will display the total items */}
          {totalCartQty ? (
            <span className="total-quantity">{totalCartQty}</span>
          ) : null}
        </div>
      </header>
      {/* main product section  */}

      <main className="products-display-section">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            setTotalCartQty={setTotalCartQty}
            setShoppingCart={setShoppingCart}
            shoppingCart={shoppingCart}
            totalCartQty={totalCartQty}
          />
        ))}
      </main>
    </div>
  );
}
