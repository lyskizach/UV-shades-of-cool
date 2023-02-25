$(document).ready(function () {
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  var currentDay = $("#currentDay");

  var hour9 = $("#hour-9");
  var hour10 = $("#hour-10");
  var hour11 = $("#hour-11");

  var textInput9 = $("#textInput9");
  var textInput10 = $("#textInput10");
  var textInput11 = $("#textInput11");
  
  var saved9 = localStorage.getItem("saved9");
  var saved10 = localStorage.getItem("saved10");
  var saved11 = localStorage.getItem("saved11");

  var value = "";
  var time = "";

  display();

  $("#resetBtn").on("click", function() {
    $(localStorage.clear());
    location.reload();
  });

  setInterval(function() {
    time = dayjs().format('dddd, MMMM D YYYY, HH:mm:ss');
    $(currentDay.text(time));

  }, 1000);

  function display() {
    $(textInput9.text(saved9));
    $(textInput10.text(saved10));
    $(textInput11.text(saved11));
    
    var currentHour = dayjs().hour();
    //console.log(currentHour);
    if(currentHour === 9){
      $(hour9).addClass("present");
      $(hour9).removeClass("past");
    }
    if(currentHour < 9){
      $(hour9).removeClass("past");
      $(hour9).removeClass("present");
      $(hour9).addClass("future");
    }
    if(currentHour > 9) {
      $(hour9).addClass("past");
      $(hour9).removeClass("present");
      $(hour9).removeClass("future");
    }
    if(currentHour === 10){
      $(hour10).addClass("present");
      $(hour10).removeClass("past");
      $(hour10).removeClass("future");
    }
    if(currentHour < 10){
      $(hour10).removeClass("past");
      $(hour10).removeClass("present");
      $(hour10).addClass("future");
    }
    if(currentHour > 10) {
      $(hour10).addClass("past");
      $(hour10).removeClass("present");
      $(hour10).removeClass("future");
    }
    if(currentHour === 11){
      $(hour11).removeClass("past");
      $(hour11).addClass("present");
      $(hour11).removeClass("future");
    }
    if(currentHour < 11){
      $(hour11).addClass("future");
      $(hour11).removeClass("past");
      $(hour11).removeClass("present");
    }
    if(currentHour > 11) {
      $(hour11).addClass("past");
      $(hour11).removeClass("present");
      $(hour11).removeClass("future");
    }
  };
// location.reload();
  // make storage data on separate element to display and clear input field each click

  $('.saveBtn').on('click', function() {
    if(!value) {
      alert("You must type something")
      return;
    }
    time = $(this).parent().attr("id");
    value = $(this).siblings('.description').val();

  if(time === "hour-9") {
    localStorage.setItem("saved9", JSON.stringify(value));
    //console.log(saved9);
  } else
  if(time === "hour-10") {
    localStorage.setItem("saved10", JSON.stringify(value));
    //console.log(saved10);
  } else
  if(time === "hour-11") {
    localStorage.setItem("saved11", JSON.stringify(value));
    //console.log(saved11);
  }
  location.reload();
  });

});