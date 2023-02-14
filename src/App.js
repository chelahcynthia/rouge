import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products/ProductsList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome</h1>
      <ProductsList />
    </div>
  );
}

export default App;
