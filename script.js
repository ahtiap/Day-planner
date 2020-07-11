// dependecies=================================
var calendar = $(".calendar");
var todaysDate = $("#currentDay");

//global variables
var timeBlocks = [
  { tm: 9, tmMid: "am" },
  { tm: 10, tmMid: "am" },
  { tm: 11, tmMid: "am" },
  ,
  { tm: 12, tmMid: "pm" },
  { tm: 13, tmMid: "pm" },
  { tm: 14, tmMid: "pm" },
  { tm: 15, tmMid: "pm" },
  { tm: 16, tmMid: "pm" },
  { tm: 17, tmMid: "pm" },
];
var date = new Date();
// get and display current date

var today =
  "Today is: " +
  (date.getMonth() + 1) +
  "/" +
  date.getDate() +
  "/" +
  date.getFullYear() +
  ".";
todaysDate.text(today);
// get the current time
var hours = new Date().getHours();

// change time blocks colors depending on current time
// Display the calendar with timeframe 9am to 5pm
var timeBlock = $("<div class=time-block>");
calendar.append(timeBlock);
timeBlocks.forEach((hr) => {
  console.log(hr);
  var row = $("<div class= row>");
  timeBlock.append(row);
  var hour = $("<div class= hour>");
  hour.addClass("col-2");
  hour.attr("data-mid", hr.tmMid);

  row.append(hour);
  var textBlock = $("<div>");
  var blockHour = parseInt(hr.tm);

  //console.log(blockHour);
  if (blockHour === hours) {
    textBlock.addClass("present");
  } else if (blockHour > hours) {
    textBlock.addClass("future");
  } else {
    textBlock.addClass("past");
  }
  var fHour = (hr.tm + 24) % 24;
  if (fHour == 0) {
      //At 00 hours we need to show 12 am
      fHour = 12;
    } else if (fHour > 12) {
      fHour = fHour % 12;
      
    }
  console.log(hours);
  hour.text(fHour+hr.tmMid);
  textBlock.addClass("col-8");
  textBlock.text("dcvqbwehcbqwiuekjfbqiwehcvbqyewlhjcvqwejhcvwe cweqhv");
  row.append(textBlock);
});
// get the users plans and save them
// make sure the plans show up next time user open the app
