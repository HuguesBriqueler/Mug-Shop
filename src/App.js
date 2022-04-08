import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FloatingCart from "./components/FloatingCart/FloatingCart";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Products from "./pages/Products/Products";
import ProductShowcase from "./pages/ProductShowcase/ProductShowcase";

function App() {
  return (
    <>
      <NavBar />
      <FloatingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductShowcase />} />
      </Routes>
    </>
  );
}

export default App;
