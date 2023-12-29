/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length==1)return false

    let blankArr = []
    for (let i =0;i<s.length;i++){
        let char=s[i]
        if (char=='(' || char=='[' || char=='{')blankArr.push(char);
        else if((char==')' && blankArr[blankArr.length-1]=='(') ||(char==']' && blankArr[blankArr.length-1]=='[')|| (char=='}' && blankArr[blankArr.length-1]=='{'))blankArr.pop()
        else blankArr.push(char)
        
    }
    if (blankArr.length == 0) return true;
    else return false
};