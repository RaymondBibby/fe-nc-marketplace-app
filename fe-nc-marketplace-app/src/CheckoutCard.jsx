const CheckoutCard = ({ item }) => {
    const { item_name, description, img_url, price, category_name } = item
    console.log(item, item_name);
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

export default CheckoutCard