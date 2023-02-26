$(document).ready(function () {
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    var currentDay = $("#currentDay");
    var value = "";
    var time = "";
    var savedData = [
        {
            'Ttime' : "",
            'Vvalue' : ""
        }
    ];

    console.log(localStorage.getItem("localData"));

    displayData();
    colorCode();
  
    function displayData() {
      $("#textInput").each(function() {
       var inputNum = parseInt($(this).attr("id").split("hour-")[1]);
       if(inputNum = time) {
        $(this).text(savedValue);
        }
         //console.log("success");
      })
    };
  
    $('.saveBtn').on('click', function() {
      time = $(this).parent().attr("id").split("hour-");
      value = $(this).siblings('.description').val();

      savedData.push({'Vvalue': value, 'Ttime': time});
  
      localStorage.setItem("localData", JSON.stringify(savedData));
  
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
  