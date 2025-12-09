-- Write your PostgreSQL query statement below
select id, movie, description, rating from Cinema c where c.id % 2 != 0 AND description!='boring' order by rating DESC