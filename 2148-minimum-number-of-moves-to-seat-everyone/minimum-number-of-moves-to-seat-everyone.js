/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let totalMoves = 0;
    let i = 0;
    while (i < seats.length) {
        totalMoves += Math.abs(seats[i] - students[i]);
        i++;
    }

    return totalMoves;
};