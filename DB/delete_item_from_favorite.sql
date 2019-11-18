DELETE
FROM favorites
WHERE user_id = $1
    AND item_id = $2;