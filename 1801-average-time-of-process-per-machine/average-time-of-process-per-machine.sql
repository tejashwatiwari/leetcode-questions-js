-- Write your PostgreSQL query statement below
with cte as (
select machine_id, process_id,
(max(case when activity_type = 'end' then timestamp end) - 
min(case when activity_type = 'start' then timestamp end))as total_time
from  Activity   
group by machine_id, process_id
)
select machine_id, ROUND(AVG(total_time)::numeric,3) AS processing_time
from cte
group by machine_id
order by machine_id