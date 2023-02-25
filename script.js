$(document).ready(function () {
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  var currentDay = $("#currentDay");
  var value = "";
  var time = "";

  let savedData = [];

  $('.saveBtn').on('click', function() {
    let data = {
      time: $(this).parent().attr("id"),
      value: $(this).siblings('.description').val(),
    }
    savedData.push(data);
    localStorage.setItem("savedData", JSON.stringify(savedData));
  });


  $("#resetBtn").on("click", function() {
    $(localStorage.clear());
    location.reload();
  });

  setInterval(function() {
    time = dayjs().format('dddd, MMMM D YYYY, HH:mm:ss');
    $(currentDay.text(time));
  }, 1000);

  function displayData() {
    for(var i=9; i <17; i++) {
      //localStorage.getItem(time, value);
    }
  };

  function colorCode() {

      var currentTime = dayjs().hour();
  
      $(".time-block").each(function() {
          var selectedTime = parseInt($(this).attr("id").split("hour")[1]);
  
          if (selectedTime < currentTime) {
              $(this).addClass("past");
          }
          else if (selectedTimee === currentTime) {
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
    displayData();
    colorCode();

});
