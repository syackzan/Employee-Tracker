-- QUERY TO GET ALL DEPARTMENTS --
SELECT * FROM departments;

-- QUERY TO RETURN ROLE ID, TITLE, DEPARTMENT, SALARY --
SELECT role.id AS ID, role.title AS Title, departments.name AS Department, role.salary AS salary
FROM role
JOIN departments ON role.departments_id = departments.id

-- QUERY TO RETURN ALL EMPLOYEE INFORMATION --
SELECT employee.id AS ID, 
employee.first_name AS First_Name, 
employee.last_name AS Last_Name,
role.title AS Title,
departments.name AS Department,
role.salary AS Salary,
employee.manager_id AS Manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN departments ON role.departments_id = departments.id;

-- QUERY FOR ADDING A DEPARTMENT --
INSERT INTO departments (name)
VALUES (?)