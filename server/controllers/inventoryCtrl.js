module.exports = {
  getAllInventory: async (req, res) => {
    const db = req.app.get("db");
    const inventory = await db.get_all_inventory();
    res.status(200).send(inventory);
  },
  addToCart: async (req, res) => {
    const db = req.app.get("db");
    const { item, user, price } = req.body;
    const check = await db.check_cart_for_item([item, user]);
    let quantity = check.length;
    console.log("added", quantity);
    if (quantity === 0) {
      db.add_to_cart([user, item, price]);
    } else {
      db.add_quantity([user, item]);
    }

    res.sendStatus(200);
  },
  getCart: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const cartItems = await db.get_cart([id]);

    res.status(200).send(cartItems);
  },
  deleteItem: async (req, res) => {
    const db = req.app.get("db");
    const { id, user } = req.params;
    await db.delete_from_cart([id, user]);
    res.sendStatus(200);
  },
  decreaseCart: async (req, res) => {
    const db = req.app.get("db");
    const { item, user } = req.body;
    const quantity = await db.get_current_quantity([user, item]);

    console.log("subtract", quantity);
    if (quantity[0].quantity > 1) {
      db.decrease_quantity([user, item]);
    } else {
      await db.delete_from_cart([item, user]);
    }

    res.sendStatus(200);
  }
};
