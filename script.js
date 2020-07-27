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
    localStorage.setItem(time, JSON.stringify(value)); //stores the value and time in the local storage
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours(); //gets the current hour by grabbing the current moment (mount day year hours minutes seconds) and just grabbing the hour
    console.log('current hour:', currentHour);

    // loop over time blocks
    $(".time-block").each(function() { //runs the function for each time block 9am - 5pm
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      console.log("block hour:", blockHour);

      var id = $(this).attr("id");

      //load from local storage
      var savedData = JSON.parse(localStorage.getItem(id));

      if (savedData != null) {
        $(this).children(".description").val(savedData);
      }

      // check if we've moved past this time
      if (currentHour > blockHour) {
        $(this).addClass('past'); //if current time is greater than the time in the block, the text area turns gray
      } else if (currentHour == blockHour) {
        $(this).removeClass('past'); //remove past class
        $(this).addClass('present'); //if current time is the same as the time in the block, the text area turns red
        } else {
          $(this).removeClass('past');//remove past class
          $(this).removeClass('preset'); //remove present class
          $(this).addClass('future'); //if the current time is less than the block, the text turns red
        };
      });
    }

  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds
  function interval() {
    setTimeout(interval, 1000*15);
    hourUpdater();
  }
  interval();

});
  



