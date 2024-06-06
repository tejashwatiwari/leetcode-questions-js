/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize != 0) {
    return false;
  }

  hand.sort((a, b) => a - b)

  const freq = {};

  for (let num of hand) {
    if (freq[num]) {
      freq[num] += 1;
    } else {
      freq[num] = 1;
    }
  }

  for (let num of hand) {
    if (!freq[num - 1] && freq[num] > 0) {
      let i = 0;
      let tempNum = num;

      while (i < groupSize) {
        if (freq[tempNum]) {
          freq[tempNum] -= 1;
        } else {
          return false;
        }

        tempNum++;
        i++;
      }
    }
  }

  return true;
};
