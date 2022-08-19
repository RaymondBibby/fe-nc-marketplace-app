import { useState, useEffect } from "react";
import getItemsForSale from "./apiCalls";
import Card from "./card";

const ItemPage = ({ setBasket }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemsForSale().then(({ items }) => {
      setItems(items);
    });
  }, []);

  return (
    <>
      <div>
        {items.map((itemForSale) => {
          return (
            <Card
              key={itemForSale.item_id}
              item={itemForSale}
              setBasket={setBasket}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemPage;
