/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
      const numRoadsPerCity = new Array(n).fill(0)
    roads.forEach(road => {numRoadsPerCity[road[0]]++; numRoadsPerCity[road[1]]++})
    numRoadsPerCity.sort((a, b) => a-b)
    return numRoadsPerCity.reduce((total, cityRoadCount, i) => total += cityRoadCount * (i + 1), 0)
};