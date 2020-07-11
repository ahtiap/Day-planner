// dependecies=================================
var calendar= $(".calendar");
var todaysDate= $("#currentDay")

//global variables
var mid="";
var timeBlocks=['9','10', '11', '12', '1','2','3','4','5'];
// get and display current date
var date= new Date()
var today= "Today is: "+(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()+".";
todaysDate.text(today);
// get the current time
function TimeRanges(){
    // get the current hour
    var hours = new Date().getHours();
    var hours = (hours+24)%24;
    var mid='am';
    if(hours==0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='pm';
    }
    };
    TimeRanges();






// change time blocks colors depending on current time
// Display the calendar with timeframe 9am to 5pm

// get the users plans and save them 
// make sure the plans show up next time user open the app

