SELECT quantity
FROM cart
WHERE user_id = $1
    AND item_id = $2