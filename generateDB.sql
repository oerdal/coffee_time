-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema coffeeDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema coffeeDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS coffeeDB DEFAULT CHARACTER SET utf8 ;
USE coffeeDB ;

-- -----------------------------------------------------
-- Table coffeeDB.`drinks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS coffeeDB.`drinks` (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NULL DEFAULT NULL,
  price DOUBLE NULL DEFAULT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  updated_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table coffeeDB.`ingredients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS coffeeDB.`ingredients` (
  id INT(11) NOT NULL AUTO_INCREMENT,
  drink_id INT(11) NOT NULL,
  details VARCHAR(255) NULL DEFAULT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  updated_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id),
  INDEX fk_ingredients_drinks1_idx (drink_id ASC),
  CONSTRAINT fk_ingredients_drinks1
    FOREIGN KEY (drink_id)
    REFERENCES coffeeDB.`drinks` (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table coffeeDB.`stores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS coffeeDB.`stores` (
  id INT(11) NOT NULL,
  area code INT(11) NULL DEFAULT NULL,
  store_number INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table coffeeDB.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS coffeeDB.`users` (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NULL DEFAULT NULL,
  user_name VARCHAR(255) NULL DEFAULT NULL,
  password VARCHAR(255) NULL DEFAULT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  updated_at DATETIME NULL DEFAULT NULL,
  user_type VARCHAR(255) NULL DEFAULT NULL,
  stores_id INT(11) NULL,
  PRIMARY KEY (id),
  INDEX fk_users_stores1_idx (stores_id ASC),
  CONSTRAINT fk_users_stores1
    FOREIGN KEY (stores_id)
    REFERENCES coffeeDB.`stores` (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table coffeeDB.`payment_information`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS coffeeDB.`payment_information` (
  id INT(11) NOT NULL AUTO_INCREMENT,
  card_number INT(11) NULL DEFAULT NULL,
  csv_number INT(11) NULL DEFAULT NULL,
  expiration_date DATETIME NULL DEFAULT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  updated_at DATETIME NULL DEFAULT NULL,
  user_id INT(11) NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_payment_information_users1_idx (user_id ASC),
  CONSTRAINT fk_payment_information_users1
    FOREIGN KEY (user_id)
    REFERENCES coffeeDB.`users` (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table coffeeDB.`users_drinks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS coffeeDB.`users_drinks` (
  user_id INT(11) NOT NULL,
  drink_id INT(11) NOT NULL,
  barista_id INT(11) NULL DEFAULT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  updated_at DATETIME NULL DEFAULT NULL,
  store_id INT(11) NOT NULL,
  INDEX fk_users_drinks_users_idx (user_id ASC),
  INDEX fk_users_drinks_drinks1_idx (drink_id ASC),
  INDEX fk_users_drinks_users1_idx (barista_id ASC),
  INDEX fk_users_drinks_stores1_idx (store_id ASC),
  CONSTRAINT fk_users_drinks_drinks1
    FOREIGN KEY (drink_id)
    REFERENCES coffeeDB.`drinks` (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_users_drinks_users
    FOREIGN KEY (user_id)
    REFERENCES coffeeDB.`users` (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_users_drinks_users1
    FOREIGN KEY (barista_id)
    REFERENCES coffeeDB.`users` (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_users_drinks_stores1
    FOREIGN KEY (store_id)
    REFERENCES coffeeDB.`stores` (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;