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
  

  var currentDay = $("#currentDay");
  var today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  
  var saveBtn = $("#saveBtn");
  /*
  var past = $("#past");
  var present = $("#present");
  var future = $("#future");
  */
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

// load display
  display();
  function display() {
    textInput9.text(saved9);
    textInput10.text(saved10);
    textInput11.text(saved11);
    // toggle the background colors based upon past/present/future
    $(currentDay.text(today));

  }
  // upon click event, saves local storage data
  $('.saveBtn').on('click', function() {
    time = $(this).parent().attr("id");
    value = $(this).siblings('.description').val();
    
    console.log(value);
    console.log(time);
    
  
  if(time === "hour-9") {
    localStorage.setItem("saved9", value);
    console.log(saved9);
  } else
  if(time === "hour-10") {
    localStorage.setItem("saved10", value);
    console.log(saved10);
  } else
  if(time === "hour-11") {
    localStorage.setItem("saved11", value);
    console.log(saved11);
  }
  display();
  });
  //clearData();
  //function clearData() {
   // localStorage.clear();
 // }

});


 /*if(!$(value).val()) {
    alert("hi");
    return false;
  } else($(value).val()) {
    return true;
  }
*/