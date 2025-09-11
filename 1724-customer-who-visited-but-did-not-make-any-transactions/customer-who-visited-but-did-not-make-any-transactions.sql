-- Write your PostgreSQL query statement below
select v.customer_id, count(v.customer_id) AS count_no_trans from Visits v left join Transactions t on v.visit_id = t.visit_id where t.transaction_id is null GROUP by customer_id


