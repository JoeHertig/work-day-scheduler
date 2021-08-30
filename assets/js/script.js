// get current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// get current date end

// saveBtn clicked
$(".saveBtn").on("click", function () {
  // see btn click
  console.log(this);

  // getting textarea value
  var btnText = $(this).siblings(".description").val();
  var btnTime = $(this).parent().attr("id");
  console.log(this);

  // save to storage
  localStorage.setItem(btnText, btnTime);
});

$("#hour9 .description").val(localStorage.getItem("9"));
$("#hour10 .description").val(localStorage.getItem("10"));
$("#hour11 .description").val(localStorage.getItem("11"));
$("#hour12 .description").val(localStorage.getItem("12"));
$("#hour13 .description").val(localStorage.getItem("13"));
$("#hour14 .description").val(localStorage.getItem("14"));
$("#hour15 .description").val(localStorage.getItem("15"));
$("#hour16 .description").val(localStorage.getItem("16"));
$("#hour17 .description").val(localStorage.getItem("17"));
