function superbowlWin(winning){
    let date = winning.find(football => football.result === 'W')
    if (date){
        return date.year
    }
    else{
        return undefined
    }
}  
superbowlWin(date)