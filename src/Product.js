import { useState } from "react";

export default function Product({
  product,
  setTotalCartQty,
  setShoppingCart,
  totalCartQty,
  shoppingCart,
}) {
  const [singleQty, setSingleQty] = useState(1);

  const [tempShoppingItem, setTempShoppingItem] = useState({
    ...product,
    qty: 1,
  });

  const increaseQty = () => {
    setSingleQty(singleQty + 1);
    setTempShoppingItem({ ...tempShoppingItem, qty: tempShoppingItem.qty + 1 });
  };

  const decreaseQty = () => {
    if (singleQty < 1) {
      return;
    }
    setSingleQty(singleQty - 1);
    setTempShoppingItem({ ...tempShoppingItem, qty: tempShoppingItem.qty - 1 });
  };

  const addToShoppingCart = () => {
    setTotalCartQty(totalCartQty + singleQty);
    setSingleQty(1);

    if (shoppingCart.length === 0) {
      setShoppingCart([tempShoppingItem]);
    }

    const checker = shoppingCart.findIndex(
      (item) => item.name === tempShoppingItem.name
    );

    if (checker < 0) {
      setShoppingCart([...shoppingCart, tempShoppingItem]);
    } else {
      const updatedShoppingCart = shoppingCart.map((cartItem) => {
        if (cartItem.name === tempShoppingItem.name) {
          cartItem = { ...cartItem, qty: cartItem.qty + singleQty };
        }
        return cartItem;
      });

      setShoppingCart(updatedShoppingCart);
    }
  };

  return (
    <div className="product">
      <div className="product-overview">
        <img className="product-image" alt="" src={product.img}></img>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-set">{product.set}</p>
      </div>
      <div className="product-cart">
        <section>
          {" "}
          <h3>{product.price}</h3>
          <button className="decrease-btn" onClick={decreaseQty}>
            {" "}
            <span> -</span>
          </button>
          <span className="qty">{singleQty}</span>
          <button className="increase-btn" onClick={increaseQty}>
            {" "}
            <span> +</span>
          </button>
        </section>
        <button className="add-btn" onClick={addToShoppingCart}>
          Add to cart
        </button>
      </div>
      <div className="product-description">
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-spec">
        <h3>Specifications</h3>

        <ul>
          {Object.entries(product.spec).map((spec, index) => (
            <li key={index}>
              {spec[0]}
              <span>{spec[1]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
