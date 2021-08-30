$(document).ready(function () {
  // get current date
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  // get current date end

  // saveBtn clicked
  $(".saveBtn").on("click", function () {
    // see btn click
    console.log(this);

    // getting textarea value
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save to storage
    localStorage.setItem(time, text);
  });

  // load information from localStorage
  $("#hour9 .description").val(localStorage.getItem("9"));
  $("#hour10 .description").val(localStorage.getItem("10"));
  $("#hour11 .description").val(localStorage.getItem("11"));
  $("#hour12 .description").val(localStorage.getItem("12"));
  $("#hour13 .description").val(localStorage.getItem("13"));
  $("#hour14 .description").val(localStorage.getItem("14"));
  $("#hour15 .description").val(localStorage.getItem("15"));
  $("#hour16 .description").val(localStorage.getItem("16"));
  $("#hour17 .description").val(localStorage.getItem("17"));

  var hourTracker = function () {
    // get current number of hours
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(currentHour, blockHour);

      // verify time
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
    });
  };
  hourTracker();
});
