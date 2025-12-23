-- Write your PostgreSQL query statement below
WITH total_products AS (
    -- Get total number of distinct products available
    SELECT COUNT(*) AS product_count
    FROM Product
),
customer_products AS (
    -- Count distinct products bought by each customer
    SELECT
        customer_id,
        COUNT(DISTINCT product_key) AS bought_count
    FROM Customer
    GROUP BY customer_id
)
SELECT
    cp.customer_id
FROM customer_products cp
JOIN total_products tp
    ON cp.bought_count = tp.product_count;
