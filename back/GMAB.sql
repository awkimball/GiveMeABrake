Create Database GMAB;
show databases;
use GMAB;
show tables;
  
  
CREATE TABLE `gmab`.`users` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `zipcode` INT NULL,
  `account_type` INT NULL,
  PRIMARY KEY (`iduser`));

CREATE TABLE `gmab`.`vehicles` (
  `vin` INT NOT NULL,
  `iduser` INT NULL,
  `make` VARCHAR(45) NULL,
  `model` VARCHAR(45) NULL,
  `year` INT NULL,
  `miles` INT NULL,
  `tire_rotation_miles` INT NULL,
  `oil_change_miles` INT NULL,
  `transmission_check_miles` INT NULL,
  `last_inspection_date` DATETIME NULL,
  `general_description` VARCHAR(500) NULL,
  PRIMARY KEY (`vin`));

CREATE TABLE `gmab`.`shops` (
  `idshop` INT NOT NULL AUTO_INCREMENT,
  `iduser` INT NULL,
  `gas_price` INT NULL,
  `address` VARCHAR(256) NULL,
  `shop_email` VARCHAR(45) NULL,
  `shop_name` VARCHAR(45) NULL,
  `description` VARCHAR(500) NULL,
  PRIMARY KEY (`idshop`));

CREATE TABLE `gmab`.`zips` (
  `zipcode` INT NOT NULL,
  `longitude` DOUBLE NULL,
  `latitude` DOUBLE NULL,
  PRIMARY KEY (`zipcode`));
  
  CREATE TABLE `gmab`.`deals` (
  `iddeal` INT NOT NULL AUTO_INCREMENT,
  `idshop` INT NULL,
  `price` FLOAT NULL,
  `notify` BOOLEAN,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(500) NULL,
  PRIMARY KEY (`iddeal`));
  
  CREATE TABLE `gmab`.`reviews` (
  `idreview` INT NOT NULL AUTO_INCREMENT,
  `idshop` INT NULL,
  `iduser` INT NULL,
  `comment` VARCHAR(256) NULL,
  `rating` INT NULL,
  PRIMARY KEY (`idreview`));
               
 CREATE TABLE `gmab`.`favorites` (
  `iduser` INT NOT NULL,
  `idshop` INT NOT NULL,
  PRIMARY KEY (`iduser`));



  
  