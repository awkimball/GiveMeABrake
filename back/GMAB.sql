Create Database GMAB;
show databases;
use GMAB;
show tables;
  
  
CREATE TABLE `gmab`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `zipcode` INT NULL,
  `account_type` INT NULL,
  PRIMARY KEY (`idusers`));

CREATE TABLE `gmab`.`vehicle` (
  `idusers` INT NOT NULL,
  `vid` INT NULL,
  `make` VARCHAR(45) NULL,
  `model` VARCHAR(45) NULL,
  `year` INT NULL,
  `miles` INT NULL,
  `tire_rotation_miles` INT NULL,
  `tire_change_miles` INT NULL,
  `transmission_check_miles` INT NULL,
  `last_inspection_date` DATETIME NULL DEFAULT NULL,
  `general_description` VARCHAR(500) NULL,
  PRIMARY KEY (`idusers`));

CREATE TABLE `gmab`.`shopowner` (
  `idusers` INT NOT NULL,
  `shop_email` VARCHAR(45) NULL,
  `shop_name` VARCHAR(45) NULL,
  `description` VARCHAR(500) NULL,
  PRIMARY KEY (`idusers`));

CREATE TABLE `gmab`.`zip` (
  `zipcode` INT NOT NULL,
  `longitude` INT NULL,
  `latitude` INT NULL,
  PRIMARY KEY (`zipcode`));