create table user (
    id int unsigned primary key auto_increment not null,
    email varchar(255) not null unique,
    password varchar(255) not null
);

CREATE TABLE `Brand` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Fuel_Type` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `recharging` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `cars_id` int(11) NOT NULL,
    `date_time_start` datetime NOT NULL,
    `date_time_end` datetime NOT NULL,
    `kilowatt_hour` decimal(10, 2) NOT NULL,
    `cost` decimal(10, 2) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `cars_id` (`cars_id`),
    CONSTRAINT `recharging_ibfk_1` FOREIGN KEY (`cars_id`) REFERENCES `cars` (`id`)
);

CREATE TABLE `cars` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `Model` varchar(255) NOT NULL,
    `year` int(11) NOT NULL,
    `mileage` int(11) NOT NULL,
    `price` int(11) NOT NULL,
    `picture` varchar(255) DEFAULT NULL,
    `brand_id` int(11) NOT NULL,
    `fuel_type_id` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `brand_id` (`brand_id`),
    KEY `fuel_type_id` (`fuel_type_id`),
    CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
    CONSTRAINT `cars_ibfk_2` FOREIGN KEY (`fuel_type_id`) REFERENCES `fuel_type` (`id`)
);


CREATE TABLE vehicle_owners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(20)
);

CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  owner_id INT NOT NULL,
  make VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  license_plate VARCHAR(20) NOT NULL UNIQUE,
  FOREIGN KEY (owner_id) REFERENCES vehicle_owners(id)
);

CREATE TABLE inspections (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vehicle_id INT NOT NULL,
  inspection_date DATE NOT NULL,
  mileage INT NOT NULL,
  status ENUM('passed', 'failed') NOT NULL,
  notes TEXT,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
);


CREATE TABLE inspection_details (
  inspection_id INT NOT NULL,
  point_id INT NOT NULL,
  result ENUM('passed', 'failed') NOT NULL,
  comments TEXT,
  PRIMARY KEY (inspection_id, point_id),
  FOREIGN KEY (inspection_id) REFERENCES inspections(id),
  FOREIGN KEY (point_id) REFERENCES inspection_points(id)
);

CREATE TABLE chat_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    TCHAT TEXT,
    itchat_commentaire TEXT,
    `Tell me and chat (With respect)` TEXT
);

CREATE TABLE tuning_projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  car_model_id INT NOT NULL,
  tuning_shop_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  FOREIGN KEY (car_model_id) REFERENCES car_models(id),
  FOREIGN KEY (tuning_shop_id) REFERENCES tuning_shops(id)
);


CREATE TABLE tuning_shops (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(200) NOT NULL,
  contact_person VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE suppliers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(200) NOT NULL,
  contact_person VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);



INSERT INTO chat_table (TCHAT, itchat_commentaire, `Tell me and chat (With respect)`)
VALUES ('Texte du tchat', 'Commentaire sur le tchat', 'Texte avec respect');


INSERT INTO users (id_name, username, mail, password)
VALUE ('jhonson jhonson', 'jhonsonjhonson', 'jhonson.jhonson@example.com' , 'password123');
INSERT INTO users (id_name, username, mail, password)
VALUE ('tim smith', 'timsmith', 'tim.smith@example.com', 'password456');


INSERT INTO 'item' ('title', 'user_id') VALUES ('item 1', 1);
INSERT INTO 'item' ('title', 'user_id') VALUES ('item 2', 2);


INSERT INTO 'brand' ('name') VALUES ('brand 1');
INSERT INTO 'brand' ('name') VALUES ('brand 2');
INSERT INTO 'brand' ('name') VALUES ('brand 3');


INSERT INTO 'fuel_type' ('name') VALUES ('essence');
INSERT INTO 'fuel_type' ('name') VALUES ('diesel');
INSERT INTO 'fuel_type' ('name') VALUES ('electrique');
INSERT INTO 'fuel_type' ('name') VALUES ('hybride');


INSERT INTO 'recharging' ('cars_id', 'date_time_start', 'date_time_end', 'kilowatt_hour', 'cost')
VALUES (1, '2023-06-13 09:00:00', '2023-06-13 11:30:00', 25.50, 8.92);

INSERT INTO 'recharching' ('cars_id', 'date_time_start', 'date_time_end', 'kilowatt_hour', 'cost')
VALUES (2, '2023-06-12 14:15:00', '2023-06-12 16:45:00', 18.75, 6.56);

INSERT INTO 'recharching' ('cars_id', 'date_time_start', 'date_time_end', 'kilowatt_hour', 'cost')
VALUES (3, '2023-06-10 18:30:00', '2023-06-10 20:00:00', 12.20, 4.27);


INSERT INTO cars (model, year, mileage, price, picture, brand_id, fuel_type_id)
VALUES  (model A, 2020, 25000, 20000, 'model_a.jpg', 1, 1);

INSERT INTO cars (model, year, mileage, price, picture, brand_id, fuel_type_id)
VALUES (model B, 2018, 40000, 15000, 'model_b.jpg', 1, 2);

INSERT INTO cars (model, year, mileage, price, picture, brand_id, fuel_type_id)
VALUES (model C, 2023, 9000, 50000, 'model_c.jpg', 1, 3);


INSERT INTO vehicule_owners (first_name, last_name, email, phone)
VALUES ('jhonson', 'jhonson', 'jhonson.jhonson@example.com', '123_456_789'),
       ('tim', 'smith', 'tim.smith@example.com', '555-555-555');


INSERT INTO vehicules (owner_id, make, model, year, licence_plate) 
VALUES (1, 'BMW', 'x6', 2021, 'ABC123'); 


INSERT INTO inspection (vehicule_id, inspection_date, mileage, status, notes)
VALUES (1, '2023-06-12', 140000, 'passed', 'no major default');

INSERT INTO inspection (vehicule_id, inspection_date, mileage, status, notes)
VALUES (2, '2023-06-10', 100000, 'failed', 'brakes to change');

INSERT INTO inspection (vehicule_id, inspection_date, mileage, status, notes)
VALUES (3, '2023-06-01', 55890, 'passed', NULL);

INSERT INTO inspection_details (inspection_id, point_id, result, comments)
VALUES (1,1, 'failed', 'rust found on the frame.'),
       (1,2, 'passed', 'no issues found.'),
       (1,3, 'passed', 'tires are in good condition.');


INSERT INTO tuning_pojects (car_model_id, tuning_shop_id, start_date, end_date)
VALUES (1,1, '2023-03-01', '2024-01-10'),
       (2,2, '2020-05-07', '2020-08-20'),
       (3,1, '2023-11-20', NULL);


INSERT INTO car_modifications (car_id, modification_type, modification_description, cost)
VALUES
  (1, 'Suspension', 'Lowered the car by 2 inches and installed new shocks and springs.', 1500.00),
  (1, 'Exhaust', 'Installed a new cat-back exhaust system with a custom muffler.', 1000.00),
  (2, 'Wheels', 'Installed new 18-inch wheels with low-profile tires.', 2000.00),
  (3, 'Engine', 'Installed a new turbocharger and upgraded the fuel injectors and intercooler.', 5000.00);


INSERT INTO family_cars (family_id, car_model_id, purchase_date)
VALUES (1, 2, '2022-03-15');

INSERT INTO family_cars (family_id, car_model_id, purchase_date)
VALUES (3, 4, '2021-09-20');

