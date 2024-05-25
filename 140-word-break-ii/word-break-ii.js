/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
        const res = [];
    const cur = [];
    const dict = new Set(wordDict);
    
    function bt(i) {
        if (i === s.length) {
            res.push(cur.join(' '));
            return;
        }
        for (let j = i; j < s.length; j++) {
            const t = s.slice(i, j + 1);
            if (dict.has(t)) {
                cur.push(t);
                bt(j + 1);
                cur.pop();
            }
        }
    }
    
    bt(0);
    return res;
};