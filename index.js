"use strict"

function gestationalAge(edd, lmp =undefined, dateOfInterest = undefined) {
    // gestationalAge = today - (dueDate - term)
    // convert gestationalAge to weeks and days
    let dueDate = new Date(edd).getTime(); // in milliseconds
    let today = Date.now(); // in milliseconds
    let term = 24192000000; //40 weeks in milliseconds
    let oneWeek = 604800000; //1 week in milliseconds
    let oneDay = 86400000; // 1 day in millisecond
    let egaMilliseconds = today - (dueDate - term);
    let egaDays = egaMilliseconds/oneDay;
    let egaWeeks = egaMilliseconds/oneWeek;
    let egafinal = egaDays/7;
    
    console.log(`${Math.floor(egafinal)} weeks ${Math.floor(egaDays % 7)} days, this is based on the due date.`);
    return;
}

console.log(gestationalAge("2023-08-20"));
