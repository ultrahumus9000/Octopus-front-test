import { useState } from "react";

import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/shopping-cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
