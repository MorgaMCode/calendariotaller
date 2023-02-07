CREATE DATABASE IF NOT EXISTS calendario;


USE calendario


CREATE TABLE eventos (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(50) NOT NULL,
    fechaI DATE NOT NULL,
    fechaF DATE NOT NULL ,
    PRIMARY KEY (id)
    
);

CREATE TABLE participantes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nameP VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE participantePorEvento (
    id INT(11) NOT NULL AUTO_INCREMENT,
    eventos_id INT(11) NOT NULL,
    participante_id INT(11) NOT NULL,
    PRIMARY KEY (id),    
    FOREIGN KEY(eventos_id) REFERENCES eventos (id) ,
    FOREIGN KEY(participante_id) REFERENCES participantes(id) 
);

