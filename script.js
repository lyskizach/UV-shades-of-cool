$(document).ready(function () {

  var currentDay = $("#currentDay");
  var value = "";
  var time = "";

  displayData();
  colorCode();

  function displayData() {
      $("#hour-9").children(".description").text(localStorage.getItem("value9"));
      $("#hour-10").children(".description").text(localStorage.getItem("value10"));
      $("#hour-11").children(".description").text(localStorage.getItem("value11"));
      $("#hour-12").children(".description").text(localStorage.getItem("value12"));
      $("#hour-13").children(".description").text(localStorage.getItem("value13"));
      $("#hour-14").children(".description").text(localStorage.getItem("value14"));
      $("#hour-15").children(".description").text(localStorage.getItem("value15"));
      $("#hour-16").children(".description").text(localStorage.getItem("value16"));
      $("#hour-17").children(".description").text(localStorage.getItem("value17"));
  };

  $('.saveBtn').on('click', function() {
    time = parseInt($(this).parent().attr("id").split("hour-")[1]);
    value = $(this).siblings('.description').val();

    if(time === 9) {
      localStorage.setItem("value9", value);
    }
    if(time === 10) {
      localStorage.setItem("value10", value);
    }
    if(time === 11) {
      localStorage.setItem("value11", value);
    }
    if(time === 12) {
      localStorage.setItem("value12", value);
    }
    if(time === 13) {
      localStorage.setItem("value13", value);
    }
    if(time === 14) {
      localStorage.setItem("value14", value);
    }
    if(time === 15) {
      localStorage.setItem("value15", value);
    }
    if(time === 16) {
      localStorage.setItem("value16", value);
    }
    if(time === 17) {
      localStorage.setItem("value17", value);
    };
    
    displayData();
  });
 
  $("#resetBtn").on("click", function() {
    localStorage.clear();
    location.reload();
  });

  setInterval(function() {
    time = dayjs().format('dddd, MMMM D YYYY, HH:mm:ss');
    $(currentDay.text(time));
  }, 1000);

  function colorCode() {
      var currentTime = dayjs().hour();
  
      $(".time-block").each(function() {
          var selectedTime = parseInt($(this).attr("id").split("hour-")[1]);
  
          if (selectedTime < currentTime) {
              $(this).addClass("past");
          }
          else if (selectedTime === currentTime) {
              $(this).removeClass("past");
              $(this).addClass("present");
          }
          else {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
          }
      })
    };

});
