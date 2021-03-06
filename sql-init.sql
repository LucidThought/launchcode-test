CREATE TABLE quotes(
	id serial PRIMARY KEY,
	departure_location varchar(50) NOT NULL,
	destination_location varchar(50) NOT NULL,
	depart_date timestamp with time zone NOT NULL,
	return_date timestamp with time zone NOT NULL,
	number_travellers int4 NOT NULL,
	transportation varchar(400),
	contact varchar(100) NOT NULL,
	name varchar(80) NOT NULL,
	price int4 NOT NULL,
	created_at timestamp with time zone NOT NULL DEFAULT now()
	);
	
INSERT INTO quotes(
	departure_location,
	destination_location,
	depart_date,
	return_date,
	number_travellers,
	transportation,
	contact,
	name,
	price)
VALUES 
	('Calgary International',
	'Toronto International',
	(SELECT to_timestamp('18/12/2020 10:00 pm', 'DD/MM/YYYY HH12:MI pm')),
	(SELECT to_timestamp('19/01/2021 09:00 am', 'DD/MM/YYYY HH12:MI pm')),
	2,
	'["Speed Boat"]',
	'Phone:403-555-4817',
	'Jim Bigly',
	2655),
	('Calgary International',
	'Vancouver International',
	(SELECT to_timestamp('05/01/2021 07:00 am', 'DD/MM/YYYY HH12:MI pm')),
	(SELECT to_timestamp('22/01/2021 11:30 am', 'DD/MM/YYYY HH12:MI pm')),
	5,
	'["Motorcycle"]',
	'Phone:403-555-4817',
	'Robert Cross',
	6780),
	('Calgary International',
	'St. Johns',
	(SELECT to_timestamp('26/01/2021 05:00 am', 'DD/MM/YYYY HH12:MI pm')),
	(SELECT to_timestamp('12/02/2021 08:00 am', 'DD/MM/YYYY HH12:MI pm')),
	7,
	'["Moped"]',
	'Phone:403-555-4817',
	'Ernesto California',
	4500)
	