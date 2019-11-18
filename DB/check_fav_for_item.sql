SELECT *
FROM favorites
WHERE item_id = $1
    AND user_id = $2