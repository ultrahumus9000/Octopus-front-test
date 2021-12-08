export default function CartItem({
  cartItem,
  shoppingCart,
  setShoppingCart,
  totalCartQty,
  setTotalCartQty,
}) {
  const increaseQty = () => {
    const updatedShoppingCart = shoppingCart.map((item) => {
      if (item.name === cartItem.name) {
        item = { ...item, qty: item.qty + 1 };
      }
      return item;
    });

    setShoppingCart(updatedShoppingCart);
    setTotalCartQty(totalCartQty + 1);
  };

  const decreaseQty = () => {
    if (cartItem.qty > 1) {
      const updatedShoppingCart = shoppingCart.map((item) => {
        if (item.name === cartItem.name) {
          item = { ...item, qty: item.qty - 1 };
        }
        return item;
      });

      setShoppingCart(updatedShoppingCart);
    } else {
      const updatedShoppingCart = shoppingCart.filter(
        (item) => item.name !== cartItem.name
      );
      setShoppingCart(updatedShoppingCart);
    }
    setTotalCartQty(totalCartQty - 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-info">
        <img className="cartItem-image" alt="" src={cartItem.img}></img>
        <h3 className="cartItem-name">{cartItem.name}</h3>
      </div>
      <div className="cart-edit-section">
        {" "}
        <span>{cartItem.price}</span>
        <button className="decrease-btn" onClick={decreaseQty}>
          {" "}
          <span> -</span>
        </button>
        <span>{cartItem.qty}</span>
        <button className="increase-btn" onClick={increaseQty}>
          {" "}
          <span> +</span>
        </button>
      </div>
    </div>
  );
}
