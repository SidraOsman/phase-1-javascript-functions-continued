// code your solution here

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*"){
    return function(adjective = "special"){
        return `You are ${style}${adjective}${style}!`
    }
}

 function saturdayFun(activity="roller-skate" , activity2="bathe my dog"){
    return `This Saturday, i want to ${activity} && ${activity2}!`
}