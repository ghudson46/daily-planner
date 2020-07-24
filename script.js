$(document).ready(function() {
  // display current date on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // listen for save button clicks

  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:', value);
    console.log('time:', time);

    // save the value in localStorage as time
    localStorage.setItem(value, time); //stores the value and time in the local storage
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours(); //gets the current hour by grabbing the current moment (mount day year hours minutes seconds) and just grabbing the hour
    console.log('current hour:', currentHour);

    // loop over time blocks
    $(".time-block").each(function() { //runs the function for each time block 9am - 5pm
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      console.log("block hour:", blockHour);

      // check if we've moved past this time
      if (currentHour > blockHour) {
        $(this).addClass('past'); //if current time is greater than the time in the block, the text area turns gray
      } else if (currentHour === blockHour) {
        $(this).addClass('present'); //if current time is the same as the time in the block, the text area turns red
        } else {
          $(this).addClass('future'); //if the current time is less than the block, the text turns red
        };
      })
    };
    hourUpdater();
  })

  

  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds
  setInterval(function() {
    hourUpdater();
  }, 1500
  );

  // load any saved data from localStorage
  let getData = JSON.parse(localStorage.getItem(value));



