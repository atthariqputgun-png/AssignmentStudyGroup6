SELECT c.name, c.city, o.book_title, o.price, o.order_date FROM customers c JOIN orders o ON c.id = o.customer_id WHERE 
c.city IN ('Bandung', 'Jakarta') AND o.price >= 180000 ORDER BY o.price DESC;


SELECT c.city, SUM(o.price) AS total_belanja FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.city
HAVING SUM(o.price) > 3000000;


SELECT c.name, c.city, o.book_title, o.price, o.order_date FROM customers c JOIN orders o ON c.id = o.customer_id
WHERE o.order_date BETWEEN '2024-02-01' AND '2024-03-31' AND (o.book_title ILIKE '%SQL%' OR o.book_title ILIKE '%PostgreSQL%')
ORDER BY o.order_date DESC;


SELECT c.name, c.city, COUNT(o.id) AS jumlah_buku, SUM(o.price) AS total_uang, AVG(o.price) AS rata_rata_harga FROM customers c
JOIN orders o ON c.id = o.customer_id GROUP BY c.id, c.name, c.city HAVING COUNT(o.id) >= 4 ORDER BY total_uang DESC;

