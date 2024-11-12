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
    data_nascimento date not null,
    biografia text,
    estilo_arte enum(
        'Web Design', 'Fotografia', 'Jazz', 'Pintura', 'Escultura', 
        'Cinema', 'Animação', 'Música Clássica', 'Dança', 'Teatro',
        'Grafite', 'Moda', 'Arquitetura', 'Design de Interiores',
        'Ilustração', 'Design de Produto', 'Arte Digital', 
        'Desenvolvimento de Jogos', 'Escrita Criativa', 'Quadrinhos', 
        'Arte Conceitual', 'Culinária', 'Outros'
    ) not null
)

create table produtos(
    id_produto int not null auto_increment primary key,
    nome varchar(255) not null,
    preco decimal(10, 2) not null,
    quantidade int not null,
    autor varchar(254) not null,
    descricao text,
    imagem_url VARCHAR(255),
    id_user int,

    foreign key(id_user) references usuarios(id_user)
)

DESCRIBE produtos

select * from usuarios
select * from produtos
drop database mostra
ALTER TABLE produtos ADD imagem_url VARCHAR(255)