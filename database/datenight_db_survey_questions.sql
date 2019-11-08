-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: datenight_db
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `survey_questions`
--

DROP TABLE IF EXISTS `survey_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey_questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `lowerbound_answer_value` varchar(255) DEFAULT NULL,
  `upperbound_answer_value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `SurveyId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `SurveyId` (`SurveyId`),
  CONSTRAINT `survey_questions_ibfk_1` FOREIGN KEY (`SurveyId`) REFERENCES `surveys` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_questions`
--

LOCK TABLES `survey_questions` WRITE;
/*!40000 ALTER TABLE `survey_questions` DISABLE KEYS */;
INSERT INTO `survey_questions` VALUES (1,'Are you looking for something casual or serious?','Casual','Serious','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(2,'Are you an introvert or extrovert','Introvert','Extrovert','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(3,'How close are you to your family?','Extremely Close','Dad?','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(4,'Your career is the most imporant thing in your life','I work to live','I live to work','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(5,'What is the ideal way to spend a night with someone?','Romantic dinner then a night in','I like us better when we are wasted','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(6,'Risk is thrilling','Safety first','Make me feel alive','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(7,'Following trends is important','I do my own thing','I stay up to speed','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(8,'It is funny to roast someone','I dont want to hurt anyones feelings','Im gonnna make you cry','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(9,'Do you think humanity will ever go extinct?','We can overcame any obstacle as a species','We are already dead in the water from our past transgressions','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(10,'Pineapple belongs on pizza','Yuck','Yum','2019-11-08 14:27:00','2019-11-08 14:27:00',1),(11,'Gary is #1','I hate Gary','Gary is a god king','2019-11-08 14:27:00','2019-11-08 14:27:00',1);
/*!40000 ALTER TABLE `survey_questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-08 14:34:09
