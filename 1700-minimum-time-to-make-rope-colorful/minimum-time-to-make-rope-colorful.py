
class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        total_time = 0

        for i in range(1, len(colors)):
            # If two consecutive balloons are the same color
            if colors[i] == colors[i - 1]:
                # Remove the one with smaller neededTime
                total_time += min(neededTime[i], neededTime[i - 1])
                # Keep the one with max time (for comparison with next)
                neededTime[i] = max(neededTime[i], neededTime[i - 1])

        return total_time