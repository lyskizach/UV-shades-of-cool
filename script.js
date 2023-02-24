// console.log($("#main").children());


$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  

  var currentDay = document.getElementById("currentDay");
  var saveBtn = $("#saveBtn");

  var past = $("#past");
  var present = $("#present");
  var future = $("#future");

  var hour9 = $("#hour-9");
  var hour10 = $("#hour-10");
  var hour11 = $("#hour-11");

  var textInput9 = $("#textInput9");
  var textInput10 = $("#textInput10");
  var textInput11 = $("#textInput11");

  console.log($("#hour-9"));

  //console.log
  

  // const hours = [hour9, hour10, hour11];

  //$("#main").children(1).eq(0).addClass("past");

  function currentDayDisplay() {

  }

  function setInput(event) {
    textInput9.text(localStorage.getItem("hour9"));
    textInput10.text(localStorage.getItem("hour10"));
    textInput11.text(localStorage.getItem("hour11"));
  }


  // saveBtn onlclick event (save the input data)
  $('.saveBtn').on('click', function() {
   var value = $(this).siblings('.description').val();
   var time = $(this).parent().attr("id");
   console.log(value);
   console.log(time);

   setInput();
  }
)
});
