DELETE
FROM cart
WHERE item_id = $1
    AND user_id = $2;

