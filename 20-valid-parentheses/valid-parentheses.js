/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length == 1) return false;
    let stack = [];
    for (let i =0 ; i<s.length;i++){
        let top = stack[stack.length-1]
        if (s[i]=='(' || s[i]=='[' || s[i]=='{') stack.push(s[i])
        else if (s[i]==')' && top=='(' || s[i]==']' && top=='[' || s[i]=='}' && top=='{') stack.pop()   
        else stack.push(s[i])
        }
    if (stack.length==0) return true
    else return false
    
};