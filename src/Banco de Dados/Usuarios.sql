create database mostra

use mostra

create table usuarios(
    id_user int not null auto_increment primary key,
    nome varchar(255) not null,
    sobrenome varchar(255) not null,
    username varchar(255) not null,
    cpf varchar(255) not null,
    email varchar(255) not null unique,
    senha varchar(255) not null,
    data_nascimento date not null
)

create table produtos(
    id_produto int not null auto_increment primary key,
    nome varchar(255) not null,
    preco decimal(10, 2) not null,
    quantidade int not null,
    autor varchar(254) not null,
    descricao text
)

drop table produtos

select * from produtos
ALTER TABLE produtos MODIFY id_user int DEFAULT NULL;
