CREATE TABLE Students  (
    StudentID int unique,
    FirstName  varchar(255),
    LastName varchar(255),
    Age int,
	University varchar(255),
    City varchar(255)
)


select * from Students
select age from Students
select firstname,Lastname from Students  
select * from Students where  FirstName LIKE 'M%' or FirstName LIKE 'N%';
select * from Students where Firstname <> 'Perviz'
select * from Students where  FirstName LIKE '%u'
select * from Students SET City ='Rome' WHERE StudentID IN (2, 3);
select * from Students where age > 20
select * from Students order by age ASC;
select * from Students order by firstName DESC;
select SUM (age) from Students;
select  min(age)  from Students ;
delete  from Students where StudentID =5;
select  * from Students where FirstName in ('Perviz','Ilkin'); 
select * from Students where age between 22 and 29;
select top 4 * from Students;
drop table Students




insert into Students
values(8,'Perviz','Qarayev',27,'AZTU','Baku')
