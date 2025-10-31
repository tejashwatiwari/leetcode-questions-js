class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        summ = sum(nums)
        n = len(nums)-2
        extranums=summ - ((n-1)*n)//2
        for i in range(extranums):
            if nums.count(i) == 2:
                return [i,extranums-i]