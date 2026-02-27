-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-02-2026 a las 14:30:48
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `interpolice_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudadano`
--

CREATE TABLE `ciudadano` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `apodo` varchar(200) DEFAULT NULL,
  `fecha_nacimiento` date NOT NULL,
  `planeta_origen` varchar(200) NOT NULL,
  `planeta_residencia` varchar(200) NOT NULL,
  `foto` varchar(300) DEFAULT NULL,
  `codio_qr` varchar(250) NOT NULL,
  `estado` varchar(1) NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudadano`
--

INSERT INTO `ciudadano` (`codigo`, `nombre`, `apellidos`, `apodo`, `fecha_nacimiento`, `planeta_origen`, `planeta_residencia`, `foto`, `codio_qr`, `estado`) VALUES
(3, 'Yesly antonieta', 'Gomes de las nieves', 'La Mas Linda de Adso', '2003-05-21', 'omicron 7', 'La Tierra', 'trabajofoto.jpg', '75939', 'A'),
(5, 'Linda Sofia', 'Benavides Perez', 'Doña Sofi', '2034-09-12', 'la Tierra', 'Alfa centaury', 'foto3.jpg', '829480', 'C'),
(6, 'Santiago Manuel', 'Cuartas Peña', 'Loid Gamer', '2012-08-04', 'la Tierra', 'Neptunia 4', 'foto233.jpg', '34444', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `email` varchar(260) NOT NULL,
  `pass` varchar(260) NOT NULL,
  `avatar` varchar(260) NOT NULL,
  `rol` varchar(200) NOT NULL DEFAULT 'USER'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellidos`, `email`, `pass`, `avatar`, `rol`) VALUES
(2, 'Antonio Melas', 'Mamas Duro', 'antoni99@gmail.com', '12345', 'fotitio.jpg', 'USER'),
(3, 'Majin ', 'Buu', 'mb@gmail.com', '12345', 'majinfoto.png', 'USER'),
(4, 'Super Broly', 'Sayajin Dios', 'bsanchez45@gamil.com', '54321', 'FotoBroly.jpg', 'ADMIN'),
(5, 'Edgar', 'Benavides', 'ferchobp24@gamil.com', '54321', 'mifoto.jpg', 'ADMIN');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudadano`
--
ALTER TABLE `ciudadano`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudadano`
--
ALTER TABLE `ciudadano`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
