INSERT INTO departments (name)
VALUES ("Executive Department"),
       ("Financial Department"),
       ("Engineering Department"),
       ("Sales Department"),
       ("Project Management Department");

DROP TABLE IF EXISTS role;
INSERT INTO role (title, salary, departments_id)
VALUES ("Chief Executive Officer", 150000, 1),
	("Executive Assistant", 60000, 1),
       ("Chief Financial Officer", 120000, 2),
       ("Account Analyst", 80000, 2),
       ("Chief Technologies Officer", 130000, 3),
       ("THE IT GUY", 25000, 3),
       ("Chief Sales Officer", 130000, 4),
       ("Sales Manager", 65000, 4),
       ("Project Manager", 90000, 5),
       ("Project Engineer", 75000, 5);

DROP  TABLE IF EXISTS employee;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Clark", "Kent", 1, NULL),
       ("Stacy", "Cruz", 2, 1),
       ("Edwards", "Space", 3, NULL),
       ("Steve", "Cullen", 4, 3),
       ("Megan", "Bast", 5, NULL),
       ("Eli", "Donalds", 6, 5),
       ("Gregory", "Mitchell", 7, NULL),
       ("Stewart", "Stalwart", 8, 7),
       ("John", "Stanza", 9, NULL),
       ("Carol", "Eslz", 10, 9);

