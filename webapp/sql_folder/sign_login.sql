--- create the database
Create DataBase signup_db;



-- connect to the newly created database
\c signup_db;



create table if not exists users ( 
id serial primary key,
username varchar(50) unique not null,
password varchar(50) not null,
created_at timestamp default current timestamp






);
