module.exports = {
	getAllInventory: async (req, res) => {
		const db = req.app.get("db");
		const inventory = await db.get_all_inventory();
		res.status(200).send(inventory);
	},
	addToCart: async (req, res) => {
		const db = req.app.get("db");
		const { item, user } = req.body;
		// const check = await db.check_cart_for_item({ item, user });
		// let quantity = check.length;
		// if (quantity === 0) {
		// 	db.add_quantity([user, item]);
		// } else {
		// 	db.add_one([user, item]);
		// }
		db.add_to_cart([user, item]);
		res.sendStatus(200);
	},
	getCart: async (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const cartItems = await db.get_cart([id]);
		const itemIds = cartItems.map(item => {
			return item.item_id;
		});
		res.status(200).send(itemIds);
	},
	deleteItem: (req, res) => {
		const db = req.app.get("db");
		const { id, user } = req.params;
		db.delete_from_cart([id, user]);

		res.status(200).send("ok");
	}
};
