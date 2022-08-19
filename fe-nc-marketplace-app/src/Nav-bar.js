import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/item-page">Items</Link>
				<Link to="/checkout">Checkout</Link>
				<Link to="/review-listing">Review Listings</Link>
			</nav>
		</>
	);
};

export default NavBar;
