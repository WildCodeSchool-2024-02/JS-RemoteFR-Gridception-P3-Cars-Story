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