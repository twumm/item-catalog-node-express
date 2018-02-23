CREATE TABLE users (
    id serial primary key,
    name varchar(60),
    password varchar(60),
    picture varchar(250),
    email varchar(100)
);
CREATE TABLE category (
    id serial primary key,
    name varchar(80),
    user_id integer references users(id) on delete cascade
);
CREATE TABLE items (
    id serial primary key,
    name varchar(80),
    description varchar(1000),
    category_id integer references category(id),
    user_id integer references users(id) on delete cascade
);
-- ALTER TABLE category
-- ADD COLUMN item_id integer references items(id);
-- ALTER TABLE items
-- ADD COLUMN category_id integer references category(id) on delete cascade;
