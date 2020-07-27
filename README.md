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

![page image](https://user-images.githubusercontent.com/63625541/88508403-bc60b380-cfac-11ea-8705-af0b61eb2366.png)

### Code
an event listener listens for save button clicks and stores the inputed value and time into variables that are saved on local storage.

![save button](https://user-images.githubusercontent.com/63625541/88508420-c5518500-cfac-11ea-8feb-2a62f561e527.png)
![input](https://user-images.githubusercontent.com/63625541/88508408-bff43a80-cfac-11ea-877a-5163291cc268.png)
![local storage](https://user-images.githubusercontent.com/63625541/88508411-c2569480-cfac-11ea-8d56-627dd3e1bbbc.png)



in the hourUpdater function, the current time is stored, time block hours are turned into integers and a loop is created to check whether or not a time block is in the past, present or future, calling on or removing classes to display the appropriate colors. User input which has been saved is pulled to display inside the time blocks. 



Lastly, I made an interval function that is a timer that executes the hourUpdater function every 15 seconds so that the time check is kept up to date. 

![code remaiinder](https://user-images.githubusercontent.com/63625541/88508427-c71b4880-cfac-11ea-8e87-14799f33ef71.png)






## Credits
[W3Schools](https://w3schools.com)

