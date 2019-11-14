SELECT item_id,
       quantity,
       price
from cart
WHERE user_id = $1