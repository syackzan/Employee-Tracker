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
CONCAT(manager.first_name, " ", manager.last_name) AS Manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN departments ON role.departments_id = departments.id
LEFT JOIN employee manager ON manager.id = employee.manager_id

-- QUERY FOR ADDING A DEPARTMENT --
INSERT INTO departments (name)
VALUES (?)

-- QUERY FOR ADDING A ROLE --
INSERT INTO role (title, salary, department_id) 
VALUES (?, ?, ?)

-- QUERY FOR ADDING AN EMPLOYEE --
INSERT INTO employees (first_name, last_name, role, manager_id) 
VALUES (?, ?, ?, ?)

-- QUERY FOR UPDATING AN EMPLOYEE --
SELECT employee.first_name AS First, employee.last_name AS Last_Name
FROM employee

UPDATE employee SET role_id = ? WHERE id = ?
