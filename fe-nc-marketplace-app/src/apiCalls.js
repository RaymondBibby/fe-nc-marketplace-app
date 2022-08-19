const getItemsForSale = async () => {
	const data = await fetch('https://deepop2point0.herokuapp.com/api/items');

	return data.json();
};

const getItemsForSaleById = async (item_id) => {
	const data = await fetch(
		`https://deepop2point0.herokuapp.com/api/items/${item_id}`
	);

	return data.json();
};

export default getItemsForSale;
