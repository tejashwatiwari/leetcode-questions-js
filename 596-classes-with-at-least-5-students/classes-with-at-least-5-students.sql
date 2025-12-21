-- Write your PostgreSQL query statement below
with tc as (select class, count(distinct student) as ds from Courses GROUP BY class)
select class from tc where ds >= 5