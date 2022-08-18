import { Link } from 'react-router-dom';
import vintageShop from '../src/stock-images/vintageShop.jpg';

const Header = () => {
	return (
		<div className="background_vintageShop">
			<Link to="/">
				<img
					className="VintageShop"
					src={vintageShop}
					alt="vintage clothing shop"
				/>
			</Link>
		</div>
	);
};

export default Header;
