-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Host: mysql669.umbler.com
-- Generation Time: 09-Fev-2020 às 13:33
-- Versão do servidor: 5.6.40
-- PHP Version: 5.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loja_mundo_tech`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas`
--

CREATE TABLE IF NOT EXISTS `vendas` (
  `id` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `vendas`
--

INSERT INTO `vendas` (`id`, `quantidade`, `total`, `produto_id`, `created_at`, `updated_at`) VALUES
(71, 10, 200, 1, '2020-01-20 20:47:18', '2020-01-24 04:53:11'),
(72, 1, 30, 4, '2020-01-20 20:47:35', '2020-01-20 20:47:35'),
(73, 1, 12, 24, '2020-01-20 20:48:32', '2020-01-20 20:48:32'),
(74, 2, 40, 1, '2020-01-21 12:29:10', '2020-01-24 04:53:55'),
(75, 1, 15, 2, '2020-01-21 12:29:22', '2020-01-24 04:54:35'),
(76, 1, 10, 22, '2020-01-21 12:29:39', '2020-01-21 12:29:39'),
(77, 1, 20, 25, '2020-01-21 12:29:58', '2020-01-24 04:57:53'),
(78, 1, 30, 4, '2020-01-21 18:54:54', '2020-01-21 18:54:54'),
(79, 1, 20, 1, '2020-01-23 12:33:33', '2020-01-24 04:58:13'),
(80, 1, 20, 1, '2020-01-23 12:34:08', '2020-01-24 04:58:19'),
(81, 1, 12, 24, '2020-01-23 12:35:10', '2020-01-24 04:58:37'),
(82, 1, 10, 20, '2020-01-23 12:38:22', '2020-01-23 12:38:22'),
(83, 1, 12, 24, '2020-01-24 18:39:59', '2020-01-24 18:39:59'),
(84, 1, 20, 25, '2020-01-24 18:40:20', '2020-01-24 18:40:20'),
(85, 1, 20, 1, '2020-01-24 18:55:37', '2020-01-24 18:55:37'),
(86, 1, 10, 21, '2020-01-27 21:47:49', '2020-01-27 21:47:49'),
(87, 1, 10, 5, '2020-01-29 13:48:28', '2020-01-29 13:48:28'),
(88, 1, 30, 4, '2020-01-30 19:50:19', '2020-01-30 19:50:19'),
(89, 1, 30, 4, '2020-01-31 17:12:50', '2020-01-31 17:12:50'),
(90, 1, 15, 2, '2020-01-31 17:13:12', '2020-01-31 17:13:12'),
(91, 1, 30, 4, '2020-02-01 11:42:04', '2020-02-01 11:42:04'),
(92, 1, 20, 1, '2020-02-03 13:45:16', '2020-02-03 13:45:16'),
(93, 1, 10, 20, '2020-02-03 13:45:50', '2020-02-03 13:45:50'),
(94, 1, 20, 1, '2020-02-06 19:15:54', '2020-02-06 19:15:54'),
(95, 1, 20, 1, '2020-02-06 19:16:00', '2020-02-06 19:16:00'),
(96, 1, 5, 23, '2020-02-06 19:16:35', '2020-02-06 19:16:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vendas`
--
ALTER TABLE `vendas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `produto_id` (`produto_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vendas`
--
ALTER TABLE `vendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=97;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `vendas`
--
ALTER TABLE `vendas`
  ADD CONSTRAINT `vendas_ibfk_1` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
