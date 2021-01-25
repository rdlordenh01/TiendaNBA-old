-- phpMyAdmin SQL Dump
-- version 4.9.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 16-12-2020 a las 22:25:00
-- Versión del servidor: 5.7.31-0ubuntu0.18.04.1
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `usuario` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo_via` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numero` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ciudad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `localidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo_postal` int(11) NOT NULL,
  `telefono` int(11) NOT NULL,
  `detalles` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dni` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `direcciones`
--

INSERT INTO `direcciones` (`id`, `usuario`, `nombre`, `apellidos`, `tipo_via`, `direccion`, `numero`, `ciudad`, `localidad`, `codigo_postal`, `telefono`, `detalles`, `dni`, `created_at`, `updated_at`) VALUES
(1, 3, 'f', 'f', 'Calle', 'f', '32', 'f', 'f', 19002, 567483736, 'f', '03304567N', '2020-11-26 09:26:32', '2020-11-26 09:26:32'),
(2, 4, 'f', 'f', 'Calle', 'f', '12', 'f', 'f', 19002, 543424235, 'f', '03304567N', '2020-11-26 09:37:52', '2020-11-26 09:37:52'),
(3, 5, 'Gorra Boston Celtics', 'f', 'Calle', 'del ejercito', '12', 'Guadalajara', 'Guadalajara', 19002, 333444555, '.', '03304567N', '2020-12-11 22:34:17', '2020-12-11 22:34:17'),
(4, 6, 'lucia', 'heranz', 'Calle', 'v.s.b.', '12', 'fontanar', 'guadalajara', 19290, 677905727, 'ENTREGAR POR LA TARDE', '03097391G', '2020-12-16 21:52:54', '2020-12-16 21:52:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filas`
--

CREATE TABLE `filas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `talla` bigint(20) UNSIGNED NOT NULL,
  `pedido` bigint(20) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `filas`
--

INSERT INTO `filas` (`id`, `talla`, `pedido`, `cantidad`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '2020-11-26 09:28:34', '2020-11-26 09:28:34'),
(2, 6, 1, 1, '2020-11-26 09:28:34', '2020-11-26 09:28:34'),
(3, 4, 2, 1, '2020-11-26 09:38:43', '2020-11-26 09:38:43'),
(4, 8, 2, 1, '2020-11-26 09:38:43', '2020-11-26 09:38:43'),
(5, 1, 3, 13, '2020-12-11 22:36:52', '2020-12-11 22:36:52'),
(6, 5, 3, 12, '2020-12-11 22:36:52', '2020-12-11 22:36:52'),
(7, 5, 3, 1, '2020-12-11 22:36:52', '2020-12-11 22:36:52'),
(8, 1, 3, 1, '2020-12-11 22:36:52', '2020-12-11 22:36:52'),
(9, 1, 3, 14, '2020-12-11 22:36:52', '2020-12-11 22:36:52'),
(10, 17, 4, 1, '2020-12-16 21:54:55', '2020-12-16 21:54:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_11_00_000006_create_productos_table', 1),
(5, '2020_11_01_000140_create_registros_table', 1),
(6, '2020_11_02_000033_create_direcciones_table', 1),
(7, '2020_11_03_000006_create_pagos_table', 1),
(8, '2020_11_04_235904_create_pedidos_table', 1),
(9, '2020_11_05_234935_create_tallas_table', 1),
(10, '2020_11_05_235836_create_filas_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `usuario` bigint(20) UNSIGNED NOT NULL,
  `titular` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tarjeta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ccv` int(11) NOT NULL,
  `mes` int(11) NOT NULL,
  `año` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id`, `usuario`, `titular`, `tarjeta`, `ccv`, `mes`, `año`, `created_at`, `updated_at`) VALUES
(1, 3, 'CARLOS PERDICES', '4286764237648346', 222, 5, 2022, '2020-11-26 09:28:21', '2020-11-26 09:28:21'),
(2, 4, 'CARLOS PERDICES', '4556435634764736', 222, 2, 2023, '2020-11-26 09:38:32', '2020-11-26 09:38:32'),
(3, 5, 'CARLOS PERDICES', '4555511119996823', 728, 8, 2022, '2020-12-11 22:36:10', '2020-12-11 22:36:10'),
(4, 3, 'CARLOS PERDICES', '5766787977044356', 224, 6, 2022, '2020-12-16 20:00:07', '2020-12-16 20:00:07'),
(5, 3, 'MARIA LUCIA HERANZ GARRALON', '5653873848746485', 111, 9, 2020, NULL, NULL),
(6, 6, 'LUCIA HERANZ', '1234567890107777', 123, 12, 2021, '2020-12-16 21:54:24', '2020-12-16 21:54:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `usuario` bigint(20) UNSIGNED NOT NULL,
  `direccion` bigint(20) UNSIGNED NOT NULL,
  `pago` bigint(20) UNSIGNED NOT NULL,
  `total` double(8,2) NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `usuario`, `direccion`, `pago`, `total`, `estado`, `created_at`, `updated_at`) VALUES
(1, 3, 1, 1, 60.00, 'Completado', '2020-11-26 09:28:34', '2020-11-26 09:28:34'),
(2, 4, 2, 2, 60.00, 'Completado', '2020-11-26 09:38:43', '2020-11-26 09:38:43'),
(3, 5, 3, 3, 1155.00, 'Completado', '2020-12-11 22:36:52', '2020-12-11 22:36:52'),
(4, 6, 4, 6, 145.15, 'Completado', '2020-12-16 21:54:55', '2020-12-16 21:54:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marca` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `equipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `precio` double(8,2) NOT NULL,
  `subcategoria` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `categoria`, `marca`, `equipo`, `descripcion`, `created_at`, `updated_at`, `precio`, `subcategoria`, `foto`) VALUES
(1, 'Camiseta Cavaliers', 'Ropa', 'Adidas', 'Cleveland Cavaliers', 'Camiseta con el logotipo de los Cleveland Cavaliers', '2020-04-19 00:00:00', NULL, 25.00, 'Camiseta', 'imagenes/camiseta-ninos-james-23-roja-cleveland-cavaliers-2018.jpg'),
(2, 'Camiseta Rockets', 'Ropa', 'Adidas', 'Houston Rockets', 'Camiseta con el logotipo de los Houston Rockets', '2020-04-19 00:00:00', NULL, 35.00, 'Camiseta', 'imagenes/camiseta-james-harden-13-houston-rockets-2019-20-rojo.jpg'),
(3, 'Camiseta Lakers', 'Ropa', 'Adidas', 'Los Angeles Lakers', 'Camiseta con el logotipo de Los Angeles Lakers', '2020-04-19 00:00:00', NULL, 35.00, 'Camiseta', 'imagenes/Camiseta_Lakers_Lebron_James_Icon_2017-18_Amarillo.jpg'),
(4, 'Camiseta Raptors', 'Ropa', 'Adidas', 'Toronto Raptors', 'Camiseta con el logotipo de los Toronto Raptors', '2020-04-19 00:00:00', NULL, 35.00, 'Camiseta', 'imagenes/camiseta-2019-marc-gasol-rojatoronto-raptors.jpg'),
(5, 'Equipación Cavaliers', 'Ropa', 'Nike', 'Cleveland Cavaliers', 'Equipación de los Cleveland Cavaliers', '2020-04-19 00:00:00', NULL, 65.00, 'Equipación', 'imagenes/2017-icon.png'),
(6, 'Equipación Rockets', 'Ropa', 'Nike', 'Houston Rockets', 'Equipación de los Houston Rockets', '2020-04-19 00:00:00', NULL, 65.00, 'Equipación', 'imagenes/d95aa75f15989d842df3951a659c6246.gif'),
(7, 'Equipación Lakers', 'Ropa', 'Nike', 'Los Angeles Lakers', 'Equipación de Los Angeles Lakers', '2020-04-19 00:00:00', NULL, 65.00, 'Equipación', 'imagenes/1fc79688fa6f0d5f5caed2d46bf72d09.gif'),
(8, 'Equipación Raptors', 'Ropa', 'Nike', 'Toronto Raptors', 'Equipación de los Toronto Raptors', '2020-04-19 00:00:00', NULL, 65.00, 'Equipación', 'imagenes/273613_g06pqvnefgvsd5zr8jxtznr3j.gif'),
(9, 'Balón oficial NBA', 'Accesorios', 'Spalding', 'All', 'Balón reglamentario temporada 19/20', '2020-04-21 00:00:00', NULL, 65.00, 'Material deportivo', 'imagenes/61htSgsQrkL._AC_SY400_.jpg'),
(25, 'Calcetines Celtics', 'Ropa', 'Nike', 'Boston Celtics', 'Calcetines con temática del equipo Boston Celtics', '2020-04-21 00:00:00', NULL, 29.00, 'Calcetines', 'imagenes/calcetines-boston-celtics-city-edition.jpg'),
(26, 'Gorra Boston Celtics', 'Accesorios', 'New Era', 'Boston Celtics', 'Gorra talla unica con logotipo de los Celtics', '2020-05-22 00:00:00', NULL, 29.00, 'Gorras', 'imagenes/gorra-curva-verde-ajustable-9forty-the-league-de-boston-celtics-nba-de-new-era.jpg'),
(27, 'Under Armour DripTown', 'Calzado', 'Under Armour', 'All', 'Zapatiila de juego de la marca Under Armour', '2020-12-16 20:57:26', NULL, 123.99, 'Zapatillas de juego', 'imagenes/2cf7c581e877655c12016b7a13299e47.jpg'),
(28, 'Nike Basket-Frontline', 'Calzado', 'Nike', 'All', 'Zapatiila de juego de la marca Nike', '2020-12-16 20:59:20', NULL, 145.15, 'Zapatillas de juego', 'imagenes/zapatillas-baloncesto-nike-hiperdunk-x-ao7893-001-negra-hombre.jpg'),
(29, 'Jordan DarkHole', 'Calzado', 'Jordan', 'All', 'Zapatiila de juego de la marca Jordan', '2020-12-16 21:01:02', NULL, 179.99, 'Zapatillas de juego', 'imagenes/zapatillas-baloncesto-nike-jordan-b-fly-gs.jpg'),
(30, 'Pantalón de juego - Brooklyn Nets', 'Ropa', 'Nike', 'Brooklyn Nets', 'Pantalón de juego (NBA) de los Brooklyn Nets', '2020-12-16 21:04:23', NULL, 64.99, 'Pantalón de juego', 'imagenes/brooklyn-nest-city-edition-swingman-shorts-2020-junior.jpg'),
(31, 'Pantalón de juego - Los Angeles Lakers ', 'Ropa', 'Nike', 'Los Angeles Lakers', 'Pantalón de juego (NBA) de los Angeles Lakers', '2020-12-16 21:06:20', NULL, 64.99, 'Pantalón de juego', 'imagenes/swingman-assotiation-shorts-lakers.jpg'),
(32, 'Pantalón de juego - Chicago Bulls', 'Ropa', 'Nike', 'Chicago Bulls', 'Pantalón de juego (NBA) de los Chicago Bulls ', '2020-12-16 21:08:10', NULL, 61.99, 'Pantalón de juego', 'imagenes/chicago-bulls-association-edition-swingman-short-2020.jpg'),
(33, 'Pantalón de juego - Toronto Raptors', 'Ropa', 'Nike', 'Toronto Raptors', 'Pantalón de juego (NBA) de los Toronto Raptors', '2020-12-16 21:09:23', NULL, 79.99, 'Pantalón de juego', 'imagenes/pantalones-junior-raptors-hardwood-classics.jpg'),
(34, 'Gorra Toronto Raptors', 'Accesorios', 'Mitchell and Ness', 'Toronto Raptors', 'Gorra de los Toronto Raptors de la marca Mitchell and Ness', '2020-12-16 21:18:52', NULL, 39.99, 'Gorras2', 'imagenes/toronto-raptors-team-logo-high-crown-6-panel-110-snapback.jpg'),
(35, 'Gorra Chicago Bulls', 'Accesorios', 'New Era', 'Chicago Bulls', 'Gorra de los Chicago Bulls de New Era', '2020-12-16 21:20:00', NULL, 39.99, 'Gorras', 'imagenes/gorra-curva-negra-ajustable-9forty-the-league-de-chicago-bulls-nba-de-new-era.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `usuario` bigint(20) UNSIGNED NOT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `usuario`, `tipo`, `created_at`, `updated_at`) VALUES
(1, 1, 'USUARIO LOGEADO', '2020-11-25 22:38:23', NULL),
(2, 1, 'USUARIO LOGEADO', '2020-11-26 08:45:21', NULL),
(3, 1, 'LOGOUT', '2020-11-26 09:09:38', NULL),
(4, 1, 'USUARIO LOGEADO', '2020-11-26 09:11:29', NULL),
(5, 1, 'TALLA CREADA', '2020-11-26 09:24:06', NULL),
(6, 1, 'TALLA CREADA', '2020-11-26 09:24:12', NULL),
(7, 1, 'TALLA CREADA', '2020-11-26 09:24:17', NULL),
(8, 1, 'TALLA CREADA', '2020-11-26 09:24:22', NULL),
(9, 1, 'TALLA CREADA', '2020-11-26 09:24:32', NULL),
(10, 1, 'TALLA CREADA', '2020-11-26 09:24:36', NULL),
(11, 1, 'TALLA CREADA', '2020-11-26 09:24:40', NULL),
(12, 1, 'TALLA CREADA', '2020-11-26 09:24:44', NULL),
(13, 1, 'LOGOUT', '2020-11-26 09:32:19', NULL),
(14, 1, 'USUARIO LOGEADO', '2020-11-26 09:32:24', NULL),
(15, 1, 'USUARIO LOGEADO', '2020-11-29 01:35:10', NULL),
(16, 1, 'USUARIO LOGEADO', '2020-12-11 22:27:40', NULL),
(17, 1, 'USUARIO LOGEADO', '2020-12-16 20:00:50', NULL),
(18, 1, 'USUARIO LOGEADO', '2020-12-16 20:33:38', NULL),
(19, 1, 'TARJETA CREADA', '2020-12-16 20:41:48', NULL),
(20, 1, 'PRODUCTO CREADO', '2020-12-16 20:57:26', NULL),
(21, 1, 'PRODUCTO CREADO', '2020-12-16 20:59:20', NULL),
(22, 1, 'PRODUCTO CREADO', '2020-12-16 21:01:02', NULL),
(23, 1, 'PRODUCTO CREADO', '2020-12-16 21:04:23', NULL),
(24, 1, 'PRODUCTO CREADO', '2020-12-16 21:06:20', NULL),
(25, 1, 'PRODUCTO CREADO', '2020-12-16 21:08:10', NULL),
(26, 1, 'PRODUCTO CREADO', '2020-12-16 21:09:23', NULL),
(27, 1, 'TALLA CREADA', '2020-12-16 21:10:15', NULL),
(28, 1, 'TALLA CREADA', '2020-12-16 21:10:39', NULL),
(29, 1, 'TALLA CREADA', '2020-12-16 21:10:57', NULL),
(30, 1, 'TALLA CREADA', '2020-12-16 21:11:06', NULL),
(31, 1, 'TALLA CREADA', '2020-12-16 21:11:12', NULL),
(32, 1, 'TALLA CREADA', '2020-12-16 21:11:20', NULL),
(33, 1, 'TALLA CREADA', '2020-12-16 21:11:27', NULL),
(34, 1, 'TALLA CREADA', '2020-12-16 21:11:49', NULL),
(35, 1, 'TALLA CREADA', '2020-12-16 21:12:24', NULL),
(36, 1, 'TALLA CREADA', '2020-12-16 21:12:30', NULL),
(37, 1, 'TALLA CREADA', '2020-12-16 21:12:42', NULL),
(38, 1, 'TALLA CREADA', '2020-12-16 21:13:13', NULL),
(39, 1, 'TALLA CREADA', '2020-12-16 21:13:18', NULL),
(40, 1, 'TALLA CREADA', '2020-12-16 21:13:23', NULL),
(41, 1, 'TALLA CREADA', '2020-12-16 21:13:31', NULL),
(42, 1, 'TALLA CREADA', '2020-12-16 21:13:44', NULL),
(43, 1, 'TALLA CREADA', '2020-12-16 21:13:55', NULL),
(44, 1, 'PRODUCTO CREADO', '2020-12-16 21:18:52', NULL),
(45, 1, 'PRODUCTO CREADO', '2020-12-16 21:20:00', NULL),
(46, 1, 'PRODUCTO EDITADO', '2020-12-16 21:20:32', NULL),
(47, 1, 'PRODUCTO EDITADO', '2020-12-16 21:20:46', NULL),
(48, 1, 'PRODUCTO EDITADO', '2020-12-16 21:20:52', NULL),
(49, 1, 'TALLA CREADA', '2020-12-16 21:21:27', NULL),
(50, 1, 'TALLA CREADA', '2020-12-16 21:21:34', NULL),
(51, 1, 'TALLA CREADA', '2020-12-16 21:21:40', NULL),
(52, 1, 'PRODUCTO EDITADO', '2020-12-16 21:22:35', NULL),
(53, 1, 'TALLA CREADA', '2020-12-16 21:23:39', NULL),
(54, 1, 'TALLA CREADA', '2020-12-16 21:23:44', NULL),
(55, 1, 'TALLA CREADA', '2020-12-16 21:23:50', NULL),
(56, 1, 'TALLA CREADA', '2020-12-16 21:24:06', NULL),
(57, 1, 'TALLA CREADA', '2020-12-16 21:24:17', NULL),
(58, 1, 'TALLA CREADA', '2020-12-16 21:24:23', NULL),
(59, 1, 'TALLA CREADA', '2020-12-16 21:24:30', NULL),
(60, 1, 'TALLA CREADA', '2020-12-16 21:24:36', NULL),
(61, 1, 'TALLA CREADA', '2020-12-16 21:24:49', NULL),
(62, 1, 'TALLA CREADA', '2020-12-16 21:24:54', NULL),
(63, 1, 'TALLA CREADA', '2020-12-16 21:24:59', NULL),
(64, 1, 'TALLA CREADA', '2020-12-16 21:25:05', NULL),
(65, 1, 'TALLA CREADA', '2020-12-16 21:25:14', NULL),
(66, 1, 'TALLA CREADA', '2020-12-16 21:25:24', NULL),
(67, 1, 'TALLA CREADA', '2020-12-16 21:25:29', NULL),
(68, 1, 'TALLA CREADA', '2020-12-16 21:25:35', NULL),
(69, 1, 'TALLA CREADA', '2020-12-16 21:26:14', NULL),
(70, 1, 'TALLA CREADA', '2020-12-16 21:26:23', NULL),
(71, 1, 'TALLA CREADA', '2020-12-16 21:26:29', NULL),
(72, 1, 'TALLA CREADA', '2020-12-16 21:26:34', NULL),
(73, 1, 'TALLA CREADA', '2020-12-16 21:26:44', NULL),
(74, 1, 'TALLA CREADA', '2020-12-16 21:26:49', NULL),
(75, 1, 'TALLA CREADA', '2020-12-16 21:26:55', NULL),
(76, 1, 'LOGOUT', '2020-12-16 21:58:31', NULL),
(77, 1, 'USUARIO LOGEADO', '2020-12-16 21:59:06', NULL),
(78, 1, 'LOGOUT', '2020-12-16 21:59:34', NULL),
(79, 1, 'USUARIO LOGEADO', '2020-12-16 22:07:18', NULL),
(80, 1, 'TALLA CREADA', '2020-12-16 22:15:19', NULL),
(81, 1, 'TALLA CREADA', '2020-12-16 22:15:24', NULL),
(82, 1, 'TALLA CREADA', '2020-12-16 22:15:30', NULL),
(83, 1, 'TALLA CREADA', '2020-12-16 22:15:36', NULL),
(84, 1, 'TALLA CREADA', '2020-12-16 22:15:49', NULL),
(85, 1, 'TALLA CREADA', '2020-12-16 22:16:01', NULL),
(86, 1, 'TALLA CREADA', '2020-12-16 22:16:08', NULL),
(87, 1, 'TALLA CREADA', '2020-12-16 22:16:39', NULL),
(88, 1, 'TALLA CREADA', '2020-12-16 22:17:27', NULL),
(89, 1, 'TALLA CREADA', '2020-12-16 22:17:33', NULL),
(90, 1, 'TALLA CREADA', '2020-12-16 22:17:39', NULL),
(91, 1, 'TALLA CREADA', '2020-12-16 22:17:45', NULL),
(92, 1, 'TALLA CREADA', '2020-12-16 22:17:54', NULL),
(93, 1, 'TALLA CREADA', '2020-12-16 22:18:00', NULL),
(94, 1, 'TALLA CREADA', '2020-12-16 22:18:05', NULL),
(95, 1, 'TALLA CREADA', '2020-12-16 22:18:10', NULL),
(96, 1, 'TALLA CREADA', '2020-12-16 22:18:16', NULL),
(97, 1, 'TALLA CREADA', '2020-12-16 22:18:23', NULL),
(98, 1, 'TALLA CREADA', '2020-12-16 22:18:29', NULL),
(99, 1, 'TALLA CREADA', '2020-12-16 22:18:35', NULL),
(100, 1, 'TALLA CREADA', '2020-12-16 22:18:44', NULL),
(101, 1, 'TALLA CREADA', '2020-12-16 22:20:14', NULL),
(102, 1, 'TALLA CREADA', '2020-12-16 22:20:21', NULL),
(103, 1, 'TALLA CREADA', '2020-12-16 22:20:27', NULL),
(104, 1, 'TALLA CREADA', '2020-12-16 22:21:37', NULL),
(105, 1, 'TALLA CREADA', '2020-12-16 22:21:43', NULL),
(106, 1, 'TALLA CREADA', '2020-12-16 22:22:00', NULL),
(107, 1, 'TALLA CREADA', '2020-12-16 22:22:09', NULL),
(108, 1, 'TALLA CREADA', '2020-12-16 22:22:24', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tallas`
--

CREATE TABLE `tallas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `producto` bigint(20) UNSIGNED NOT NULL,
  `talla` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `almacenado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tallas`
--

INSERT INTO `tallas` (`id`, `producto`, `talla`, `cantidad`, `almacenado`, `created_at`, `updated_at`) VALUES
(1, 1, 'S', 14, 14, NULL, '2020-12-11 22:36:52'),
(2, 1, 'M', 15, 15, NULL, NULL),
(3, 1, 'L', 15, 15, NULL, NULL),
(4, 1, 'XL', 14, 14, NULL, '2020-11-26 09:38:43'),
(5, 2, 'S', 2, 2, NULL, '2020-12-11 22:36:52'),
(6, 2, 'M', 14, 14, NULL, '2020-11-26 09:28:34'),
(7, 2, 'L', 15, 15, NULL, NULL),
(8, 2, 'XL', 14, 14, NULL, '2020-11-26 09:38:43'),
(9, 9, 'Talla única', 35, 35, NULL, NULL),
(10, 29, '46', 14, 14, NULL, NULL),
(11, 29, '43', 12, 12, NULL, NULL),
(12, 25, '38-42', 54, 54, NULL, NULL),
(13, 25, '42-46', 35, 35, NULL, NULL),
(14, 25, '46-50', 23, 23, NULL, NULL),
(15, 25, '50-54', 22, 22, NULL, NULL),
(16, 29, '45', 54, 54, NULL, NULL),
(17, 28, '46', 21, 21, NULL, '2020-12-16 21:54:55'),
(18, 28, '50', 55, 55, NULL, NULL),
(19, 28, '52', 4, 4, NULL, NULL),
(20, 27, '40', 32, 32, NULL, NULL),
(21, 27, '43', 12, 12, NULL, NULL),
(22, 27, '48', 66, 66, NULL, NULL),
(23, 27, '46', 55, 55, NULL, NULL),
(24, 27, '42', 77, 77, NULL, NULL),
(25, 27, '52', 21, 21, NULL, NULL),
(29, 31, 'M', 32, 32, NULL, NULL),
(30, 31, 'L', 12, 12, NULL, NULL),
(31, 31, 'XL', 66, 66, NULL, NULL),
(32, 31, 'S', 32, 32, NULL, NULL),
(33, 30, 'S', 55, 55, NULL, NULL),
(34, 30, 'M', 77, 77, NULL, NULL),
(35, 30, 'L', 33, 33, NULL, NULL),
(36, 30, 'XL', 25, 25, NULL, NULL),
(37, 32, 'S', 13, 13, NULL, NULL),
(38, 32, 'M', 44, 44, NULL, NULL),
(39, 32, 'L', 45, 45, NULL, NULL),
(40, 32, 'XL', 83, 83, NULL, NULL),
(41, 33, 'M', 23, 23, NULL, NULL),
(42, 33, 'S', 54, 54, NULL, NULL),
(43, 33, 'L', 14, 14, NULL, NULL),
(44, 33, 'XL', 65, 65, NULL, NULL),
(45, 34, 'Talla única', 33, 33, NULL, NULL),
(46, 35, 'S-M', 45, 45, NULL, NULL),
(47, 35, 'M-L', 56, 56, NULL, NULL),
(48, 35, 'L-XL', 72, 72, NULL, NULL),
(49, 26, 'S-M', 35, 35, NULL, NULL),
(50, 26, 'M-L', 13, 13, NULL, NULL),
(51, 26, 'L-XL', 64, 64, NULL, NULL),
(52, 3, 'S', 43, 43, NULL, NULL),
(53, 3, 'M', 32, 32, NULL, NULL),
(54, 3, 'L', 54, 54, NULL, NULL),
(55, 3, 'XL', 64, 64, NULL, NULL),
(56, 4, 'S', 34, 34, NULL, NULL),
(57, 4, 'M', 43, 43, NULL, NULL),
(58, 4, 'L', 12, 12, NULL, NULL),
(59, 4, 'XL', 0, 0, NULL, NULL),
(60, 5, 'S', 33, 33, NULL, NULL),
(61, 5, 'M', 33, 33, NULL, NULL),
(62, 5, 'L', 34, 34, NULL, NULL),
(63, 5, 'XL', 43, 43, NULL, NULL),
(64, 6, 'S', 54, 54, NULL, NULL),
(65, 6, 'M', 32, 32, NULL, NULL),
(66, 6, 'L', 65, 65, NULL, NULL),
(67, 6, 'XL', 76, 76, NULL, NULL),
(68, 7, 'S', 12, 12, NULL, NULL),
(69, 7, 'M', 23, 23, NULL, NULL),
(70, 7, 'L', 33, 33, NULL, NULL),
(71, 7, 'XL', 24, 24, NULL, NULL),
(72, 8, 'S', 55, 55, NULL, NULL),
(73, 8, 'M', 43, 43, NULL, NULL),
(74, 8, 'L', 65, 65, NULL, NULL),
(75, 8, 'XL', 17, 17, NULL, NULL),
(76, 29, '40', 13, 13, NULL, NULL),
(77, 29, '44', 55, 55, NULL, NULL),
(78, 29, '49', 32, 32, NULL, NULL),
(79, 29, '52', 6, 6, NULL, NULL),
(80, 29, '42', 21, 21, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `tipo`, `activo`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@hotmail.com', NULL, '09d2e674bd90235ae2f5652799e4e0cad2ea29f08ba16c5f45fd73173fc696eef3929a6b4e9e0143b398d80f73af38f3a469ebf8543a1e1739a2a1759e84046b', 'Administrador', 1, NULL, '2020-11-25 22:37:57', '2020-11-25 22:37:57'),
(3, 'ruben', 'ruben_wada_79@hotmail.com', '2020-11-26 09:23:28', '$2y$10$BrHS4ErWMFUougCnGZfj6.nNoNhtlY3HqqGGh1M9dubGzgfN04nMu', 'Cliente', 1, NULL, '2020-11-26 09:21:14', '2020-11-26 09:23:28'),
(4, 'Carlos', 'ruben_wada_69@hotmail.com', '2020-11-26 09:35:16', '$2y$10$C353DO.7GaEQiJxK.X5BM.xlYEOuNzspXhUxn5uRCYbtP9loBTKky', 'Cliente', 1, NULL, '2020-11-26 09:34:47', '2020-11-26 09:35:16'),
(5, 'david', 'david.fonta.97@gmail.com', '2020-12-11 22:32:38', '$2y$10$sPY036Ox.Pf2rN699/.Tme6MCtqnbwC/11eP.V.gKmEciyexqvz.m', 'Cliente', 1, NULL, '2020-12-11 22:28:47', '2020-12-11 22:32:38'),
(6, 'lucia', 'lurumar@hotmail.com', '2020-12-16 21:34:04', '$2y$10$KTCQKbyJBiwtPOx.s1JXcO634IJRGFUhwMSGBkrVS18pQTjjWLCDW', 'Cliente', 1, NULL, '2020-12-16 21:32:52', '2020-12-16 21:34:04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `direcciones_usuario_foreign` (`usuario`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `filas`
--
ALTER TABLE `filas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `filas_talla_foreign` (`talla`),
  ADD KEY `filas_pedido_foreign` (`pedido`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pagos_usuario_foreign` (`usuario`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedidos_usuario_foreign` (`usuario`),
  ADD KEY `pedidos_direccion_foreign` (`direccion`),
  ADD KEY `pedidos_pago_foreign` (`pago`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `registros_usuario_foreign` (`usuario`);

--
-- Indices de la tabla `tallas`
--
ALTER TABLE `tallas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tallas_producto_foreign` (`producto`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `filas`
--
ALTER TABLE `filas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT de la tabla `tallas`
--
ALTER TABLE `tallas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD CONSTRAINT `direcciones_usuario_foreign` FOREIGN KEY (`usuario`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `filas`
--
ALTER TABLE `filas`
  ADD CONSTRAINT `filas_pedido_foreign` FOREIGN KEY (`pedido`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `filas_talla_foreign` FOREIGN KEY (`talla`) REFERENCES `tallas` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_usuario_foreign` FOREIGN KEY (`usuario`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_direccion_foreign` FOREIGN KEY (`direccion`) REFERENCES `direcciones` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pedidos_pago_foreign` FOREIGN KEY (`pago`) REFERENCES `pagos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pedidos_usuario_foreign` FOREIGN KEY (`usuario`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `registros`
--
ALTER TABLE `registros`
  ADD CONSTRAINT `registros_usuario_foreign` FOREIGN KEY (`usuario`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `tallas`
--
ALTER TABLE `tallas`
  ADD CONSTRAINT `tallas_producto_foreign` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
