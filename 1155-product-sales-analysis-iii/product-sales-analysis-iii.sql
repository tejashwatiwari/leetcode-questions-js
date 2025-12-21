-- Write your PostgreSQL query statement below
with first_query as (
select *, rank() over (partition by product_id order by year asc) as rn_year from Sales)
select product_id, year as first_year, quantity, price from first_query where rn_year = 1