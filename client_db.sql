-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: movie_ticket
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Transaction`
--

DROP TABLE IF EXISTS `Transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(512) NOT NULL,
  `theatre_name` varchar(512) NOT NULL,
  `show_dt` datetime NOT NULL,
  `show_time` varchar(512) NOT NULL,
  `booking_status` varchar(512) NOT NULL,
  `booked_email` varchar(512) DEFAULT NULL,
  `seat_no` varchar(512) NOT NULL,
  `city` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Transaction`
--

LOCK TABLES `Transaction` WRITE;
/*!40000 ALTER TABLE `Transaction` DISABLE KEYS */;
INSERT INTO `Transaction` VALUES (3,'master','Sathyam','2021-03-07 12:00:00','11:30','booked',NULL,'A1','chennai'),(4,'master','Sathyam','2021-03-07 12:00:00','11:30','open',NULL,'A2','chennai'),(5,'master','Sathyam','2021-03-07 12:00:00','11:30','booked',NULL,'A3','chennai'),(6,'master','Sathyam','2021-03-07 12:00:00','11:30','booked','eb9f5edd-ce44-4218-90b5-42ff58221c57','A4','chennai'),(7,'master','Sathyam','2021-03-07 12:00:00','11:30','booked','eb9f5edd-ce44-4218-90b5-42ff58221c57','A5','chennai'),(8,'master','Sathyam','2021-03-07 12:00:00','11:30','open',NULL,'A6','chennai'),(9,'master','Sathyam','2021-03-07 12:00:00','11:30','open',NULL,'B1','chennai'),(10,'master','Sathyam','2021-03-07 12:00:00','11:30','open',NULL,'B2','chennai'),(11,'master','Sathyam','2021-03-07 12:00:00','11:30','open',NULL,'B3','chennai'),(12,'master','Sathyam','2021-03-07 12:00:00','11:30','open',NULL,'B4','chennai'),(13,'master','Sathyam','2021-03-07 12:00:00','11:30','open',NULL,'B5','chennai'),(14,'master','Sathyam','2021-03-07 12:00:00','11:30','open',NULL,'B6','chennai'),(15,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'A1','chennai'),(16,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'A2','chennai'),(17,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'A3','chennai'),(18,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'A4','chennai'),(19,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'A5','chennai'),(20,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'A6','chennai'),(21,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'A7','chennai'),(22,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'A8','chennai'),(23,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'B1','chennai'),(24,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'B2','chennai'),(25,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'B3','chennai'),(26,'master','Devi','2021-03-07 12:00:00','11:30','open',NULL,'B4','chennai'),(27,'master','Sathyam','2021-03-08 12:00:00','11:30','booked',NULL,'A1','chennai'),(28,'master','Sathyam','2021-03-08 12:00:00','11:30','open',NULL,'A2','chennai'),(29,'master','Sathyam','2021-03-08 12:00:00','11:30','open',NULL,'A3','chennai'),(30,'master','Sathyam','2021-03-08 12:00:00','11:30','open',NULL,'A4','chennai'),(31,'master','Sathyam','2021-03-08 12:00:00','11:30','open',NULL,'A5','chennai'),(32,'master','Sathyam','2021-03-08 12:00:00','11:30','open',NULL,'B1','chennai'),(33,'master','Sathyam','2021-03-08 12:00:00','11:30','open',NULL,'B2','chennai'),(34,'master','Sathyam','2021-03-08 12:00:00','11:30','open',NULL,'B3','chennai'),(35,'master','Sathyam','2021-03-07 12:00:00','12:30','booked',NULL,'A1','chennai'),(36,'master','Sathyam','2021-03-07 12:00:00','12:30','open',NULL,'A2','chennai'),(37,'master','Sathyam','2021-03-07 12:00:00','12:30','open',NULL,'A3','chennai'),(38,'master','Sathyam','2021-03-07 12:00:00','12:30','open',NULL,'A4','chennai'),(39,'master','Sathyam','2021-03-07 12:00:00','12:30','open',NULL,'A5','chennai');
/*!40000 ALTER TABLE `Transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `email` varchar(255) NOT NULL,
  `id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('balu8095@gmail.com','dabab6c7-b67f-48e3-bbfb-0c7c25b88fda',NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-08  9:58:31
