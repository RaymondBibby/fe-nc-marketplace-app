const Card = ({itemForSale}) => {
    const {item_id, item_name, description, img_url, price, category_name} = itemForSale

    console.log(itemForSale);
     return (
        <div className="card-container">
        <h1>{item_name}</h1>
        <h2>{description}</h2>
        <img src={img_url} alt={item_name}/>
        <p>£{price}</p>
        <p>{category_name}</p>
        </div>
    )
}

export default Card

