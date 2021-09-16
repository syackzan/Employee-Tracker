INSERT INTO departments (name)
VALUES ("Executive Department"),
       ("Financial Department"),
       ("Engineering Department"),
       ("Sales Department"),
       ("Project Management Department")

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 150000, 1),
       ("CFO", 120000, 2),
       ("CTO", 130000, 3),
       ("CSO", 130000, 4),
       ("Project Manager", 90000, 5),
       ("Project Engineer", 75000, 5)

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Clark", "Kent", 1),
       ("Edwards", "Space", 2),
       ("Charles", "Bast", 3),
       ("Eli", "Donalds", 4),
       ("Gregory", "Mitchell", 5),
       ("Stewart", "Stalwart", 6)
