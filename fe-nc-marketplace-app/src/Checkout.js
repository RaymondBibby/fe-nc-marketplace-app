import CheckoutCard from "./CheckoutCard";
import CheckOutSummary from "./CheckoutSummary";

const Checkout = ({ basket, setBasket }) => {
  if (!basket.length) {
    return <div>Basket Empty!!</div>;
  }

  return (
    <div className="Parent-checkOutSummary">
      <CheckOutSummary basket={basket} />
      {basket.map((item) => {
        return <CheckoutCard item={item} />;
      })}
    </div>
  );
};

export default Checkout;
