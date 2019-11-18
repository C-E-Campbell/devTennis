SELECT *
FROM favorites
JOIN inventory ON (inventory.item_id = favorites.item_id)