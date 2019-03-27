-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 27, 2019 at 12:34 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `atrademNew`
--

-- --------------------------------------------------------

--
-- Table structure for table `mobilier`
--

CREATE TABLE `mobilier` (
  `id_m` int(10) UNSIGNED NOT NULL,
  `name_m` varchar(255) NOT NULL,
  `mcube_m` float DEFAULT NULL,
  `typeMobilier_id_tm` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mobilier`
--

INSERT INTO `mobilier` (`id_m`, `name_m`, `mcube_m`, `typeMobilier_id_tm`) VALUES
(8, 'Canapé 2 Places', 2, 1),
(9, 'Canapé 3 Places', 2.5, 1),
(10, 'Canapé d\'Angle', 3, 1),
(11, 'Fauteuil', 0.6, 1),
(12, 'Chaise', 0.3, 1),
(13, 'Placard', 1.5, 1),
(14, 'Petite Bibliothèque', 1, 1),
(15, 'Grande Bibliotheque', 2, 1),
(16, 'Petite Table', 1, 1),
(17, 'Moyenne Table', 1, 1),
(18, 'Grande Table', 2, 1),
(19, 'Table Basse', 1, 1),
(20, 'Bureau', 1.5, 1),
(21, 'Placard 1 porte', 1.5, 1),
(22, 'Placard 2 Portes', 3, 1),
(23, 'Placard 3 Portes', 4, 1),
(24, 'Armoire Ancienne', 3, 1),
(25, 'Placard Cuisine', 0.75, 1),
(26, 'Buffet', 2, 1),
(27, 'Vaisselier', 1.5, 1),
(28, 'Commode', 1, 1),
(29, 'Meuble TV Bas', 1.5, 1),
(30, 'Meuble TV Combiné', 3, 1),
(31, 'Boîte / Panier', 0.3, 1),
(32, 'Coffre à Linge', 0.5, 1),
(33, 'Banc', 0.2, 1),
(34, 'Tableau', 0.2, 1),
(35, 'Grand tableau', 0.75, 1),
(36, 'Plante', 0.5, 1),
(37, 'Lustre', 0.2, 1),
(38, 'Meuble Hi-Fi', 0.5, 1),
(39, 'Halogène', 1, 1),
(40, 'Abat Jour', 0.1, 1),
(41, 'Petite Lampe', 2, 1),
(42, 'Meuble Living', 3, 1),
(43, 'Guèridon', 0.5, 1),
(44, 'Etagère', 0.25, 1),
(45, 'Piano à Queue', 4.5, 1),
(46, 'Piano Droit', 2, 1),
(47, 'Piano Demi-Queue', 3.5, 1),
(48, 'Lit Simple', 2, 2),
(49, 'Lit Double', 2.5, 2),
(50, 'Lit Superposé', 2.5, 2),
(51, 'Lit Nourrisson', 0.75, 2),
(52, 'Penderie', 2, 2),
(53, 'Miroir / Glace', 0.1, 2),
(54, 'Chiffonnier', 0.5, 2),
(55, 'Bibliothèque', 1.5, 2),
(56, 'Commode', 1.5, 2),
(57, 'Armoire', 2, 2),
(58, 'Chevet', 0.3, 2),
(59, 'Mezzanine', 2, 2),
(60, 'Secrétaire', 1.75, 2),
(61, 'Coiffeuse', 1.5, 2),
(62, 'Bahut', 2.5, 2),
(63, 'Bonnetiere', 2, 2),
(64, 'Semainier', 1.2, 2),
(65, 'Fauteuil', 0.5, 2),
(66, 'Abat Jour', 0.2, 2),
(67, 'Petite Lampe', 0.2, 2),
(68, 'Halogène', 1, 2),
(69, 'Placard', 2, 2),
(70, 'Etagère', 0.5, 2),
(71, 'Petite Bibliothèque', 1, 2),
(72, 'Grande Bibliotheque', 2, 2),
(73, 'Chaise', 0.25, 2),
(74, 'Meuble TV', 1, 2),
(75, 'Télévision', 0.5, 2),
(76, 'Petit Bureau', 1, 2),
(77, 'Bureau', 1.5, 2),
(78, 'Ordinateur', 0.2, 2),
(79, 'Refrigateur', 1, 3),
(80, 'Réfrigérateur Top', 1.5, 3),
(81, 'Réfrigérateur Américain', 3, 3),
(82, 'Four', 0.5, 3),
(83, 'Micro-Onde', 0.3, 3),
(84, 'Gazinière', 0.5, 3),
(85, 'Plaque Cuisson', 0.3, 3),
(86, 'Meuble Bas de Cuisine', 1, 3),
(87, 'Meuble Haut de Cuisine', 1, 3),
(88, 'Plan de Travail', 1, 3),
(89, 'Sous Lavabo', 1, 3),
(90, 'Vaisselier', 2, 3),
(91, 'Petite Lampe', 0.25, 3),
(92, 'Halogène', 1, 3),
(93, 'Placard', 2, 3),
(94, 'Etagère', 2, 3),
(95, 'Table', 2, 3),
(96, 'Chaise', 0.25, 3),
(97, 'Cafetière', 0.2, 3),
(98, 'Casserole', 0.2, 3),
(99, 'Lave Linge', 0.75, 3),
(100, 'Lave vaiselle', 0.72, 3),
(101, 'Congelateur Coffre', 1.5, 3),
(102, 'Congelateur Petit', 0.75, 3),
(103, 'Sèche Linge', 0.75, 3),
(104, 'Hi-Fi', 0.25, 3),
(105, 'Plante', 0.5, 3),
(106, 'Tableau', 0.25, 3),
(107, 'Cuisine Aménagée', 5, 3),
(108, 'Poêle', 0.2, 3),
(109, 'Cuisinière', 0.75, 3);

-- --------------------------------------------------------

--
-- Table structure for table `typemobilier`
--

CREATE TABLE `typemobilier` (
  `id_tm` int(10) UNSIGNED NOT NULL,
  `name_tm` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `typemobilier`
--

INSERT INTO `typemobilier` (`id_tm`, `name_tm`) VALUES
(6, 'Autres'),
(4, 'Bureau'),
(2, 'Chambre'),
(3, 'Cuisine'),
(5, 'Salle de Bain'),
(1, 'Salon');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mobilier`
--
ALTER TABLE `mobilier`
  ADD PRIMARY KEY (`id_m`,`typeMobilier_id_tm`),
  ADD KEY `fk_mobilier_typeMobilier_idx` (`typeMobilier_id_tm`);

--
-- Indexes for table `typemobilier`
--
ALTER TABLE `typemobilier`
  ADD PRIMARY KEY (`id_tm`),
  ADD UNIQUE KEY `name_tm_UNIQUE` (`name_tm`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mobilier`
--
ALTER TABLE `mobilier`
  MODIFY `id_m` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `typemobilier`
--
ALTER TABLE `typemobilier`
  MODIFY `id_tm` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mobilier`
--
ALTER TABLE `mobilier`
  ADD CONSTRAINT `fk_mobilier_typeMobilier` FOREIGN KEY (`typeMobilier_id_tm`) REFERENCES `typemobilier` (`id_tm`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
