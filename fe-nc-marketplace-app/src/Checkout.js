import Card from "./card";

const Checkout = ({ basket, setBasket }) => {
  return basket.map((item) => {
    return <Card item={item} setBasket={setBasket} />;
  });
};

export default Checkout;
