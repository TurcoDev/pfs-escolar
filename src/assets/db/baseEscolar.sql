create database escolar;
use escolar;

create table IF NOT EXISTS `ciudad` (`id_ciudad` int auto_increment not null primary key, `nombre` varchar(45) not null);

insert into ciudad (nombre) values ('tandil'), ('mar del plata');

SELECT * FROM ciudad;