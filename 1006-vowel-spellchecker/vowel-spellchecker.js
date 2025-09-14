var spellchecker = function(wordlist, queries) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    const toDeV = (word) => word.split('').map(c => vowels.has(c) ? '$' : c).join('');
    
    const W = new Set(wordlist);
    const Wlow = new Map(), WdeV = new Map();
    
    for (const w of wordlist) {
        const lw = w.toLowerCase();
        const dv = toDeV(lw);
        if (!Wlow.has(lw)) Wlow.set(lw, w);
        if (!WdeV.has(dv)) WdeV.set(dv, w);
    }
    
    return queries.map(q => {
        if (W.has(q)) return q;
        const low = q.toLowerCase();
        const deV = toDeV(low);
        if (Wlow.has(low)) return Wlow.get(low);
        if (WdeV.has(deV)) return WdeV.get(deV);
        return "";
    });
};