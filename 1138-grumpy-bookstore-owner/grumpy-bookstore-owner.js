/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let totalHappyCustomers = 0;
    let currWindowPotentiallyHappyCustomers = 0;
    
    // gather all happy customers you can from not applying the secret technique
    for (let i = 0; i < customers.length; i++) {
        if (!grumpy[i]) {
            totalHappyCustomers += customers[i];

            // as you gather set the taken amount to 0
            customers[i] = 0;
        } else {
            // gather first window points not taken
            if (i < minutes) {
                currWindowPotentiallyHappyCustomers += customers[i];
            }
        }
    }

    let maxExtraHappyCustomers = currWindowPotentiallyHappyCustomers;

    // go over the modified customers array in windows of size minutes.
    for (let i = 1; i <= customers.length-minutes; i++) {
        // for each window count the number of extra happy customers you'd receive
        currWindowPotentiallyHappyCustomers -= customers[i-1];
        currWindowPotentiallyHappyCustomers += customers[i+minutes-1];
        maxExtraHappyCustomers = Math.max(currWindowPotentiallyHappyCustomers, maxExtraHappyCustomers);
    }

    return totalHappyCustomers + maxExtraHappyCustomers;
};