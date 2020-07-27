# Daily Planner

## Objective 

create a work day scheduler with color coded input boxes that hold time blocks. The scheduler must also save scheduled events to the local storage

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


## links
[App Link](https://ghudson46.github.io/daily-planner/)
[Github Link](https://github.com/ghudson46/daily-planner)

![image]()

### Code
an event listener listens for save button clicks and stores the inputed value and time into variables that are saved on local storage.

![image clickListen](https://user-images.githubusercontent.com/66426144/88464825-d3f44b00-ce8b-11ea-865e-259e2decdb7e.png)
![image storage](https://user-images.githubusercontent.com/66426144/88465108-26366b80-ce8e-11ea-9012-946ae4bab8b6.png)

in the hourUpdater function, the current time is stored, time block hours are turned into integers and a loop is created to check whether or not a time block is in the past, present or future, calling on or removing classes to display the appropriate colors. User input which has been saved is pulled to display inside the time blocks. 

![image]()
![image]()

Lastyl, I made an interval function that is a timer that executes the hourUpdater function every 15 seconds so that the time check is kept up to date. 







## Credits
[W3Schools](https://w3schools.com)

