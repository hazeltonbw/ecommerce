import "./App.scss";
import { Routes, Route, Navigation } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
