DROP DATABASE IF EXISTS dateNight_db;


CREATE DATABASE dateNight_db


USE date_night_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(18) NOT NULL,
    first_name VARCHAR(18) NOT NULL,
    last_name VARCHAR(18) NOT NULL,
    password VARCHAR(18) NOT NULL,
    date_of_birth DATE NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE survey (
    id INTEGER AUTO_INCREMENT NOT NULL,
    survey_name VARCHAR(18) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE survey_lines (
    id INTEGER AUTO_INCREMENT NOT NULL,
    survey_id INTEGER NOT NULL,
    question VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    INDEX survey_lines (survey_id),
    FOREIGN KEY (survey_id)
        REFERENCES survey(id)
        ON DELETE CASCADE
);

CREATE TABLE survey_answers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    survey_line_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    answer INTEGER NOT NULL,
    PRIMARY KEY(id),

    INDEX(survey_line_id),
    FOREIGN KEY (survey_line_id)
        REFERENCES survey_lines(id)
        ON DELETE CASCADE,

    INDEX(user_id),
    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);