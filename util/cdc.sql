DROP DATABASE IF EXISTS cdc;

CREATE DATABASE cdc;

use cdc;

DROP TABLE IF EXISTS `livros`;

CREATE TABLE `livros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

LOCK TABLES `livros` WRITE;

INSERT INTO `livros` VALUES (1,'Começando com node','Livro legal',39.90),(3,'Começando com node','Livro legal',39.90),(4,'Começando com node','Livro legal',39.90),(5,'Livro feliz','Eita',2.00),(6,'Serviçoes e Micro Serviços com NodeJS','JKkjadsflkajsdhfkljasldkfja',100.00),(7,'Livro de Nodejs','jsadfklajs',100.00),(8,'Livro de Nodejs','jsadfklajs',100.00),(9,'Livro que quermos','kfjl;af;klasdf',11010.00),(10,'Eita','dfklajlfka',100.00);

UNLOCK TABLES;
