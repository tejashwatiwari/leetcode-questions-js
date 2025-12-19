WITH contest_counts AS (
    SELECT
        contest_id,
        COUNT(user_id) AS registered_users
    FROM Register
    GROUP BY contest_id
),
total_users AS (
    SELECT COUNT(*) AS total_users
    FROM Users
)
SELECT
    c.contest_id,
    ROUND(c.registered_users * 100.0 / t.total_users, 2) AS percentage
FROM contest_counts c
CROSS JOIN total_users t
ORDER BY percentage DESC, contest_id ASC;
