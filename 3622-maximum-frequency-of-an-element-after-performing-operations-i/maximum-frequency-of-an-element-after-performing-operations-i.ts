function maxFrequency(nums: number[], k: number, numOperations: number): number {
    nums.sort((a, b) => a - b);

    let min = nums[0];
    let max = nums.at(-1);

    let target = min;
    let maxFreq = 1;
    while (target <= max) {
        const freq = getTargetFreq(nums, target, k, numOperations);
        maxFreq = Math.max(maxFreq, freq);
        target++;
    }

    return maxFreq;
};

function getTargetFreq(nums: number[], target: number, k: number, numOperations: number): number {
    let min = target - k;
    let max = target + k;

    let targetLowerBoundIndex = -1;

    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const midIndex = low + ((high - low) >> 1);
        const midNum = nums[midIndex];

        if (midNum < target) {
            low = midIndex + 1;
        } else if (midNum > target) {
            high = midIndex - 1;
        } else {
            targetLowerBoundIndex = midIndex;
            high = midIndex - 1;
        }
    }

    let targetUpperBoundIndex = targetLowerBoundIndex;

    if (targetUpperBoundIndex > -1) {
        low = 0;
        high = nums.length - 1;

        while (low <= high) {
            const midIndex = low + ((high - low) >> 1);
            const midNum = nums[midIndex];

            if (midNum < target) {
                low = midIndex + 1;
            } else if (midNum > target) {
                high = midIndex - 1;
            } else {
                targetUpperBoundIndex = midIndex;
                low = midIndex + 1;
            }
        }
    }

    let lowerBoundIndex = -1;

    low = 0;
    high = nums.length - 1;

    while (low <= high) {
        const midIndex = low + ((high - low) >> 1);
        const midNum = nums[midIndex];

        if (midNum < min) {
            low = midIndex + 1;
        } else if (midNum > max) {
            high = midIndex - 1;
        } else {
            lowerBoundIndex = midIndex;
            high = midIndex - 1;
        }
    }

    if (lowerBoundIndex === -1) {
        return -1;
    }

    let upperBoundIndex = lowerBoundIndex;

    low = 0;
    high = nums.length - 1;
    while (low <= high) {
        const midIndex = low + ((high - low) >> 1);
        const midNum = nums[midIndex];

        if (midNum < min) {
            low = midIndex + 1;
        } else if (midNum > max) {
            high = midIndex - 1;
        } else {
            upperBoundIndex = midIndex;
            low = midIndex + 1;
        }
    }

    const targetFreq = targetUpperBoundIndex === -1 ? 0 : targetUpperBoundIndex - targetLowerBoundIndex + 1;

    return Math.min(numOperations, (upperBoundIndex - lowerBoundIndex + 1) - targetFreq) + targetFreq;
}

// function maxFrequency(nums: number[], k: number, numOperations: number): number {
//     let min = nums[0];
//     let max = nums[0];

//     nums.forEach((num) => {
//         min = Math.min(min, num);
//         max = Math.max(max, num);
//     });

//     let target = min;
//     let maxFreq = 1;
//     while (target <= max) {
//         const freq = getTargetFreq(nums, target, k, numOperations);

//         maxFreq = Math.max(maxFreq, freq);
//         target++;
//     }

//     return maxFreq;
// };

// function getTargetFreq(nums: number[], target: number, k: number, operations: number): number {
//     let freq = 0;

//     for (const num of nums) {
//         if (num === target) {
//             freq++;
//         } else if (operations > 0 && (num <= target && num + k >= target || num >= target && num - k <= target)) {
//             freq++;
//             operations--;
//         }
//     }

//     return freq;
// }