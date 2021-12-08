import { useState } from "react";

import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";

const hardCodedProducts = [
  {
    name: "Energy Saving Light Bulb",
    img: "https://pyxis.nymag.com/v1/imgs/72d/0de/3f1d9d727cb1d2fa3a545e2c71d2c820aa-28-pink-lights-lede.rsquare.w700.jpg",
    set: "25W//Packet of 4",
    price: "£12.99",
    description:
      " Availible in 7 watts 9 watts and 11 watts Lorem ipsum dolor consectetuer adipiscing elit Availible in 7 watts 9 watts and 11 watts Lorem ipsum dolor consectetuer adipiscing elit ",

    spec: {
      Brand: "Octopus",
      Weight: 77,
      Dimensions: "12.6 x 6.2 x 6.2",
      "Item Number": "E1234",
      Color: "Cool DayLight",
    },
  },
  {
    name: "Light Bulb",
    img: "https://images.pexels.com/photos/3946168/pexels-photo-3946168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    set: "25W//Packet of 4",
    price: "£10.99",
    description:
      " Availible in 7 watts 9 watts and 11 watts Lorem ipsum dolor consectetuer adipiscing elit Availible in 7 watts 9 watts and 11 watts Lorem ipsum dolor consectetuer adipiscing elit ",

    spec: {
      Brand: "Octopus",
      Weight: 77,
      Dimensions: "12.6 x 6.2 x 6.2",
      "Item Number": "E1234",
      Color: "Cool DayLight",
    },
  },
  {
    name: "Bulb",
    img: "https://images.pexels.com/photos/1616472/pexels-photo-1616472.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    set: "25W//Packet of 4",
    price: "£9.99",
    description:
      " Availible in 7 watts 9 watts and 11 watts Lorem ipsum dolor consectetuer adipiscing elit Availible in 7 watts 9 watts and 11 watts Lorem ipsum dolor consectetuer adipiscing elit ",

    spec: {
      Brand: "Octopus",
      Weight: 77,
      Dimensions: "12.6 x 6.2 x 6.2",
      "Item Number": "E1234",
      Color: "Cool DayLight",
    },
  },
  {
    name: "Color Bulb",
    img: "https://images.pexels.com/photos/3946168/pexels-photo-3946168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    set: "25W//Packet of 4",
    price: "£8.99",
    description:
      " Availible in 7 watts 9 watts and 11 watts Lorem ipsum dolor consectetuer adipiscing elit Availible in 7 watts 9 watts and 11 watts Lorem ipsum dolor consectetuer adipiscing elit ",

    spec: {
      Brand: "Octopus",
      Weight: 77,
      Dimensions: "12.6 x 6.2 x 6.2",
      "Item Number": "E1234",
      Color: "Cool DayLight",
    },
  },
];

function App() {
  const [totalCartQty, setTotalCartQty] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([]);

  const [products, setProducts] = useState(hardCodedProducts);

  //   in general, I will use useEffect to fetch data from backend then I can assign data into state and display in the page

  //   example:
  //   const [products,setProducts] = useState("");

  //   const fetchProduct = ()=>{

  //     fetch(url).then(items=>items.json()).then(items=>setProducts(items))
  //   }

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  //   based on data structure of products in the state, I can choose to display on the page

  //   eg: products=[{name:"bulb",color:"white"},{name:"sponge",color:"pink"}]

  //   {products.map(product=>  <span >{product.name}</span>)}

  // addtionally, I will use a zustand library in general to reduce passing down states

  // lastly, I will add a loading page in general to wait for data come back from backend
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                totalCartQty={totalCartQty}
                setTotalCartQty={setTotalCartQty}
                products={products}
                setShoppingCart={setShoppingCart}
                shoppingCart={shoppingCart}
              />
            }
          />
          <Route
            exact
            path="/shopping-cart"
            element={
              <Cart
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                totalCartQty={totalCartQty}
                setTotalCartQty={setTotalCartQty}
              />
            }
          />
        </Routes>
      </Router>
      <footer>
        <p>
          {" "}
          Octopus Energy Ltd is a company registered in England and Wales.{" "}
        </p>
        <p>
          {" "}
          Registered number: 09263424. Registered office: 33 Holborn, London,
          EC1N 2HT.
        </p>
        <p>
          {" "}
          Trading office: 2nd Floor, UK House, 164-182 Oxford Street, London W1D
          1NN.
        </p>
      </footer>
    </div>
  );
}

export default App;
