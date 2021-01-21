-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-02-2020 a las 20:46:54
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taller`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE OR REPLACE TABLE usuarios (
  id int(255) NOT NULL,
  user varchar(255) COLLATE utf8_spanish2_ci NOT NULL UNIQUE,
  passwd varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  tipo varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  email varchar(255) COLLATE utf8_spanish2_ci NOT NULL UNIQUE,
  activo tinyint(0) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

/* ALTER TABLE usuarios ADD UNIQUE (user); */
-- ALTER TABLE `usuarios` ADD `activo` TINYINT(0) NOT NULL AFTER `email`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE OR REPLACE TABLE registros (
  id int(255) NOT NULL,
  tipo varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  usuario int(255) NOT NULL,
  fecha date NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT UsuarioxRegistro FOREIGN KEY (usuario) REFERENCES usuarios (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE OR REPLACE TABLE productos (
  id int(255) NOT NULL,
  nombre varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  categoria varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  subcategoria varchar(255) COLLATE utf8_spanish2_ci,
  marca varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  equipo varchar(255) COLLATE utf8_spanish2_ci,
  descripcion varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  fecha timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  precio float NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE OR REPLACE TABLE pedidos (
  id int(255) NOT NULL,
  usuario int(255) NOT NULL,
  total float NOT NULL,
  estado varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  fecha date NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT UsuarioxPedido FOREIGN KEY (usuario) REFERENCES usuarios (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filas`
--

CREATE OR REPLACE TABLE filas (
  id int(255) NOT NULL,
  producto int(255) NOT NULL,
  pedido int(255) NOT NULL,
  cantidad int(255) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT ProductoxFila FOREIGN KEY (producto) REFERENCES productos (id),
  CONSTRAINT PedidoxFila FOREIGN KEY (pedido) REFERENCES pedidos (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE OR REPLACE TABLE fotos (
  id int(255) NOT NULL,
  producto int(255) NOT NULL,
  enlace varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT ProductoxFoto FOREIGN KEY (producto) REFERENCES productos (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tallas`
--

CREATE OR REPLACE TABLE tallas (
  id int(255) NOT NULL,
  producto int(255) NOT NULL,
  talla varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  cantidad int(255) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT ProductoxTalla FOREIGN KEY (producto) REFERENCES productos (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE OR REPLACE TABLE direcciones (
  id int(255) NOT NULL,
  usuario int(255) NOT NULL,
  nombre varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  apellidos varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  tipo_via varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  direccion varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  numero varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  ciudad varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  localidad varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  codigo_postal int(255) NOT NULL,
  dni varchar(9) COLLATE utf8_spanish2_ci NOT NULL,
  detalles varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  -- principal tinyint(0) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT UsuarioxDireccion FOREIGN KEY (usuario) REFERENCES usuarios (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tallas`
--

CREATE OR REPLACE TABLE pagos (
  id int(255) NOT NULL,
  usuario int(255) NOT NULL,
  titular varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  tarjeta varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  ccv int(3) NOT NULL,
  mes int(2) NOT NULL,
  año int(4) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT UsuarioxPago FOREIGN KEY (usuario) REFERENCES usuarios (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
COMMIT;

-- -------------------------------------------------------

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


----- INSERTS -----

--usuarios--
INSERT INTO usuarios (id,user,passwd,tipo,email) VALUES(0,'admin','admin','administrador','ruben_wada_79@hotmail.com');
INSERT INTO usuarios (id,user,passwd,tipo,email) VALUES(1,'ruben','ruben','empleado','ruben-kurosaki@hotmail.com');
INSERT INTO usuarios (id,user,passwd,tipo,email) VALUES(2,'cliente','cliente','cliente','tito7995@hotmail.com');

--productos--
INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha) VALUES(0,'Camiseta Cavaliers','Ropa','Camiseta','Adidas','Cleveland Cavaliers','Camiseta con el logotipo de los Cleveland Cavaliers',35.00,CURDATE());
INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha) VALUES(1,'Camiseta Rockets','Ropa','Camiseta','Adidas','Houston Rockets','Camiseta con el logotipo de los Houston Rockets',35.00,CURDATE());
INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha) VALUES(2,'Camiseta Lakers','Ropa','Camiseta','Adidas','Los Angeles Lakers','Camiseta con el logotipo de Los Angeles Lakers',35.00,CURDATE());
INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha) VALUES(3,'Camiseta Raptors','Ropa','Camiseta','Adidas','Toronto Raptors','Camiseta con el logotipo de los Toronto Raptors',35.00,CURDATE());
INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha) VALUES(4,'Equipación Cavaliers','Ropa','Equipación','Nike','Cleveland Cavaliers','Equipación de los Cleveland Cavaliers',65.00,CURDATE());
INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha) VALUES(5,'Equipación Rockets','Ropa','Equipación','Nike','Houston Rockets','Equipación de los Houston Rockets',65.00,CURDATE());
INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha) VALUES(6,'Equipación Lakers','Ropa','Equipación','Nike','Los Angeles Lakers','Equipación de Los Angeles Lakers',65.00,CURDATE());
INSERT INTO productos (id,nombre,categoria,subcategoria,marca,equipo,descripcion,precio,fecha) VALUES(7,'Equipación Raptors','Ropa','Equipación','Nike','Toronto Raptors','Equipación de los Toronto Raptors',65.00,CURDATE());

--pedidos--
INSERT INTO pedidos (id,usuario,estado,total,fecha) VALUES (0,2,'pendiente',70.00,CURDATE());
INSERT INTO pedidos (id,usuario,estado,total,fecha) VALUES (1,2,'pendiente',130.00,CURDATE());
INSERT INTO pedidos (id,usuario,estado,total,fecha) VALUES (2,2,'pendiente',170.00,CURDATE());


--filas--
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (0,1,0,1);
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (1,2,0,1);
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (2,5,0,1);
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (3,5,1,2);
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (4,0,1,1);
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (5,3,2,1);
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (6,8,2,1);
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (7,9,2,3);
INSERT INTO filas (id,producto,pedido,cantidad) VALUES (8,15,2,1);


--fotos--


--tallas--


--direcciones--
INSERT INTO direcciones (id,usuario,nombre,apellidos,tipo_via,direccion,numero,ciudad,localidad,codigo_postal,detalles,principal,dni) 
      VALUES (0,2,'Cliente','Rodriguez Zapatero','calle','tirso del arenal','17','Guadalajara','Guadalajara','19003','Portal 22ºB, Piso 1ºB',true,'03204433J');


--pagos--
INSERT INTO pagos (id,usuario,titular,tarjeta,ccv,mes,año) VALUES (0,2,'Carmen Cospedal Gutierrez',0032987332578345,004,02,2025);
INSERT INTO pagos (id,usuario,titular,tarjeta,ccv,mes,año) VALUES (1,2,'Pedro Filibustero Ordoñez',0032987332578342,031,05,2023);



--registros--





