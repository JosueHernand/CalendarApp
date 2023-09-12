$(function () {
  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});

var currentHour = dayjs().hour();

