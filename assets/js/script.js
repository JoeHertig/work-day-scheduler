//global variable
var descriptions = {};

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

  // save to storage
  localStorage.setItem(btnText, btnTime);
});
