-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema adote-seu-pet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema adote-seu-pet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `adote-seu-pet` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `adote-seu-pet` ;

-- -----------------------------------------------------
-- Table `adote-seu-pet`.`pets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `adote-seu-pet`.`pets` (
  `petId` INT NOT NULL AUTO_INCREMENT,
  `petName` VARCHAR(255) NOT NULL,
  `petAge` VARCHAR(255) NOT NULL,
  `petSex` VARCHAR(1) NOT NULL,
  `petRace` VARCHAR(100) NOT NULL,
  `petLatitude` DECIMAL(8,6) NOT NULL,
  `petLongitude` DECIMAL(9,6) NOT NULL,
  PRIMARY KEY (`petId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `adote-seu-pet`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `adote-seu-pet`.`usuario` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `userEmail` VARCHAR(255) NOT NULL,
  `userPassword` VARCHAR(255) NOT NULL,
  `userSex` VARCHAR(1) NOT NULL,
  `userLatitude` DECIMAL(8,6) NOT NULL,
  `userLongitude` DECIMAL(9,6) NOT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
