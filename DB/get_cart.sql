SELECT item_id,
       quantity
from cart
WHERE user_id = $1