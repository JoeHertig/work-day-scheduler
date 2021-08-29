// get current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// get current date end

// edit text in textarea
$(".description").on("click", "textarea", function () {
  console.log(this);
});
