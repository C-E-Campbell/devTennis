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

    if (quantity[0].quantity > 1) {
      db.decrease_quantity([user, item]);
    } else {
      await db.delete_from_cart([item, user]);
    }

    res.sendStatus(200);
  },
  emptyAfterPurchase: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    await db.delete_all_items_for_user([user_id]);
    res.status(200).send("everything deleted");
  },
  favorites: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    try {
      const results = await db.get_favorites();
      const myFav = results.filter(fav => {
        return fav.user_id === Number(id);
      });
      res.status(200).send(myFav);
    } catch (err) {
      console.log(err);
    }
  },
  addFavorites: async (req, res) => {
    const db = req.app.get("db");
    const { user_id, item_id } = req.body;
    db.add_to_favorites({ user_id, item_id });
  }
};
