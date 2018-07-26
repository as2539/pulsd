/* Create Database pulsd*/
CREATE DATABASE pulsd;

/* Create Tables*/
CREATE TABLE Events (
    EventName varchar(255),
    Description varchar(255),
    Location varchar(255),
    Day int,
    Month int,
    Year int,
    StartTime int,
    Price int
);

/*Return tables added in past hour*/
SELECT *
FROM `pulsd`.`TABLES`
WHERE
    DATE_SUB(NOW(), INTERVAL 1 HOUR) < `UPDATE_TIME`