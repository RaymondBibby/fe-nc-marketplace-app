const Card = (props) => {
  if (props.item) {
    const { setBasket } = props;
    const handleAddToCart = () => {
      setBasket(props.item);
    };

    console.log(props.basket);
    const { item_name, description, img_url, price, category_name } =
      props.item;
    return (
      <div className="card-container">
        <h1>{item_name}</h1>
        <h2>{description}</h2>
        <img src={img_url} alt={item_name} />
        <p>£{price}</p>
        <p>{category_name}</p>
        <button onClick={handleAddToCart()}>Add To Cart</button>
      </div>
    );
  } else if (props) {
    const { item_name, description, img_url, price, category_name } =
      props.item;
    return (
      <div className="card-container">
        <h1>{item_name}</h1>
        <h2>{description}</h2>
        <img src={img_url} alt={item_name} />
        <p>£{price}</p>
        <p>{category_name}</p>
      </div>
    );
  }
};

export default Card;
