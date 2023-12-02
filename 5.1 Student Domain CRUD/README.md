# Student Domain CRUD System

The Student Domain CRUD System is designed to streamline administrative tasks within the education department. It offers a platform to manage domains, their capacities, necessary qualifications, and provides a view of students associated with specific domains. The system ensures efficient data management and user access control for authorized personnel.

## Implementation

### Frontend Technologies

- HTML
- CSS
- JavaScript

### Backend Technologies

- MySQL
- Spring Boot

## UML Diagram of the Database

### Domain Table

| Attributes     | Type         | NULL | KEY     | EXTRA            |
|----------------|--------------|------|---------|------------------|
| domain_id      | int          | NO   | PRIMARY | auto_increment   |
| program        | varchar(255) | NO   |         |                  |
| batch          | varchar(255) | NO   |         |                  |
| capacity       | int          | NO   |         |                  |
| qualification  | varchar(255) | YES  |         |                  |

### Employee Table

| Attributes        | Type         | NULL | KEY     | EXTRA            |
|-------------------|--------------|------|---------|------------------|
| department        | int          | YES  |         |                  |
| email             | varchar(255) | NO   | UNIQUE  |                  |
| employee_id       | int          | NO   | PRIMARY | auto_increment   |
| first_name        | varchar(255) | NO   |         |                  |
| last_name         | varchar(255) | YES  |         |                  |
| password          | varchar(255) | NO   |         |                  |
| photograph_path   | varchar(255) | YES  |         |                  |
| title             | varchar(255) | YES  |         |                  |

### Student Table

| Attributes         | Type         | NULL | KEY     | EXTRA            |
|--------------------|--------------|------|---------|------------------|
| student_id         | int          | NO   | PRIMARY | auto_increment   |
| roll_number        | varchar(20)  | NO   | UNIQUE  |                  |
| first_name         | varchar(255) | NO   |         |                  |
| last_name          | varchar(255) | YES  |         |                  |
| email              | varchar(255) | NO   | UNIQUE  |                  |
| photograph_path    | varchar(255) | YES  |         |                  |
| cgpa               | float        | NO   |         |                  |
| total_credits      | float        | NO   |         |                  |
| graduation_year    | int          | YES  |         |                  |
| domain             | int          | YES  | FOREIGN |                  |
| placement_id       | int          | YES  |         |                  |
| specialization     | int          | YES  |         |                  |

## Functionalities

### Employee Login

Allows authorized admin department employees to securely access the system.

### Add and Modify Domains

Permits addition and modification of domain details including name, capacity, and required qualifications. To add a domain, click the "Add Domain" button and enter the required data. Click the “Submit" button to add the domain.

### View Students by Domain

Enables the display of students associated with a specific domain. 
