import { useState, useEffect } from 'react';
import getItemsForSaleById from './apiCalls';
import Card from './card';

const ItemPage = () => {
	const [itemId, setItemById] = useState(Math.ceil(Math.random() * 30));
	const [items, setItems] = useState([]);

	useEffect(() => {
		getItemsForSaleById(itemId).then(({ items }) => {
			setItems(items);
		});
	}, [itemId]);

	console.log(items);

	return (
		<div>
			Hello
			{/* <Card items={items} /> */}
		</div>
	);
};

export default ItemPage;
