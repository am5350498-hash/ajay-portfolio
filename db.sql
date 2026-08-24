-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: alex_rivera
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `about`
--

DROP TABLE IF EXISTS `about`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `expirience_dicription` text,
  `email` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `freelance` varchar(50) DEFAULT NULL,
  `Project_complete` int DEFAULT NULL,
  `happy_client` int DEFAULT NULL,
  `Awards_won` int DEFAULT NULL,
  `year_of_expirence` int DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about`
--

LOCK TABLES `about` WRITE;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;
INSERT INTO `about` VALUES (1,'Ajay More','Front-End devloper','I\'m a passionate Full Stack Developer specializing in Node.js, Express.js and MySQL.\r\n\r\nWith a background in both design and development, I bridge the gap between aesthetics and technology. I believe that great design is not just about how it looks, but how it works.','ajaymore@gmail.com','Ahilyanagar, Maharashtra','Available',100,50,10,5,'1784461570870atoz.png');
/*!40000 ALTER TABLE `about` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_name` text,
  `post_date` text,
  `post_discription` text,
  `Image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (4,'Softwear Developer','20/12/2023','With a background in both design and development, I bridge the gap between aesthetics and technology. I believe that great design is not just about how it looks, but how it works.','1784392485327_1784185767451website6.jpg'),(7,'Web Developer','20/12/2023','I believe that great design is not just about how it looks, but how it works.','1784392501192_1784185649981website3.jpg'),(11,'SoftwearDeveloper','20/12/2023','I believe that great design is not just about how it looks, but how it works.','1784390586940_Screenshot (1).png'),(13,'Web Developer','20/12/2023','With a background in both design and development','1784440947089_1784166118930website5.jpg');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `cid` int NOT NULL AUTO_INCREMENT,
  `email` text,
  `phone` text,
  `address` text,
  `logo` text,
  `map` text,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'arungaikwad@gmail.com','8010659966','shevgoan,college,MH16,India','1784465534746atoz.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60230.26061157652!2d75.18816190405678!3d19.35220286874258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb69c3f6929bf5%3A0x5d0bb5a98f5f3088!2sShevgaon%2C%20Maharashtra%20414502!5e0!3m2!1sen!2sin!4v1784466256645!5m2!1sen!2sin');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_save`
--

DROP TABLE IF EXISTS `contact_save`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_save` (
  `cid` int NOT NULL AUTO_INCREMENT,
  `cname` text,
  `cemail` text,
  `csubject` text,
  `cmessage` text,
  `cstatus` text,
  `cdate` date DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_save`
--

LOCK TABLES `contact_save` WRITE;
/*!40000 ALTER TABLE `contact_save` DISABLE KEYS */;
INSERT INTO `contact_save` VALUES (1,'ajay more','am5350498@gmail.com','project','check','pedding','2026-07-19'),(2,'ajay more','am5350498@gmail.com','project','check info','reject','2026-07-19'),(3,'ajay more','am5350498@gmail.com','project','done','confirm','2026-07-19'),(4,'ajay more','am5350498@gmail.com','project','done','confirm','2026-07-19'),(5,'ajay more','am5350498@gmail.com','project','done','confirm','2026-07-19'),(6,'ajay more','am5350498@gmail.com','project','sjdhbakf','confirm','2026-07-19'),(7,'vikrammore','vikram@gmail.com','music player','welcome','confirm','2026-07-19');
/*!40000 ALTER TABLE `contact_save` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education` (
  `eid` int NOT NULL AUTO_INCREMENT,
  `edu_duration` text,
  `edu_degree` text,
  `edu_university` text,
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,'2012 - 2016','BSc in Web Design','New York Academy'),(5,'2016 - 2018','MSc in Computer Science','Stanford University'),(6,'2016 - 2018','MSc in Computer Science','Pune University');
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience` (
  `eid` int NOT NULL AUTO_INCREMENT,
  `exp_duration` text,
  `exp_position` text,
  `exp_company` text,
  `exp_desc` text,
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` VALUES (1,'2018 - 2020','Junior Designer','Design Lab Inc.','Assisted in creating visual identities and UI components for startup products.'),(2,'2020 - 2022','Front-End Developer','TechStart Studio','Built responsive, user-centric interfaces for diverse client portfolios.'),(3,'2025-2026','Back-End Developer','TechStart Studio','Assisted in creating visual identities and UI components for startup products.');
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero`
--

DROP TABLE IF EXISTS `hero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hero` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `Position` text,
  `experience_disc` text,
  `Photo` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero`
--

LOCK TABLES `hero` WRITE;
/*!40000 ALTER TABLE `hero` DISABLE KEYS */;
INSERT INTO `hero` VALUES (1,'Ajay More','Web devloper','I\'m a passionate creative developer based in New York,','1784461492365atoz.png');
/*!40000 ALTER TABLE `hero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `lid` int NOT NULL AUTO_INCREMENT,
  `username` text,
  `password` text,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'admin@gmail.com','admin'),(2,'admin@gmail.com','root');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `porfolio`
--

DROP TABLE IF EXISTS `porfolio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `porfolio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_name` text,
  `title` text,
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `porfolio`
--

LOCK TABLES `porfolio` WRITE;
/*!40000 ALTER TABLE `porfolio` DISABLE KEYS */;
INSERT INTO `porfolio` VALUES (1,'project Name','Softwear Devloper','1784438528254_1784166118930website5.jpg'),(3,'project name','Web Devlopere','1784439174038_1784165887538website.jpg'),(6,'project name','Web Devloper','1784440531371_Screenshot (1).png');
/*!40000 ALTER TABLE `porfolio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_icon` text,
  `service_title` text,
  `service_description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'fa-solid fa-headset','Consulting','Providing strategic guidance on technology stacks, architecture, and digital transformation'),(2,'fa-solid fa-cloud','Cloud Solutions','Deploying scalable cloud architectures to ensure reliability, security, and performance.'),(3,'fa-solid fa-magnifying-glass','SEO Optimization','Improving visibility and ranking through on-page optimization and technical SEO strategies.'),(4,'fa-solid fa-mobile-screen','Mobile Apps','Creating native and cross-platform mobile applications with smooth performance and beautiful UI.'),(5,'fa-solid fa-pencil','UI/UX Design','Designing intuitive interfaces that deliver exceptional user experiences across all devices.'),(6,'fa-solid fa-code','Web Development','Building responsive, high-performance websites with modern technologies and best practices.');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social`
--

DROP TABLE IF EXISTS `social`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `facebook` text,
  `twitter` text,
  `instagram` text,
  `linkedin` text,
  `github` text,
  `youtube` text,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social`
--

LOCK TABLES `social` WRITE;
/*!40000 ALTER TABLE `social` DISABLE KEYS */;
INSERT INTO `social` VALUES (1,'https://facebook.com','https://twitter.com','https://instagram.com','https://linkedin.com','https://github.com','https://youtube.com');
/*!40000 ALTER TABLE `social` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technical_skills`
--

DROP TABLE IF EXISTS `technical_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technical_skills` (
  `ts_id` int NOT NULL AUTO_INCREMENT,
  `tech_name` text,
  `tech_per` text,
  PRIMARY KEY (`ts_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technical_skills`
--

LOCK TABLES `technical_skills` WRITE;
/*!40000 ALTER TABLE `technical_skills` DISABLE KEYS */;
INSERT INTO `technical_skills` VALUES (1,'HTML5 & CSS3','95'),(2,'JavaScript (ES6+)','88'),(3,'React.js','80'),(4,'UI/UX Design','92'),(5,'WordPress','75'),(8,'WordPress','70');
/*!40000 ALTER TABLE `technical_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonial`
--

DROP TABLE IF EXISTS `testimonial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testimonial` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `client_name` text,
  `client_position` text,
  `testimonial_description` text,
  `image` text,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonial`
--

LOCK TABLES `testimonial` WRITE;
/*!40000 ALTER TABLE `testimonial` DISABLE KEYS */;
INSERT INTO `testimonial` VALUES (2,'John Smith','CEO, TechCorp','\"Working with Alex was a breeze. He understood our vision perfectly and delivered a stunning product that our users love. Highly recommend!\"','1784451305182_atoz.png'),(3,'Michael Chen','CTO, InnovateLabs','\"Alex brought our complex project to life with his technical expertise and creative problem-solving. A true professional.\"','1784451872799_WhatsApp Image 2026-07-16 at 6.52.30 PM.jpeg'),(4,'John Smith','CEO, TechCorp','Alex is an exceptional developer who exceeded our expectations. His attention to detail and creative solutions made a huge difference to our project.\"','1784452040545_atoz.png');
/*!40000 ALTER TABLE `testimonial` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-20  8:29:47
