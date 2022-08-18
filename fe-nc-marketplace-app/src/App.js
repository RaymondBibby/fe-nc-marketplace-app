import "./App.css";
import Header from "./Header";
import NavBar from "./Nav-bar";
import HomeScreen from "./Home-screen";
import ItemPage from "./Item-page";
import Checkout from "./Checkout";
import ReviewListing from "./Review-Listing";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <HomeScreen />
      <ItemPage />
      <Checkout />
      <ReviewListing />
    </div>
  );
}

export default App;
