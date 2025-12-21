-- Write your PostgreSQL query statement below
select  teacher_id, COALESCE(count(DISTINCT subject_id),0) as cnt from Teacher group by teacher_id