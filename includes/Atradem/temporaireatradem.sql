-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 15 mars 2019 à 20:04
-- Version du serveur :  5.7.21
-- Version de PHP :  7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `temporaireatradem`
--

-- --------------------------------------------------------

--
-- Structure de la table `mobilier`
--

DROP TABLE IF EXISTS `mobilier`;
CREATE TABLE IF NOT EXISTS `mobilier` (
  `id_m` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name_m` varchar(255) NOT NULL,
  `mcube_m` float DEFAULT NULL,
  `typeMobilier_id_tm` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_m`,`typeMobilier_id_tm`),
  KEY `fk_mobilier_typeMobilier_idx` (`typeMobilier_id_tm`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `mobilier`
--

INSERT INTO `mobilier` (`id_m`, `name_m`, `mcube_m`, `typeMobilier_id_tm`) VALUES
(8, 'canapÃ© 2 places', 2, 1),
(9, 'canapÃ© 3 places', 2.5, 1),
(10, 'canapÃ© d\'angles', 3, 1),
(11, 'fauteuil', 0.6, 1),
(12, 'chaise', 0.3, 1),
(13, 'placard', 1.5, 1),
(14, 'petite bibliotheque', 1, 1),
(15, 'grande bibliotheque', 2, 1),
(16, 'petite table', 1, 1),
(17, 'moyenne table', 1, 1),
(18, 'grande table', 2, 1),
(19, 'table basse', 1, 1),
(20, 'bureau', 1.5, 1),
(21, 'placard 1 porte', 1.5, 1),
(22, 'placard 2 porte', 3, 1),
(23, 'placard 3 portes', 4, 1),
(24, 'armoire ancienne', 3, 1),
(25, 'placard cuisine', 0.75, 1),
(26, 'buffet', 2, 1),
(27, 'vaissellier', 1.5, 1),
(28, 'commode', 1, 1),
(29, 'meuble tv bas', 1.5, 1),
(30, 'meuble tv combinÃ©', 3, 1),
(31, 'boite / panier', 0.3, 1),
(32, 'coffre a linge', 0.5, 1),
(33, 'banc', 0.2, 1),
(34, 'tableau', 0.2, 1),
(35, 'Grand tableau', 0.75, 1),
(36, 'plante', 0.5, 1),
(37, 'lustre', 0.2, 1),
(38, 'Meuble hifi', 0.5, 1),
(39, 'halogene', 1, 1),
(40, 'abat jour', 0.1, 1),
(41, 'petite lampe', 2, 1),
(42, 'meuble living', 3, 1),
(43, 'guÃ©ridon', 0.5, 1),
(44, 'Ã©tagÃ¨re', 0.25, 1),
(45, 'piano queue', 4.5, 1),
(46, 'piano demi droit', 2, 1),
(47, 'piano demi queue', 3.5, 1),
(48, 'Lit simple', 2, 2),
(49, 'Lit double', 2.5, 2),
(50, 'lit superposÃ©', 2.5, 2),
(51, 'lit bÃ©bÃ©', 0.75, 2),
(52, 'Penderie', 2, 2),
(53, 'Miroir / Glace', 0.1, 2),
(54, 'Chiffonnier', 0.5, 2),
(55, 'Bibliotheque', 1.5, 2),
(56, 'Commode', 1.5, 2),
(57, 'Armoire', 2, 2),
(58, 'Chevet', 0.3, 2),
(59, 'Mezanine', 2, 2),
(60, 'Secretaire', 1.75, 2),
(61, 'Coiffeuse', 1.5, 2),
(62, 'Bahut', 2.5, 2),
(63, 'Bonnetiere', 2, 2),
(64, 'Semainier', 1.2, 2),
(65, 'Fauteuil', 0.5, 2),
(66, 'abat jour', 0.2, 2),
(67, 'petite lampe', 0.2, 2),
(68, 'halogene', 1, 2),
(69, 'Placard', 2, 2),
(70, 'EtagÃ¨re', 0.5, 2),
(71, 'petite bibliotheque', 1, 2),
(72, 'grande bibliotheque', 2, 2),
(73, 'Chaise', 0.25, 2),
(74, 'Meuble TV', 1, 2),
(75, 'television', 0.5, 2),
(76, 'Petit Bureau', 1, 2),
(77, 'Bureau', 1.5, 2),
(78, 'Ordinateur', 0.2, 2),
(79, 'Refrigateur', 1, 3),
(80, 'Refrigateur Top', 1.5, 3),
(81, 'Refrigateur Americain', 3, 3),
(82, 'Four', 0.5, 3),
(83, 'Micro-Onde', 0.3, 3),
(84, 'GaziniÃ¨re', 0.5, 3),
(85, 'Plaque Cuisson', 0.3, 3),
(86, 'Meuble bas de Cuisine', 1, 3),
(87, 'Meuble haut de Cuisine', 1, 3),
(88, 'Plan de travail', 1, 3),
(89, 'Sous Lavabo', 1, 3),
(90, 'vaissellier', 2, 3),
(91, 'petite lampe', 0.25, 3),
(92, 'halogene', 1, 3),
(93, 'placard', 2, 3),
(94, 'EtagÃ¨re', 2, 3),
(95, 'table', 2, 3),
(96, 'Chaise', 0.25, 3),
(97, 'Cafetiere', 0.2, 3),
(98, 'Casserole', 0.2, 3),
(99, 'Lave Linge', 0.75, 3),
(100, 'Lave vaiselle', 0.72, 3),
(101, 'Congelateur Coffre', 1.5, 3),
(102, 'Congelateur Petit', 0.75, 3),
(103, 'Seche linge', 0.75, 3),
(104, 'Hi-Fi', 0.25, 3),
(105, 'Plante', 0.5, 3),
(106, 'Tableau', 0.25, 3),
(107, 'Cuisine amÃ©nager', 5, 3),
(108, 'Poele', 0.2, 3),
(109, 'CuisiniÃ¨re', 0.75, 3);

-- --------------------------------------------------------

--
-- Structure de la table `typemobilier`
--

DROP TABLE IF EXISTS `typemobilier`;
CREATE TABLE IF NOT EXISTS `typemobilier` (
  `id_tm` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name_tm` varchar(255) NOT NULL,
  PRIMARY KEY (`id_tm`),
  UNIQUE KEY `name_tm_UNIQUE` (`name_tm`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `typemobilier`
--

INSERT INTO `typemobilier` (`id_tm`, `name_tm`) VALUES
(6, 'Autres'),
(4, 'Bureau'),
(2, 'Chambre'),
(3, 'Cuisine'),
(5, 'Salle de Bain'),
(1, 'Salon');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `mobilier`
--
ALTER TABLE `mobilier`
  ADD CONSTRAINT `fk_mobilier_typeMobilier` FOREIGN KEY (`typeMobilier_id_tm`) REFERENCES `typemobilier` (`id_tm`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
