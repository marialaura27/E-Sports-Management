CREATE DATABASE esports;

CREATE TABLE times(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(45) NOT NULL
);

CREATE TABLE jogadores(
	id SERIAL primary key,
	nome VARCHAR(45) NOT NULL,
	idade int NOT NULL,
	time_id int NOT NULL,
	FOREIGN KEY (time_id) REFERENCES time(id)
);