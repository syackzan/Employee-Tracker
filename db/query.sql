-- QUERY TO GET ALL DEPARTMENTS --
SELECT * FROM departments;

-- QUERY TO RETURN ROLE ID, TITLE, DEPARTMENT, SALARY --
SELECT role.id AS ID, role.title AS Title, departments.name AS Department, role.salary AS salary
FROM role
JOIN departments ON role.departments_id = departments.id