import CheckoutCard from './CheckoutCard';
import CheckOutSummary from './CheckoutSummary';

const Checkout = ({ basket, setBasket }) => {
	if (!basket.length) {
		return <div>Basket Empty!!</div>;
	}

	return (
		<>
			<CheckOutSummary basket={basket} />
			{basket.map((item) => {
				return <CheckoutCard item={item} />;
			})}
		</>
	);
};

export default Checkout;
