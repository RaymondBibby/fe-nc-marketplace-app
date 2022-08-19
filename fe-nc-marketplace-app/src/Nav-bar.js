import { Link } from "react-router-dom";
import basketimg from "../src/stock-images/basketimg.png";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/item-page" className="link">
            Items
          </Link>
        </li>
        <li>
          <Link to="/review-listing" className="link">
            Review <br /> Listings
          </Link>
        </li>
        <li>
          <Link to="/checkout" className="link">
            {"  "}
            Checkout{"  "}
            <img className="basketimg" src={basketimg} alt="customer basket" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
