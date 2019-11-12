SELECT target_name, SUM(question_difference) as metric
FROM magic
WHERE source_user = 1 AND target_user <> 1
GROUP BY target_name
ORDER BY metric
LIMIT 1