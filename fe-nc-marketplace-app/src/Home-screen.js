import { useEffect, useState } from 'react';
import getItemsForSale from './apiCalls';
import Card from './card';

const HomeScreen = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		getItemsForSaleById().then(({ items }) => {
			setItems(items);
		});
	}, []);

	return (
		<>
			<div>
				{items.map((itemForSale) => {
					return (
						<Card key={itemForSale.item_id} itemForSale={itemForSale} />
					);
				})}
			</div>
		</>
	);
};

export default HomeScreen;
