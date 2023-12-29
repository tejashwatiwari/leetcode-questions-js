/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length==1)return false

    let stack = []
    for (let i =0;i<s.length;i++){
        let char=s[i], top=stack[stack.length-1]
        if (char=='(' || char=='[' || char=='{')stack.push(char);
        else if((char==')' && top=='(') ||(char==']' && top=='[')|| (char=='}' && top=='{'))stack.pop()
        else stack.push(char)    
    }
    if (stack.length == 0) return true;
    else return false
};