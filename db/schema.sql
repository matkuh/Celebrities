### Schema
DROP DATABASE IF EXISTS celebrity_db
CREATE DATABASE celebrity_db;
USE celebrity_db;

CREATE TABLE celebrities
(
	id int NOT NULL AUTO_INCREMENT,
	celebrity_name varchar(255) NOT NULL,
	exiled BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
    