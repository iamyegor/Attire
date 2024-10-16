BEGIN;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clear existing data
DELETE FROM categories;
DELETE FROM product_images;
DELETE FROM product_sizes;
DELETE FROM product_colors;
DELETE FROM products;

-- Male categories
INSERT INTO categories (category_id, name, gender) VALUES
('82c46ab3-0854-4caa-a421-24060f75b6ff', 'Футболки', 1),
('36e7c91e-e844-437e-a04f-792f7950a3c7', 'Шорты', 1),
('93c503da-3a98-4d52-a413-08963d9a874c', 'Джинсы', 1),
('93c503da-3a98-4d52-a413-09962d9a875c', 'Рубашки', 1),
('9257f496-fd5b-411a-9031-9a3d6c45cca8', 'Толстовки и худи', 1);

-- Female categories
INSERT INTO categories (category_id, name, gender) VALUES
('82c46ab3-0854-4caa-a421-14060f75b6ff', 'Футболки и топы', 2),
('36e7c91e-e844-437e-a04f-192f7950a3c7', 'Шорты', 2),
('93c503da-3a98-4d52-a413-18963d9a874c', 'Джинсы', 2),
('93c503da-3a98-4d52-a413-19963d9a875c', 'Рубашки и блузки', 2),
('9257f496-fd5b-411a-9031-1a3d6c45cca8', 'Толстовки и худи', 2);

-- Include male product scripts
\i male/jeans.sql
\i male/shirts.sql
\i male/shorts.sql
\i male/t-shirts.sql
\i male/hoodies.sql

-- Include female product scripts
\i female/jeans.sql
\i female/shirts.sql
\i female/shorts.sql
\i female/t-shirts.sql
\i female/hoodies.sql

COMMIT;