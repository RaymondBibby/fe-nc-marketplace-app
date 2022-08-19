const ItemCard = (props) => {
  const { setBasket } = props;
  const { item_name, description, img_url, price, category_name } = props.item;

  const handleAddToCart = (event) => {
    event.preventDefault(); //Prevents the re-render of the page on the invocation of handleEvent() & ensures that we don't loose state
    setBasket((currentBasket) => {
      return [...currentBasket, props.item];
    });
  };

  return (
    <div className="card-container">
      <h1>{item_name}</h1>
      <h2>{description}</h2>
      <img src={img_url} alt={item_name} />
      <p className="Price">£{price}</p>
      <p>{category_name}</p>
      <button
        type="submit"
        onClick={(event) => {
          handleAddToCart(event);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ItemCard;
