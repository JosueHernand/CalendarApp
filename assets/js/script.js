$(function () {
  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});

var currentHour = dayjs().hour();

$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").split("-")[1]);

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

$(".saveBtn").on("click", function () {
  var blockId = $(this).closest(".time-block").attr("id");
  var userEvent = $(this).siblings(".description").val();

  localStorage.setItem(blockId, userEvent);

  var notification = $("<div>")
    .addClass("notification")
    .text("Appointment Added to localStorage")
    .insertBefore($(this).closest(".row"));

  notification.slideDown();

  setTimeout(function () {
    notification.slideUp(function () {
      $(this).remove();
    });
  }, 1500);
});


$(function () {
  $(".time-block").each(function () {
    var blockId = $(this).attr("id");
    var savedEvent = localStorage.getItem(blockId);

    if (savedEvent) {
      $(this).find(".description").val(savedEvent);
    }
  });
});
