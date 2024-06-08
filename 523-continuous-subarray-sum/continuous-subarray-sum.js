/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
   const n = nums.length;
        const map = new Map();
        
        map.set(0, 0);
        
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += nums[i];
            const mod = sum % k;
            if (map.has(mod)) {
                if (map.get(mod) < i) return true;
            } else {
                map.set(mod, i + 1);
            }
        }
        
        return false;
    };