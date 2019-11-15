UPDATE cart
SET quantity = quantity - 1
WHERE user_id = $1
    AND item_id = $2