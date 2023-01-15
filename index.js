"use strict"

function gestationalAge(edd= undefined, lmp =undefined, dateOfInterest = undefined) {
    if (edd == undefined && lmp == undefined && dateOfInterest == undefined) {
        console.log(`Please enter in order: edd and  or lmp and or date of interest`)
    }
    // gestationalAge = today - (dueDate - term)
    // convert gestationalAge to weeks and days
    // edd by LMP = lmp + 280 days
    let dueDate = new Date(edd).getTime(); // in milliseconds
    let lastPeriod = new Date(lmp).getTime(); //lmp in millisenconds
    let specificDate = new Date(dateOfInterest).getTime(); //to get the edd of a particular day
    let today = Date.now(); // in milliseconds
    let term = 24192000000; //40 weeks in milliseconds
    let oneWeek = 604800000; //1 week in milliseconds
    let oneDay = 86400000; // 1 day in millisecond
    let egaMilliseconds = today - (dueDate - term);
    let egaDays = egaMilliseconds/oneDay;
    let egaWeeks = egaMilliseconds/oneWeek;
    let egafinal = egaDays/7;
    let eddSpecificLmp = Math.floor((specificDate - lastPeriod)/oneWeek);
    let eddSpecificEdd = Math.floor(( dueDate - specificDate)/oneWeek);
    let lastPeriodDueDate = new Date(lastPeriod + term).toLocaleDateString();
    if (lmp) {
        console.log(` Based on her LMP:
        -- she is ${Math.floor((today - lastPeriod)/oneWeek)} weeks, ${Math.floor((today - lastPeriod)/oneWeek)%7} Days today
        -- her due date would be on the ${lastPeriodDueDate}
        `  )
    } else console.log("LMP not given")
    if (specificDate && lmp) {
        console.log(`Base on her LMP:
        -- on ${dateOfInterest}, she was ${eddSpecificLmp} weeks and ${eddSpecificLmp%7} days`)
    } else if (specificDate && edd) {
        console.log(`Based on her due date:
        --on ${dateOfInterest}, she was ${eddSpecificEdd} weeks and ${eddSpecificEdd%7} days
        `)
    }
    

    //lmp
    // let egaByLmp = ((lastPeriod + today)/oneWeek) 
    
    console.log(`Based on her due date:
    --Today, she is ${Math.floor(egafinal)} weeks ${Math.floor(egaDays % 7)} days.`);
    return;
}

console.log(gestationalAge("2023-10-10","",""));

// Ultrasound Measurement:
// - must be before 20 weeks of pregnancy
// - Ideally:
//        Crown-rump length(CRL)-- between 10 weeks 0 days and 13 weeks 6 days
//        Head circumference -- between 14 and 20 weeks 

// conditions of use of the last menstrual period, LMP 
// -the cycle lenght is 28 days 
// -ovulation occured on the 14th day of the cycle 
// -the cycle was normal, ie not immediately following seizing the use of OCP or soon after a pregnancy

