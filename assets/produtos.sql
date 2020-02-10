-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Host: mysql669.umbler.com
-- Generation Time: 09-Fev-2020 às 15:27
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
-- Estrutura da tabela `produtos`
--

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `preco` double NOT NULL,
  `quantidade` int(11) NOT NULL,
  `avatar` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `descricao`, `preco`, `quantidade`, `avatar`) VALUES
(1, 'Carregador 3.1A', 20, 2, 'http://apinatanaelima-com.umbler.net/api/uploads/Carrregado 3.1 knup.jpg'),
(2, 'Carregador Uni', 15, 9, 'http://apinatanaelima-com.umbler.net/api/uploads/carregador-universal.jpg'),
(3, 'Pendrive 16g', 30, 1, 'http://apinatanaelima-com.umbler.net/api/uploads/pendrive 16g.png'),
(4, 'Cartao 16g', 30, 5, 'http://apinatanaelima-com.umbler.net/api/uploads/\ncartao sd 16.jpg'),
(5, 'Cabo de caixinha', 10, 1, 'http://apinatanaelima-com.umbler.net/api/uploads/\ncabo caixinha de som.jpg'),
(6, 'Cabo OTG', 10, 4, 'http://apinatanaelima-com.umbler.net/api/uploads/cabo otg.jpg\n'),
(7, 'Mobile JT', 5, 3, 'http://apinatanaelima-com.umbler.net/api/uploads/jt mobile.jpg\n'),
(8, 'Carregador V.', 10, 4, 'http://apinatanaelima-com.umbler.net/api/uploads/carregador-veicular-portas-usb-preto-048-bright.png\n'),
(9, 'Capinhas', 15, 66, 'http://apinatanaelima-com.umbler.net/api/uploads/capas.jpg\n'),
(11, 'Cabo de Fone', 15, 6, 'http://apinatanaelima-com.umbler.net/api/uploads/cabo de fone.jpg\n'),
(12, 'Cabo HDMI Celular', 50, 3, 'http://apinatanaelima-com.umbler.net/api/uploads/cabo-adaptador-micro-usb-para-hdmi-celular-na-tv-11-b60e30235e831e49cc15291136134899-1024-1024.jpg\n'),
(13, 'Fone de ouvido SM', 15, 3, 'http://apinatanaelima-com.umbler.net/api/uploads/fone SM.jpg\n'),
(14, 'Cabo hdmi', 25, 2, 'http://apinatanaelima-com.umbler.net/api/uploads/cabo hdmi.jpg\n'),
(15, 'Pocket Capinha', 10, 1, 'http://apinatanaelima-com.umbler.net/api/uploads/\npokets.jpg'),
(16, 'Cabo OTG mini', 5, 2, 'http://apinatanaelima-com.umbler.net/api/uploads/otg mini.jpg\n'),
(17, 'HeadFone', 25, 2, 'http://apinatanaelima-com.umbler.net/api/uploads/headfone.png\n'),
(18, 'Lamparina Multifuncional', 30, 3, 'http://apinatanaelima-com.umbler.net/api/uploads/lamparina.jpg\n'),
(19, 'Chip Claro', 10, 4, 'http://apinatanaelima-com.umbler.net/api/uploads/claro.jpg\n'),
(20, 'Chip Tim', 10, 2, 'http://apinatanaelima-com.umbler.net/api/uploads/tim logo.png\n'),
(21, 'Peliculas Varios M.', 10, 119, 'http://apinatanaelima-com.umbler.net/api/uploads/peliculas.jpg\n'),
(22, 'Fone de ouvido inova 6704', 10, 9, 'http://apinatanaelima-com.umbler.net/api/uploads/Fone de ouvido inova 6704.jpg\n'),
(23, 'Cabo usb le-1024', 5, 9, 'http://apinatanaelima-com.umbler.net/api/uploads/cabo micro usb le-1024.jpg\n'),
(24, 'Cabo micro usb itblue', 12, 2, 'http://apinatanaelima-com.umbler.net/api/uploads/cabo micro usb itblue 2.1A.jpg\n'),
(25, 'Fone de ouvido lelong 0206', 20, 4, 'http://apinatanaelima-com.umbler.net/api/uploads/fone de ouvido 0205.jpg\n'),
(26, 'Caixa de som grasep bh1018', 40, 1, 'http://apinatanaelima-com.umbler.net/api/uploads/caixa de som grasep.jpg'),
(27, 'Caixa de som grasep bh887', 30, 5, 'http://apinatanaelima-com.umbler.net/api/uploads/caixinha mini.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
