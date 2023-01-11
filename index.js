"use strict"

function gestationalAge(edd) {
    // gestationalAge = today - (dueDate - term)
    // convert gestationalAge to weeks and days
    let dueDate = new Date(edd).getTime(); // in milliseconds
    let today = Date.now(); // in milliseconds
    let term = 24192000000; //40 weeks in milliseconds
    let oneWeek = 604800000; //1 week in milliseconds
    let oneDay = 86400000; // 1 day in millisecond
    let ega = today - (dueDate - term);
    // // 40weeks = 24192000
    // // difference in the ages
    // let diff =   today - date;
    // // convert to days
    // let days = (diff/1000)/(24*60*60)
    // // divide by 7
    // let weeks = days/7;
    // let plusDays = days%7;
    
    let conceptionDate =  dueDate - term 
    // let estimatedDateToday = today - conceptionDate

    // // remainder equals days
    // // format edd
    // //     EGA --- x -- EDD  
    // // ega + x =   EDD 
    // // conception date + 40wk = edd
    // // 

    // // let egg = `${weeks} weeks plus ${Math.floor(plusDays)} Days`
    // // remainder to days
    console.log(dueDate,  today, conceptionDate, new Date(conceptionDate));
    return;
}

console.log(gestationalAge("2023-01-09"));
