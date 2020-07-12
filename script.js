$(document).ready(function () {
  // dependecies=================================
  var calendar = $(".calendar");
  var todaysDate = $("#currentDay");

  //global variables
  var row;
  var saveBtn;
  var textBlock;
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
 
  var index = 1;
  // get and display current date
    // used moment.js to format the datetoutoumy1961
    
  date = moment(new Date(), 'YYYY-MM-DD')
  date.format('dddd') 
  todaysDate.text(date.format('dddd, MMMM DD.') );

  // get the current time
  var hours = new Date().getHours();

  // change time blocks colors depending on current time
  // Display the calendar with timeframe 9am to 5pm

  //  CALENDAR DIPLAY ========================================
  var timeBlock = $("<div class=time-block>");
  calendar.append(timeBlock);
  timeBlocks.forEach((hr) => {
    //console.log(hr);
    row = $("<div class= row>");
    timeBlock.append(row);
    //  code adding hour block ========================================
    var hour = $("<div class= hour>");
    hour.addClass("col-2");
    row.append(hour);
    // code adding code to text area
    textBlock = $("<textarea>");
    textBlock.attr("id", "div" + index);
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
    //console.log(hours);
    hour.text(fHour + hr.tmMid);
    textBlock.addClass("col-7");
    textBlock.attr("value", "");
    textBlock.attr("data-index", toString(index));
    //   localStorage.setItem(index, "");
    textBlock.text(localStorage.getItem(index));
    row.append(textBlock);
    //save button code===========
    saveBtn = $("<button class=saveBtn>");
    saveBtn.attr("data-index", index);
    saveBtn.addClass("clo-3");
    saveBtn.append(
      $("<img src='https://www.iconsdb.com/icons/preview/green/save-xxl.png'>")
    );
    index++;
    // saveBtn.text("save");
    row.append(saveBtn);
  });
  // get the users plans and save them to the local Storage
  $(".saveBtn").on("click", function save() {
    btnI = $(this).attr("data-index");
    console.log(btnI);
    txt = $("#div" + btnI).val();
    localStorage.setItem(btnI, txt);
  });
});
