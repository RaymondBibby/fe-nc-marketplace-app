const CheckOutSummary = ({ basket }) => {
  console.log(basket);
  let basketTotal = 0;
  basket.forEach((item) => {
    return (basketTotal += item.price);
  });
  return (
    <div className="checkoutPrice"> PRICE OF ALL GOODIES!: £{basketTotal}</div>
  );
};

export default CheckOutSummary;
