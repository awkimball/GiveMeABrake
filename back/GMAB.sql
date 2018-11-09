Create Database GMAB;
show databases;
use GMAB;
show tables;
  
  
CREATE TABLE `gmab`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(64) NULL,
  `email` VARCHAR(64) NULL,
  `password` VARCHAR(64) NULL,
  'phone' VARCHAR(10) NULL,
  `zipcode` INT(5) NULL,
  `account_type` INT NULL DEFAULT 0,
  PRIMARY KEY (`idusers`));

CREATE TABLE `gmab`.`vehicle` (
  `idusers` INT NOT NULL,
  `vin` VARCHAR(17) NOT NULL DEFAULT 'XXXXXXXXXXXXXXXXX',
  `make` VARCHAR(45) NULL,
  `model` VARCHAR(45) NULL,
  `year` INT NOT NULL,
  `miles` INT NULL,
  `tire_rotation_miles` INT NULL,
  `oil_change_miles` INT NULL,
  `transmission_check_miles` INT NULL,
  `last_inspection_date` DATETIME NULL DEFAULT NULL,
  `general_description` VARCHAR(500) NULL,
  PRIMARY KEY (`idusers`));

CREATE TABLE `gmab`.`shopowner` (
  `idusers` INT NOT NULL,
  `gas_price` INT NULL,
  `address` VARCHAR(256) NULL,
  `shop_email` VARCHAR(64) NULL,
  `shop_name` VARCHAR(64) NULL,
  `description` VARCHAR(500) NULL,
  PRIMARY KEY (`idusers`));

CREATE TABLE `gmab`.`zip` (
  `zipcode` INT(6) NOT NULL DEFAULT 0,
  `longitude` INT NULL,
  `latitude` INT NULL,
  PRIMARY KEY (`zipcode`));
  
  CREATE TABLE `gmab`.`deals` (
  `idusers` INT NOT NULL,
  `price` FLOAT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(500) NULL,
  PRIMARY KEY (`idusers`));
