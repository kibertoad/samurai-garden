SELECT*FROM actor;
SELECT first_name FROM actor;
SELECT last_name FROM actor;
SELECT first_name,last_name, email FROM customer;
SELECT DISTINCT release_year from FILM;
SELECT DISTINCT (release_year) from FILM;
SELECT DISTINCT rental_rate from FILM;
SELECT DISTINCT rating from FILM;
SELECT * FROM payment;
SELECT COUNT (*) FROM payment;
SELECT COUNT (amount) FROM payment;
SELECT amount FROM payment;
SELECT COUNT (DISTINCT amount) FROM payment;
SELECT * FROM customer;
SELECT * FROM customer
WHERE first_name = 'Jerry';
SELECT * FROM film;
SELECT * FROM film
WHERE rental_rate >4;
SELECT * FROM film
WHERE rental_rate >4 AND replacement_cost >=19.99;
SELECT * FROM film
WHERE rental_rate >4 AND replacement_cost >=19.99 AND rating='R';
SELECT title FROM film
WHERE rental_rate >4 AND replacement_cost >=19.99 AND rating='R';
SELECT COUNT (title) FROM film
WHERE rental_rate >4 AND replacement_cost >=19.99 AND rating='R';
SELECT COUNT (*) FROM film
WHERE rating='R' OR rating='PG-13';
SELECT * FROM film
WHERE rating!='R';
SELECT email FROM customer
WHERE first_name='Nancy' AND last_name='Thomas';
SELECT description FROM film
WHERE title = 'Outlaw Hanky';
SELECT phone FROM address
WHERE address = '259 Ipoh Drive';
SELECT * FROM customer
ORDER BY first_name ASC;
SELECT * FROM customer
ORDER BY first_name DESC;
SELECT * FROM customer
ORDER BY store_id DESC;
SELECT store_id, first_name, last_name FROM customer
ORDER BY store_id, first_name;
SELECT store_id, first_name, last_name FROM customer
ORDER BY store_id DESC, first_name ASC;
SELECT first_name, last_name FROM customer
ORDER BY store_id DESC, first_name ASC;
SELECT * FROM payment
ORDER BY payment_date ASC;
SELECT * FROM payment
ORDER BY payment_date DESC;
SELECT * FROM payment
ORDER BY payment_date DESC
LIMIT 5;
SELECT * FROM payment
WHERE amount !=0
ORDER BY payment_date DESC
LIMIT 5;
SELECT * FROM payment;
SELECT customer_id FROM payment
WHERE amount>0
ORDER BY payment_date ASC
LIMIT 10;
SELECT * FROM film;
SELECT title, length FROM film
ORDER BY length ASC
LIMIT 5;
SELECT COUNT (title) from film
WHERE length <=50;
SELECT * FROM payment
LIMIT 2;
SELECT * FROM payment
WHERE amount BETWEEN 8 AND 9;
SELECT COUNT(*) FROM payment
WHERE amount BETWEEN 8 AND 9;
SELECT COUNT(*) FROM payment
WHERE amount NOT BETWEEN 8 AND 9;
SELECT * FROM payment
WHERE amount NOT BETWEEN 8 AND 9;
SELECT * FROM payment
WHERE payment_date BETWEEN '2007-02-01' AND '2007-02-15';
SELECT * FROM payment
WHERE payment_date BETWEEN '2007-02-01' AND '2007-02-14';
SELECT * FROM payment;
SELECT DISTINCT(amount) FROM payment
ORDER BY amount;
SELECT * FROM payment
WHERE amount IN (0.99,1.98,1.99);
SELECT COUNT(*) FROM payment
WHERE amount IN (0.99,1.98,1.99);
SELECT COUNT(*) FROM payment
WHERE amount NOT IN (0.99,1.98,1.99);
SELECT * FROM customer;
SELECT * FROM customer
WHERE first_name IN ('John','Jake','Julie');
SELECT * FROM customer
WHERE first_name NOT IN ('John','Jake','Julie');
SELECT*FROM customer
WHERE first_name LIKE 'J%';
SELECT COUNT(*)FROM customer
WHERE first_name LIKE 'J%';
SELECT*FROM customer
WHERE first_name LIKE 'J%' AND last_name LIKE 'S%';
SELECT COUNT(*)FROM customer
WHERE first_name LIKE 'J%' AND last_name LIKE 'S%';
SELECT*FROM customer
WHERE first_name LIKE 'j%' AND last_name LIKE 's%';
SELECT COUNT(*)FROM customer
WHERE first_name LIKE 'j%' AND last_name LIKE 's%';
SELECT*FROM customer
WHERE first_name ILIKE 'j%' AND last_name ILIKE 's%';
SELECT COUNT(*)FROM customer
WHERE first_name ILIKE 'j%' AND last_name ILIKE 's%';
SELECT*FROM customer
WHERE first_name LIKE '%er%';
SELECT*FROM customer
WHERE first_name LIKE '_er%';
SELECT*FROM customer
WHERE first_name NOT LIKE '_er%';
SELECT*FROM customer
WHERE first_name LIKE 'A%'
ORDER BY last_name;
SELECT*FROM customer
WHERE first_name LIKE 'A%' AND last_name NOT LIKE 'B%'
ORDER BY last_name;
SELECT COUNT(*)FROM payment
WHERE amount >=5;
SELECT COUNT(*) FROM actor
WHERE first_name LIKE 'P%';
SELECT DISTINCT COUNT(district) FROM address;
//Ok I don't get how these two are different but they return different things
SELECT COUNT (DISTINCT(district)) FROM address;
SELECT DISTINCT(district) FROM address;
SELECT COUNT(*) FROM film
WHERE rating='R' AND replacement_cost BETWEEN 5 AND 15;
SELECT COUNT(*)FROM film
WHERE title LIKE '%Truman%';
//26 of 83 complete, UDEMY