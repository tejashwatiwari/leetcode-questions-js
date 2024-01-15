/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
       let map={}

    for(let match of matches){
        if(map[match[0]]==undefined)map[match[0]]=0
        if(map[match[1]]==undefined)map[match[1]]=0
        map[match[1]]++
    }

    let ans=[[],[]]
    for(let [key,value] of Object.entries(map)){
        if(value === 0)ans[0].push(key)
        if(value === 1)ans[1].push(key)
    }
    return ans
    // let win = []
    // let loseTemp = []
    // let lose = []
    // let maps = {}
    // for (let i = 0;i<matches.length;i++){
    //     loseTemp.push(matches[i][1])
    // }
    // for (let i = 0;i<loseTemp.length;i++){
    //     let val = maps[loseTemp[i]];
    //     if (val == undefined){
    //              maps[loseTemp[i]]=1;
    //     }else {
    //             maps[loseTemp[i]] = val +1;
    //             }
    //     }
    // for (key in maps){
    //     if (maps[key]==1){
    //         lose.push(key)
    //     }
    // }
    // for (let i = 0;i<matches.length;i++){
    //         if(!win.includes(matches[i][0]) && !loseTemp.includes(matches[i][0])) win.push(matches[i][0])
    // }
    // win.sort((a,b)=>(a-b))
    // lose.sort((a,b)=>(a-b))
    // let finalArr = [win,lose]
    // return finalArr
};