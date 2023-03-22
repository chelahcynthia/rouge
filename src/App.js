import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProductPage from "./components/products/ProductPage";
import ProductsList from "./components/products/ProductsList";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ProductCard from "./components/products/ProductCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/products" element={<ProductsList />} />
        <Route path="/productcard" element={<ProductCard  />} />


        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
