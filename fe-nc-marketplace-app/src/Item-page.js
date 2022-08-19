import { useState, useEffect } from 'react';
import getItemsForSale from './apiCalls';
import ItemCard from './ItemCard';

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
						<ItemCard
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
