Delete FROM products
WHERE id = $1
returning *;
