Pulsd Interview Report
Aishwarya Singh
11 AM July 24 - 11 AM July 26






















Introduction
Hello! Thank you for the opportunity to interview with you today. I hope you enjoy my project. After reading the project description, I first broke it down into tasks that needed to be done. The tasks were in order of completion: create a database to hold event information and decide on the structure of the tables, create a frontend application to input new events into a database, check the database hourly to detect if a new event was added, syndicate that event to 5 similar websites. 

Known Bugs
Unfortunately, I could not get the full project to work together due to the time restraints. However, I approached this project by breaking it into different parts and tackling each one individually to showcase my knowledge and abilities across the board. I outlined my thought process for each parts below and explain what is in each file. 

Similar Websites
Pulsd is a company that has exciting and fun events based in New York City. When I was choosing similar websites, I made sure that the events seemed in line with the type of events Pulsd presents as well as ensuring there was a NYC section. I chose Eventbrite.com, allevents.in, eventful.com, donyc.com, and heylets.com. I looked into what information these sites needed, and made that the basis for my database. 

Database
For my database, each table is an event. The information in the table is EventName, Description, Location, Day, Month, Year, StartTime, and Price. I used MySQL for this part. The script I wrote for this portion is in the pulsdSQL.sql file. I also wrote a script that checks every hour for updates to the database. It returns all new tables that have been created or changed. I assumed that since this was being posted on other event sites, events would be the main table used. If I had more time, I would have added more types of tables to encompass the full range of opportunities available on pulsd. 

FrontEnd
I made a simple html file. It has input boxes for each row of the table. I made a connection to the database using PHP. This information is in the pulsd.html file. Since this section would only be used by admin, it is very straight forward. I ensured that only numbers could be the input for the day, month, year and start time. It would also make it easiest to be inputted into the database and for syndication. I restricted the numbers to be in range for day, month and year, but if I had more time, I would have added a check to make sure the day was in the month’s range. 
JavaScript
After hitting submit, I used ajax and JS to get the information from the html file. It then adds the information to the database. 

Syndication
This was the most challenging part for me of this project. I had experience with the other sections, but syndication was the task that I have not tackled before. I began by doing some research on how syndication works on a higher level. I discovered that using JavaScript is beneficial. From there, I viewed the page source code for each of the websites to see what the JS id is for each of the required fields. I then wrote functions for each site to properly fill in the information. An issue I ran into was trying to figure out what to do if a website required a log in as some do. 

Conclusion
Though the project is not complete, I hope this report has given you insight into my approach and thinking process that would be applied in this role. Thank you again for your consideration. 

