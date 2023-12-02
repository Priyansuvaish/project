create database AcademicERP;
CREATE DATABASE IF NOT EXISTS AcademicERP;
use AcademicERP;

DROP TABLE IF EXISTS domain,
			   student,
                     employee;
create table domain (
    domain_id int not null auto_increment,
    program varchar(255) not null,
    batch varchar(255) not null,
    capacity int not null,
    qualification varchar(255),
    primary key (domain_id)
);

create table student (
    student_id int not null auto_increment,
    roll_number varchar(20) not null unique,
    first_name varchar(255) not null,
    last_name varchar(255),
    email varchar(255) not null unique,
    photograph_path varchar(255),
    cgpa float not null default 0.0,
    total_credits float not null,
    graduation_year int,
    domain int,
    placement_id int default 0,
    specialisation int default 0,
    PRIMARY KEY (student_id)
);


create table empolyee (
    empolyee_id int not null auto_increment,
    first_name varchar(255) not null,
    last_name varchar(255),
    email varchar(255) not null unique,
    title varchar(255),
    photograph_path varchar(255),
    departement int,
    password varchar(255) not null,
    primary key (empolyee_id)
);


insert into employee( first_name, last_name, email, title, photograph_path, departement, password) values
('Priyanshu','Vaish','priyanshu@gmail.com','Mr.','101', 'priyanshu'),
('Rahul', 'Sharma', 'rahul@example.com', 'Mr.', 101, 'password123'),
('Priya', 'Patel', 'priya@example.com', 'Ms.', 102, 'securepwd456'),
('Amit', 'Singh', 'amit@example.com', 'Mr.', 101, 'strongpass789'),
('Neha', 'Gupta', 'neha@example.com', 'Ms.',  103, 'safePWD@2023'),
('Kavita', 'Reddy', 'kavita@example.com', 'Mrs.', 102, 'kavitapass!'),
('Vikram', 'Rao', 'vikram@example.com', 'Mr.',  103, 'vikram2023');


insert into domain(batch, capacity, program, qualification) values
('2023', 180, 'iM.Tech CSE', 'School'),
('2023', 150, 'iM.Tech ECE', 'School'),
('2023', 180, 'M.Tech CSE', 'Graduation'),
('2023', 30, 'M.Tech ECE', 'Graduation'),
('2023', 30, 'M.Sc. DT', 'Bachelors'),
('2023', 20, 'PHD', 'Masters');


insert into student (first_name,last_name,email,total_credits,cgpa,graduation_year,roll_number,domain) values
('Priyanshu' , 'Vaish' , 'Priyanshu.Vaish@iiitb.ac.in' , 16.0 , 3.3 , 2025 , 1,2),
('Yash' , 'Pandey' , 'Yash.Pandey@iiitb.ac.in' , 16.0 , 3.43 , 2025 , 4,1),
('Anuj' , 'Yadav' , 'Anuj.Yadav@iiitb.ac.in' , 16.0 , 3.73 , 2025 , 5,3),
('APJ Abdul' , 'Kalam' , 'ApjAbdul.Kalam@iiitb.ac.in' , 16.0 , 2.83 , 2025 , 6,1),
('Abhishek' , 'Pandey' , 'Abhishek.Pandey@iiitb.ac.in' , 16.0 , 3.2 , 2025 , 2,2),
('Yash' , 'Gupta' , 'Yash.Gupta@iiitb.ac.in' , 16.0 , 2.8 , 2025 , 3,1),
('Ratan' , 'Tata' , 'Ratan.Tata@iiitb.ac.in' , 16.0 , 3.83 , 2025 , 7,2),
('Vedansh' , 'Agarwal' , 'Vedansh.Agarwal@iiitb.ac.in' , 16.0 , 3.63 , 2025 , 8,2),
('Rohit' , 'Sharma' , 'Rohit.Sharma@iiitb.ac.in' , 16.0 , 3.63 , 2025 , 9,3),
('Elon' , 'Musk' , 'Elon.Musk@iiitb.ac.in' , 16.0 , 3.63 , 2025 , 10,1);
