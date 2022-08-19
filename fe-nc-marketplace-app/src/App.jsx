import "./App.css";
import Header from "./Header";
import NavBar from "./Nav-bar";
import HomeScreen from "./Home-screen";
import ItemPage from "./Item-page";
import Checkout from "./Checkout";
import ReviewListing from "./Review-Listing";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/item-page"
            element={<ItemPage setBasket={setBasket} />}
          />
          <Route
            path="/checkout"
            element={<Checkout basket={basket} setBasket={setBasket} />}
          />
          <Route path="/review-listing" element={<ReviewListing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
