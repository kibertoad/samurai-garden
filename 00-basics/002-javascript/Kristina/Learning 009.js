CREATE TABLE person
(person_id SMALLINT UNSIGNED,
    fname VARCHAR(20),
    lname VARCHAR(20),
    eye_color ENUM('BR', 'BL','GR'),
    birth_date DATE,
    street VARCHAR(30),
    city VARCHAR(20),
    state VARCHAR(20),
    country VARCHAR(20),
    postal_code VARCHAR(20),
    CONSTRAINT pk_person PRIMARY KEY (person_id)
);

desc person;

CREATE TABLE favorite_food
(person_id SMALLINT UNSIGNED,
    food VARCHAR(20),
    CONSTRAINT pk_favorite_food PRIMARY KEY (person_id, food),
    CONSTRAINT fk_fav_food_person_id FOREIGN KEY (person_id)
REFERENCES person (person_id)
);

desc favorite_food;

set foreign_key_checks=0;
ALTER TABLE person
MODIFY person_id SMALLINT UNSIGNED AUTO_INCREMENT;
set foreign_key_checks=1;

DESC person;

INSERT INTO person
(person_id, fname, lname, eye_color, birth_date)
VALUES (null, 'William', 'Turner', 'BR', '1972-05-27');

select person_id, fname, lname, birth_date
from person;

select person_id, fname, lname, birth_date
from person;
where person_id=1

select person_id, fname, lname, birth_date
from person;
where lname='Turner'

insert into favorite_food (person_id, food)
values (1, 'The Blood of Enemies');

insert into favorite_food (person_id, food)
values (1, 'Maidens tears');

insert into favorite_food (person_id, food)
values (1, 'Babies');

select food
from favorite_food
where person_id=1
order by food;

insert into person
(person_id, fname, lname, eye_color, birth_date, street, city, state, country, postal_code)
values (null, 'Death', 'Harbringer of Doom', 'BR', '1997-10-29', '23 Ashlands, Hades Estate', 'Hell', 'Underworld', 'Universe 404', '666');

select person_id, fname, lname, birth_date
from person;

UPDATE person
SET street='1225 Tremont St.',
    city='Boston',
    state='MA',
    country='USA',
    postal_code='02138'
WHERE person_id=1;

DELETE FROM person
WHERE person_id = 2;

select person_id, fname, lname, birth_date
from person;

//doing things wrong here, test

INSERT INTO person
(person_id, fname, eye_color, birth_date)
VALUES (1, 'Charles', 'Fulton', 'GR', '1968-01-15');

INSERT INTO favorite_food (person_id, food)
VALUES (999, 'lasagna');

UPDATE person
SET eye_color='ZZ'
WHERE person_id=1;

UPDATE person
SET birth_date='DEC-21-1980'
WHERE person_id=1;
//
UPDATE person
SET birth_date=str_to_date('DEC-21-1980', '%b-%d-%Y')
WHERE person_id=1;
select person_id, fname, lname, birth_date
from person
//

