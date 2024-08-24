BEGIN TRANSACTION;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

delete from categories;
delete from product_images;
delete from product_sizes;
delete from product_colors;
delete from products;

-- male categories
insert into categories (category_id, name, gender) VALUES ('82c46ab3-0854-4caa-a421-24060f75b6ff', 'Футболки', 1);
insert into categories (category_id, name, gender) VALUES ('36e7c91e-e844-437e-a04f-792f7950a3c7', 'Шорты', 1);
insert into categories (category_id, name, gender) VALUES ('93c503da-3a98-4d52-a413-08963d9a874c', 'Джинсы', 1);
---
insert into categories (category_id, name, gender) VALUES ('93c503da-3a98-4d52-a413-09962d9a875c', 'Рубашки', 1);
--
insert into categories (category_id, name, gender) VALUES ('9257f496-fd5b-411a-9031-9a3d6c45cca8', 'Толстовки и худи', 1);

-- female categories
insert into categories (category_id, name, gender) VALUES ('82c46ab3-0854-4caa-a421-14060f75b6ff', 'Футболки и топы', 2);
insert into categories (category_id, name, gender) VALUES ('36e7c91e-e844-437e-a04f-192f7950a3c7', 'Шорты', 2);
insert into categories (category_id, name, gender) VALUES ('93c503da-3a98-4d52-a413-18963d9a874c', 'Джинсы', 2);
insert into categories (category_id, name, gender) VALUES ('93c503da-3a98-4d52-a413-19963d9a875c', 'Рубашки и блузки', 2);
insert into categories (category_id, name, gender) VALUES ('9257f496-fd5b-411a-9031-1a3d6c45cca8', 'Толстовки и худи', 2);

-- male products
-- футболки
insert into products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    (
        '517b15d4-10c3-425f-b4eb-51c5b7973f18', -- product_id
        4500,
        'Поло мужское',
        'Качественное мужское поло',
        0,
        '2001-09-28',
        false,
        '82c46ab3-0854-4caa-a421-24060f75b6ff',
        'TopG',
        'Хлопок',
        '13086/CI'
    );
insert into product_colors (id, hex, name, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56585', '#000', 'Чёрный', '517b15d4-10c3-425f-b4eb-51c5b7973f18');
insert into product_colors (id, hex, name, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56584', '#fff', 'Белый', '517b15d4-10c3-425f-b4eb-51c5b7973f18');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56584', 'M', '517b15d4-10c3-425f-b4eb-51c5b7973f18');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56583', 'L', '517b15d4-10c3-425f-b4eb-51c5b7973f18');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56582', 'XL', '517b15d4-10c3-425f-b4eb-51c5b7973f18');
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df87', 'e927578d-c3ea-4b93-8bea-38ae3e46df87.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f18', 1);
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df86', 'e927578d-c3ea-4b93-8bea-38ae3e46df86.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f18', 2);
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df85', 'e927578d-c3ea-4b93-8bea-38ae3e46df85.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f18', 3);

insert into products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    (
        '517b15d4-10c3-425f-b4eb-51c5b7973f17', -- product_id
        6500,
        'Поло с полосками мужское',
        'Качественное мужское поло с полосками',
        0,
        '2023-11-28',
        true,
        '82c46ab3-0854-4caa-a421-24060f75b6ff',
        'TopG',
        'Хлопок',
        '12086/CI'
    );
insert into product_colors (id, hex, name, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56575', '#000', 'Чёрный', '517b15d4-10c3-425f-b4eb-51c5b7973f17');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56574', 'M', '517b15d4-10c3-425f-b4eb-51c5b7973f17');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56573', 'L', '517b15d4-10c3-425f-b4eb-51c5b7973f17');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56572', 'XL', '517b15d4-10c3-425f-b4eb-51c5b7973f17');
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df77', 'e927578d-c3ea-4b93-8bea-38ae3e46df77.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f17', 1);
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df76', 'e927578d-c3ea-4b93-8bea-38ae3e46df76.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f17', 2);
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df75', 'e927578d-c3ea-4b93-8bea-38ae3e46df75.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f17', 3);

insert into products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    (
        '517b15d4-10c3-425f-b4eb-51c5b7973f16', -- product_id
        3500,
        'Футболка Hope мужская',
        'Качественное мужская футболка HOPE',
        0,
        '2023-11-02',
        true,
        '82c46ab3-0854-4caa-a421-24060f75b6ff', -- category_id
        'TopG',
        'Хлопок',
        '130844/CI'
    );
insert into product_colors (id, hex, name, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56565', '#696969', 'Серый', '517b15d4-10c3-425f-b4eb-51c5b7973f16');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56564', 'M', '517b15d4-10c3-425f-b4eb-51c5b7973f16');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56563', 'L', '517b15d4-10c3-425f-b4eb-51c5b7973f16');
insert into product_sizes (id, value, product_id) VALUES ('0caf73ed-902c-4f98-acfb-550ac8b56562', 'XL', '517b15d4-10c3-425f-b4eb-51c5b7973f16');
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df67', 'e927578d-c3ea-4b93-8bea-38ae3e46df67.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f16', 1);
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df66', 'e927578d-c3ea-4b93-8bea-38ae3e46df66.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f16', 2);
insert into product_images (image_id, path, product_id, order_index) VALUES ('e927578d-c3ea-4b93-8bea-38ae3e46df65', 'e927578d-c3ea-4b93-8bea-38ae3e46df65.webp', '517b15d4-10c3-425f-b4eb-51c5b7973f16', 3);

insert into products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('1a672a63-a5b7-4e73-a160-8a53b2d97801', 3600, 'Футболка пляжная мужская', 'Мужская пляжная футболка для активного отдыха', 0, '2023-11-05', false, '82c46ab3-0854-4caa-a421-24060f75b6ff', 'TopG', 'Хлопок', '130845/BR'),
    ('2a982f29-5f3e-4c69-b8d9-214a43d3451e', 3700, 'Футболка Whatever мужская', 'Комфортная футболка Whatever из мягкого хлопка', 0, '2023-11-08', false, '82c46ab3-0854-4caa-a421-24060f75b6ff', 'TopG', 'Хлопок', '130846/BL'),
    ('3b239cf8-dcfa-446e-8d39-e4b5089e75f8', 3800, 'Футболка карго мужская', 'Футболка карго с инновационным дизайном', 0, '2023-11-11', true, '82c46ab3-0854-4caa-a421-24060f75b6ff', 'TopG', 'Хлопок', '130847/EN'),
    ('4b52e5df-0541-41a3-bcfb-d5d287c6a655', 3900, 'Футболка Sunshine мужская', 'Футболка Sunshine из мягкого хлопка', 0, '2023-11-14', true, '82c46ab3-0854-4caa-a421-24060f75b6ff', 'TopG', 'Хлопок', '130848/DY');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('1ad12c3e-906b-4a90-8b21-0a431345eef1', '#FFFFFF', 'Белый', '1a672a63-a5b7-4e73-a160-8a53b2d97801'),
    ('1a672a63-a5b2-4e73-a160-8a53b2d97801', '#c5ad89', '8-кофейный', '1a672a63-a5b7-4e73-a160-8a53b2d97801'),
    ('2bdc48d3-f38a-4e98-810b-bd7ac5b17b3a', '#000000', 'Чёрный', '2a982f29-5f3e-4c69-b8d9-214a43d3451e'),
    ('2bdc48d3-f38a-4e98-810b-bd7ac5b17b4a', '#FFFFFF', 'Белый', '2a982f29-5f3e-4c69-b8d9-214a43d3451e'),
    ('3cf4f637-37f2-4a9e-bf6f-d5b496f8a601', '#313133', 'Тёмно-серый', '3b239cf8-dcfa-446e-8d39-e4b5089e75f8'),
    ('4d57c69b-97b3-4a9b-bfda-8eeb69e12b14', '#dfd6c9', 'Бежевый', '4b52e5df-0541-41a3-bcfb-d5d287c6a655'),
    ('5ef64c7b-120d-4a2f-99ad-6ad10b6b30a1', '#ff69b4', 'Розовый', '4b52e5df-0541-41a3-bcfb-d5d287c6a655');

insert into product_sizes (id, value, product_id)
VALUES
    ('1caf74ed-912c-5f08-adfb-551ac9b57576', 'L', '1a672a63-a5b7-4e73-a160-8a53b2d97801'),
    ('1caf74ed-912c-5f08-adfb-551ac9b57577', 'XL', '1a672a63-a5b7-4e73-a160-8a53b2d97801'),
    ('2caf75ed-922d-6f18-befb-552adab58686', 'M', '2a982f29-5f3e-4c69-b8d9-214a43d3451e'),
    ('2caf75ed-922d-6f18-befb-552adab58687', 'L', '2a982f29-5f3e-4c69-b8d9-214a43d3451e'),
    ('2caf75ed-922d-6f18-befb-552adab58688', 'XL', '2a982f29-5f3e-4c69-b8d9-214a43d3451e'),
    ('2caf75ed-922d-6f18-befb-552adab58621', 'M', '3b239cf8-dcfa-446e-8d39-e4b5089e75f8'),
    ('2caf75ed-922d-6f18-befb-552adab58681', 'L', '3b239cf8-dcfa-446e-8d39-e4b5089e75f8'),
    ('2caf75ed-922d-6f18-befb-552adab58631', 'XL', '3b239cf8-dcfa-446e-8d39-e4b5089e75f8'),
    ('9caf79ed-992d-9f98-cefb-559adcd59899', 'M', '4b52e5df-0541-41a3-bcfb-d5d287c6a655'),
    ('9caf79ed-992d-9f98-cefb-559adcd59898', 'L', '4b52e5df-0541-41a3-bcfb-d5d287c6a655'),
    ('9caf79ed-992d-9f98-cefb-559adcd59897', 'XL', '4b52e5df-0541-41a3-bcfb-d5d287c6a655');

insert into product_images (image_id, path, product_id, order_index)
VALUES
    ('e927578d-c3ea-4b93-8bea-38ae3e46df57', 'e927578d-c3ea-4b93-8bea-38ae3e46df57.webp', '1a672a63-a5b7-4e73-a160-8a53b2d97801', 1),
    ('e927578d-c3ea-4b93-8bea-38ae3e46df56', 'e927578d-c3ea-4b93-8bea-38ae3e46df56.webp', '1a672a63-a5b7-4e73-a160-8a53b2d97801', 2),
    ('e927578d-c3ea-4b93-8bea-38ae3e46df55', 'e927578d-c3ea-4b93-8bea-38ae3e46df55.webp', '1a672a63-a5b7-4e73-a160-8a53b2d97801', 3),
    ('e927578d-c3ea-4b93-8bea-38ae3e46df47', 'e927578d-c3ea-4b93-8bea-38ae3e46df47.webp', '2a982f29-5f3e-4c69-b8d9-214a43d3451e', 1),
    ('e927578d-c3ea-4b93-8bea-38ae3e46df46', 'e927578d-c3ea-4b93-8bea-38ae3e46df46.webp', '2a982f29-5f3e-4c69-b8d9-214a43d3451e', 2),
    ('e927578d-c3ea-4b93-8bea-38ae3e46df45', 'e927578d-c3ea-4b93-8bea-38ae3e46df45.webp', '2a982f29-5f3e-4c69-b8d9-214a43d3451e', 3),
    ('e927578d-c3ea-4b93-8bea-38ae3e46df37', 'e927578d-c3ea-4b93-8bea-38ae3e46df37.webp', '3b239cf8-dcfa-446e-8d39-e4b5089e75f8', 1),
    ('e927578d-c3ea-4b93-8bea-38ae3e46df36', 'e927578d-c3ea-4b93-8bea-38ae3e46df36.webp', '3b239cf8-dcfa-446e-8d39-e4b5089e75f8', 2),
    ('e927578d-c3ea-4b93-8bea-38ae3e46df35', 'e927578d-c3ea-4b93-8bea-38ae3e46df35.webp', '3b239cf8-dcfa-446e-8d39-e4b5089e75f8', 3),
    ('f637579d-c4eb-5b94-9deb-39cf3e57ef78', 'f637579d-c4eb-5b94-9deb-39cf3e57ef78.webp', '4b52e5df-0541-41a3-bcfb-d5d287c6a655', 1),
    ('f637579d-c4eb-5b94-9deb-39cf3e57ef77', 'f637579d-c4eb-5b94-9deb-39cf3e57ef77.webp', '4b52e5df-0541-41a3-bcfb-d5d287c6a655', 2),
    ('f637579d-c4eb-5b94-9deb-39cf3e57ef76', 'f637579d-c4eb-5b94-9deb-39cf3e57ef76.webp', '4b52e5df-0541-41a3-bcfb-d5d287c6a655', 3);

-- шорты
insert into products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('7a672a41-a5b7-4e73-a160-8a53b2d94801', 5600, 'Шорты джинсовые мужская', 'Мужские джинсовые шорты', 0, '2020-11-02', false, '36e7c91e-e844-437e-a04f-792f7950a3c7', 'TopG', 'Джинса', '130825/SR'),
    ('1a881f21-5f3e-4c69-b8d9-214a43d3251e', 7000, 'Шорты Goods мужские', 'Шорты мужские Goods из мягкого хлопка', 0, '2023-11-01', false, '36e7c91e-e844-437e-a04f-792f7950a3c7', 'TopG', 'Хлопок', '10846/BL'),
    ('1b229cf8-dcfa-446e-8d28-e4b3089e15f8', 3800, 'Шорты мужские Attire Lang', 'Шорты мужские для повседневной носки', 0, '2023-11-11', true, '36e7c91e-e844-437e-a04f-792f7950a3c7', 'TopG', 'Хлопок', '30847/EN'),
    ('2b51e5df-0541-41a3-bcfb-d3d287c2a655', 3900, 'Шорты джоггеры Lamar мужские', 'Шорты джоггеры Lamar из мягкого хлопка', 0, '2023-11-14', true, '36e7c91e-e844-437e-a04f-792f7950a3c7', 'TopG', 'Хлопок', '130848/DY');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('1ad12c3e-906b-4a90-7b21-0a431345eef1', '#2477b2', 'Синий', '7a672a41-a5b7-4e73-a160-8a53b2d94801'),
    ('1a641a61-a5b2-4e73-a160-8a53b2d97801', '#313133', 'Тёмно-серый', '1a881f21-5f3e-4c69-b8d9-214a43d3251e'),
    ('1bdc48d3-f38a-3e22-810b-bd7ac5b17b3a', '#000000', 'Чёрный', '1b229cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('2bdc32d3-f38a-4e98-810b-bd7ac5b17b4a', '#FFFFFF', 'Белый', '2b51e5df-0541-41a3-bcfb-d3d287c2a655'),
    ('3cf4f612-37f2-4a9e-bf6f-d5b496f8a601', '#000000', 'Чёрный', '2b51e5df-0541-41a3-bcfb-d3d287c2a655');

insert into product_sizes (id, value, product_id)
VALUES
    ('1caf74ed-912c-5f08-adfb-151ac9b47576', 'M', '7a672a41-a5b7-4e73-a160-8a53b2d94801'),
    ('1caf74ed-912c-5f08-adfb-251ac9b47576', 'L', '7a672a41-a5b7-4e73-a160-8a53b2d94801'),
    ('1caf74ed-912c-5f08-adfb-351ac9b47577', 'XL', '7a672a41-a5b7-4e73-a160-8a53b2d94801'),
    ('2caf75ed-122d-6f18-befb-522adab58686', 'M', '1a881f21-5f3e-4c69-b8d9-214a43d3251e'),
    ('2caf75ed-222d-6f18-befb-532adab58687', 'L', '1a881f21-5f3e-4c69-b8d9-214a43d3251e'),
    ('2caf75ed-322d-6f18-befb-542adab58688', 'XL', '1a881f21-5f3e-4c69-b8d9-214a43d3251e'),
    ('1caf25ed-921d-6f18-befb-552adab58621', 'M', '1b229cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('1caf35ed-922d-6f18-befb-552adab58681', 'L', '1b229cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('1caf45ed-923d-6f18-befb-552adab58631', 'XL', '1b229cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('9caf79ed-192d-9f98-cefb-559adcd59899', 'M', '2b51e5df-0541-41a3-bcfb-d3d287c2a655'),
    ('9caf79ed-292d-9f98-cefb-559adcd59898', 'L', '2b51e5df-0541-41a3-bcfb-d3d287c2a655'),
    ('9caf79ed-392d-9f98-cefb-559adcd59897', 'XL', '2b51e5df-0541-41a3-bcfb-d3d287c2a655');

insert into product_images (image_id, path, product_id, order_index)
VALUES
    ('e827578d-c3ea-4b93-8bea-38ae3e46df57', 'e827578d-c3ea-4b93-8bea-38ae3e46df57.webp', '7a672a41-a5b7-4e73-a160-8a53b2d94801', 1),
    ('e827578d-c3ea-4b93-8bea-38ae3e46df56', 'e827578d-c3ea-4b93-8bea-38ae3e46df56.webp', '7a672a41-a5b7-4e73-a160-8a53b2d94801', 2),
    ('e827578d-c3ea-4b93-8bea-38ae3e46df55', 'e827578d-c3ea-4b93-8bea-38ae3e46df55.webp', '7a672a41-a5b7-4e73-a160-8a53b2d94801', 3),
    ('e987578d-c3ea-4b93-8bea-38ae3e46df47', 'e987578d-c3ea-4b93-8bea-38ae3e46df47.webp', '1a881f21-5f3e-4c69-b8d9-214a43d3251e', 1),
    ('e987578d-c3ea-4b93-8bea-38ae3e46df46', 'e987578d-c3ea-4b93-8bea-38ae3e46df46.webp', '1a881f21-5f3e-4c69-b8d9-214a43d3251e', 2),
    ('e987578d-c3ea-4b93-8bea-38ae3e46df45', 'e987578d-c3ea-4b93-8bea-38ae3e46df45.webp', '1a881f21-5f3e-4c69-b8d9-214a43d3251e', 3),
    ('e927578d-c3ea-4b81-8bea-38ae3e46df37', 'e927578d-c3ea-4b81-8bea-38ae3e46df37.webp', '1b229cf8-dcfa-446e-8d28-e4b3089e15f8', 1),
    ('e927578d-c3ea-4b82-8bea-38ae3e46df36', 'e927578d-c3ea-4b82-8bea-38ae3e46df36.webp', '1b229cf8-dcfa-446e-8d28-e4b3089e15f8', 2),
    ('e927578d-c3ea-4b83-8bea-38ae3e46df35', 'e927578d-c3ea-4b83-8bea-38ae3e46df35.webp', '1b229cf8-dcfa-446e-8d28-e4b3089e15f8', 3),
    ('f237579d-c4eb-5b94-9deb-39cf3e57ef78', 'f237579d-c4eb-5b94-9deb-39cf3e57ef78.webp', '2b51e5df-0541-41a3-bcfb-d3d287c2a655', 1),
    ('f237579d-c4eb-5b94-9deb-39cf3e57ef77', 'f237579d-c4eb-5b94-9deb-39cf3e57ef77.webp', '2b51e5df-0541-41a3-bcfb-d3d287c2a655', 2),
    ('f237579d-c4eb-5b94-9deb-39cf3e57ef76', 'f237579d-c4eb-5b94-9deb-39cf3e57ef76.webp', '2b51e5df-0541-41a3-bcfb-d3d287c2a655', 3);

-- джинсы
insert into products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('6a622a41-a5b7-4e73-a160-8a53b2d94801', 10600, 'Джинсы Lazy Way мужские', 'Джинсы Lazy Way из упругой джинсы', 0, '2020-01-02', false, '93c503da-3a98-4d52-a413-08963d9a874c', 'TopG', 'Джинса', '3825/DR'),
    ('1a541f22-5f3e-4c69-b8d9-214a43d3251e', 20000, 'Джинсы Sky Style мужские', 'Джинсы Sky Style из мягкого хлопка', 0, '2023-11-01', false, '93c503da-3a98-4d52-a413-08963d9a874c', 'TopG', 'Хлопок', '10846/BL'),
    ('1b259cf8-dcfa-446e-8d28-e4b3089e15f8', 12800, 'Джинсы Grunge Moment мужские', 'Grunge Moment: Эти потертые джинсы идеально подойдут для создания неформального и дерзкого образа.', 0, '2024-08-08', true, '93c503da-3a98-4d52-a413-08963d9a874c', 'TopG', 'Хлопок', '30847/EN'),
    ('2b16e5df-0541-41a3-bcfb-d3d287c2a635', 7900, 'Джинсы Blue Dreams мужские', 'Джинсы Blue Dreams мужские мягкого хлопка', 0, '2023-11-14', true, '93c503da-3a98-4d52-a413-08963d9a874c', 'TopG', 'Хлопок', '130848/DY');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('1ad12c3e-216b-4a90-7b21-0a431345eef1', '#2477b2', 'Синий', '6a622a41-a5b7-4e73-a160-8a53b2d94801'),
    ('1a641a61-a5b2-4e43-a160-8a53b2d97801', '#2477b2', 'Синий', '1a541f22-5f3e-4c69-b8d9-214a43d3251e'),
    ('1a641a61-a5b2-4e33-a160-8a53b2d97801', '#b7d2db', 'Голубой', '1a541f22-5f3e-4c69-b8d9-214a43d3251e'),
    ('1a641a61-a5b2-4e43-a160-8a53b2d96803', '#2477b2', 'Синий', '1b259cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('1a641a61-a5b2-3e13-a160-8a53b2d96803', '#2477b2', 'Синий', '2b16e5df-0541-41a3-bcfb-d3d287c2a635');

insert into product_sizes (id, value, product_id)
VALUES
    ('1caf74ed-912c-3f18-adfb-151ac9b47576', '29', '6a622a41-a5b7-4e73-a160-8a53b2d94801'),
    ('1caf74ed-912c-3f18-adfb-251ac9b47576', '30', '6a622a41-a5b7-4e73-a160-8a53b2d94801'),
    ('1caf74ed-912c-3f18-adfb-351ac9b47577', '31', '6a622a41-a5b7-4e73-a160-8a53b2d94801'),
    ('1caf74ed-912c-3f18-adfb-351ac9b47578', '32', '6a622a41-a5b7-4e73-a160-8a53b2d94801'),
    ('4caf75ed-112d-6f18-befb-522adab58686', '29', '1a541f22-5f3e-4c69-b8d9-214a43d3251e'),
    ('4caf75ed-232d-6f18-befb-532adab58687', '30', '1a541f22-5f3e-4c69-b8d9-214a43d3251e'),
    ('4caf75ed-312d-6f18-befb-542adab58688', '31', '1a541f22-5f3e-4c69-b8d9-214a43d3251e'),
    ('4caf25ed-721d-6f18-befb-552adab58621', '32', '1a541f22-5f3e-4c69-b8d9-214a43d3251e'),
    ('4caf75ed-112d-6f18-befb-322adab58686', '29', '1b259cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('4caf75ed-232d-6f18-befb-332adab58687', '30', '1b259cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('4caf75ed-312d-6f18-befb-342adab58688', '31', '1b259cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('4caf25ed-721d-6f18-befb-352adab58621', '32', '1b259cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('3caf75ed-112d-6f18-befb-322adab58686', '29', '2b16e5df-0541-41a3-bcfb-d3d287c2a635'),
    ('3caf75ed-232d-6f18-befb-332adab58687', '30', '2b16e5df-0541-41a3-bcfb-d3d287c2a635'),
    ('3caf75ed-312d-6f18-befb-342adab58688', '31', '2b16e5df-0541-41a3-bcfb-d3d287c2a635'),
    ('3caf25ed-721d-6f18-befb-352adab58621', '32', '2b16e5df-0541-41a3-bcfb-d3d287c2a635');

insert into product_images (image_id, path, product_id, order_index)
VALUES
    ('41f77a51-c612-477a-b5b8-b492bdda13d5', '41f77a51-c612-477a-b5b8-b492bdda13d5.webp', '6a622a41-a5b7-4e73-a160-8a53b2d94801', 1),
    ('41f77a51-c612-477a-b5b8-b492bdda13d4', '41f77a51-c612-477a-b5b8-b492bdda13d4.webp', '6a622a41-a5b7-4e73-a160-8a53b2d94801', 2),
    ('41f77a51-c612-477a-b5b8-b492bdda13d3', '41f77a51-c612-477a-b5b8-b492bdda13d3.webp', '6a622a41-a5b7-4e73-a160-8a53b2d94801', 3),
    ('41f77a51-c612-477a-b5b8-b492bdda13d2', '41f77a51-c612-477a-b5b8-b492bdda13d2.webp', '6a622a41-a5b7-4e73-a160-8a53b2d94801', 4),
    ('881464b4-73c3-4010-907d-082d27ab5fcd', '881464b4-73c3-4010-907d-082d27ab5fcd.webp', '1a541f22-5f3e-4c69-b8d9-214a43d3251e', 1),
    ('881464b4-63c3-4010-907d-082d27ab5fcd', '881464b4-63c3-4010-907d-082d27ab5fcd.webp', '1a541f22-5f3e-4c69-b8d9-214a43d3251e', 2),
    ('881464b4-53c3-4010-907d-082d27ab5fcd', '881464b4-53c3-4010-907d-082d27ab5fcd.webp', '1a541f22-5f3e-4c69-b8d9-214a43d3251e', 3),
    ('e927578d-c3ea-4b81-8bea-28ae3e46df37', 'e927578d-c3ea-4b81-8bea-28ae3e46df37.webp', '1b259cf8-dcfa-446e-8d28-e4b3089e15f8', 1),
    ('e927578d-c3ea-4b82-8bea-28ae3e46df36', 'e927578d-c3ea-4b82-8bea-28ae3e46df36.webp', '1b259cf8-dcfa-446e-8d28-e4b3089e15f8', 2),
    ('e927578d-c3ea-4b83-8bea-28ae3e46df35', 'e927578d-c3ea-4b83-8bea-28ae3e46df35.webp', '1b259cf8-dcfa-446e-8d28-e4b3089e15f8', 3),
    ('f237579d-c4eb-5b94-9deb-29cf3e57ef78', 'f237579d-c4eb-5b94-9deb-29cf3e57ef78.webp', '2b16e5df-0541-41a3-bcfb-d3d287c2a635', 1),
    ('f237579d-c4eb-5b94-9deb-29cf3e57ef77', 'f237579d-c4eb-5b94-9deb-29cf3e57ef77.webp', '2b16e5df-0541-41a3-bcfb-d3d287c2a635', 2),
    ('f237579d-c4eb-5b94-9deb-29cf3e57ef76', 'f237579d-c4eb-5b94-9deb-29cf3e57ef76.webp', '2b16e5df-0541-41a3-bcfb-d3d287c2a635', 3);

-- рубашки
insert into products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc', 10100, 'Рубашка с короткими рукавами с принтом мужская', 'Рубашка с короткими рукавами с принтом мужская для пляжа', 0, '2023-12-01', true, '93c503da-3a98-4d52-a413-09962d9a875c', 'TopG', 'Хлопок', '140861/WH'),
    ('a806f63f-205a-49f0-b6f0-c00b8b53da32', 7200, 'Рубашка с короткими рукавами мужская', 'Повседневная рубашка с короткими рукавами для комфорта и стиля', 0, '2023-12-03', true, '93c503da-3a98-4d52-a413-09962d9a875c', 'TopG', 'Хлопок', '140862/BL'),
    ('66904811-b707-4031-918c-4978805fb8ae', 6300, 'Рубашка Классическая мужская', 'Классическая мужская рубашка для стильного образа', 0, '2023-12-05', true, '93c503da-3a98-4d52-a413-09962d9a875c', 'TopG', 'Хлопок', '140863/GR'),
    ('ff609921-0b41-4b4f-af62-d107366aed75', 12400, 'Рубашка Oversize мужская', 'Легкая мужская oversize рубашка из хлопка', 0, '2023-12-07', true, '93c503da-3a98-4d52-a413-09962d9a875c', 'TopG', 'Хлопок', '140864/BE');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('2d252384-3e1a-42f5-96bf-17581883c572', '#ffffff', 'Белый', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('d63d6cd5-3285-4fe2-8145-4147f52ff34e', '#000000', 'Чёрный', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('187bd885-e696-4c92-8b6f-90ecd761f185', '#40E0D0', 'Бирюзовый', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('f872e98c-bbb0-4cd2-853d-726782c16406', '#2c5bbf', 'Синий', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('5660fa7f-0591-466d-af16-ba17f64f2e1c', '#F5F5DC', 'Бежевый', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('319099ed-13eb-4f00-9bbe-810c7d698e80', '#64ba18', 'Зелёный', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('a074a7b5-a7ee-4354-8bcc-d2e04d6ff951', '#ffffff', 'Белый', '66904811-b707-4031-918c-4978805fb8ae'),
    ('ca552ad7-943c-42be-94f0-5ff390db5053', '#000000', 'Чёрный', 'ff609921-0b41-4b4f-af62-d107366aed75'),
    ('e6e4dd9d-e89a-4317-8414-a1a5872244ef', '#40E0D0', 'Бирюзовый', 'ff609921-0b41-4b4f-af62-d107366aed75');


insert into product_sizes (id, value, product_id)
VALUES
    ('a0e53aa1-db41-4f1a-b76d-482c1424aabd', 'M', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('a0e53aa1-db42-4f1a-b76d-482c1424aabd', 'L', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('a0e53aa1-db43-4f1a-b76d-482c1424aabd', 'XL', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('a0e53aa1-db44-4f1a-b76d-482c1424aabd', 'M', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('a0e53aa1-db45-4f1a-b76d-482c1424aabd', 'L', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('a0e53aa1-db46-4f1a-b76d-482c1424aabd', 'XL', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('a0e53aa1-db47-4f1a-b76d-482c1424aabd', 'M', '66904811-b707-4031-918c-4978805fb8ae'),
    ('a0e53aa1-db48-4f1a-b76d-482c1424aabd', 'L', '66904811-b707-4031-918c-4978805fb8ae'),
    ('a0e53aa1-db49-4f1a-b76d-482c1424aabd', 'XL', '66904811-b707-4031-918c-4978805fb8ae'),
    ('a0e53aa1-db40-4f1a-b76d-482c1424aabd', 'M', 'ff609921-0b41-4b4f-af62-d107366aed75'),
    ('a0e53aa1-db51-4f1a-b76d-482c1424aabd', 'L', 'ff609921-0b41-4b4f-af62-d107366aed75'),
    ('a0e53aa1-db61-4f1a-b76d-482c1424aabd', 'XL', 'ff609921-0b41-4b4f-af62-d107366aed75');

insert into product_images (image_id, path, product_id, order_index)
VALUES
    ('9593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '9593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc', 1),
    ('8593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '8593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc', 2),
    ('7593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '7593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc', 3),
    ('6593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '6593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', 'a806f63f-205a-49f0-b6f0-c00b8b53da32', 1),
    ('5593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '5593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', 'a806f63f-205a-49f0-b6f0-c00b8b53da32', 2),
    ('4593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '4593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', 'a806f63f-205a-49f0-b6f0-c00b8b53da32', 3),
    ('3593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '3593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', '66904811-b707-4031-918c-4978805fb8ae', 1),
    ('2593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '2593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', '66904811-b707-4031-918c-4978805fb8ae', 2),
    ('1593a52b-6dbc-435c-8b86-b9f5fc41a6e3', '1593a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', '66904811-b707-4031-918c-4978805fb8ae', 3),
    ('9393a52b-6dbc-435c-8b86-b9f5fc41a6e3', '9393a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', 'ff609921-0b41-4b4f-af62-d107366aed75', 1),
    ('9293a52b-6dbc-435c-8b86-b9f5fc41a6e3', '9293a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', 'ff609921-0b41-4b4f-af62-d107366aed75', 2),
    ('9193a52b-6dbc-435c-8b86-b9f5fc41a6e3', '9193a52b-6dbc-435c-8b86-b9f5fc41a6e3.webp', 'ff609921-0b41-4b4f-af62-d107366aed75', 3);

-- Толстовки и худи
insert into products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('7f2d8d1c-9b4b-4b83-9f91-cb4d12345678', 15000, 'Толстовка мужская', 'Удобная мужская толстовка из хлопка', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'CasualStyle', 'Хлопок', '150001/BL'),
    ('1d2e5f8b-4c3a-47ab-937d-cf1234567890', 17000, 'Худи мужское утепленное', 'Теплое мужское худи для холодной погоды', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'WarmWear', 'Флис', '150002/GR'),
    ('8a9d6b7f-3b7d-40a1-a289-bc4d12345678', 14000, 'Худи мужское с длинным рукавом', 'Мужское худи с длинным рукавом и капюшоном', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'UrbanLife', 'Хлопок', '150003/RD'),
    ('6b3c7d9f-5d9c-4123-89ad-ec3b4d123456', 16000, 'Худи мужское карго', 'Практичное мужское худи с карманами карго', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'CargoFit', 'Хлопок', '150004/OL'),
    ('9c7d8e2f-1e2a-4a4b-b93a-db4c12345678', 15500, 'Толстовка Welcome мужская', 'Мужская толстовка с принтом "Welcome"', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'ModernText', 'Хлопок', '150005/WH'),
    ('3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456', 14500, 'Толстовка Hello World мужская', 'Мужская толстовка с надписью "Hello World"', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'CodeWear', 'Хлопок', '150006/BL'),
    ('7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456', 14000, 'Толстовка мужская с надписями', 'Мужская толстовка с разнообразными надписями', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'TextStyle', 'Хлопок', '150007/GY');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('4c2d5f6e-1234-4f8d-b93c-ec2d4d123456', '#2c5bbf', 'Синий', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678'),
    ('5d3e6f7f-2345-4f9e-c84d-db3c4d123456', '#F5F5DC', 'Бежевый', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678'),
    ('6e8f12a1-d66b-47d5-b1ca-f600ab8646cf', '#64ba18', 'Зеленый', '1d2e5f8b-4c3a-47ab-937d-cf1234567890'),
    ('e39bb549-f2b7-425d-bfcf-fa2844e60fb4', '#40E0D0', 'Бирюзовый', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678'),
    ('7f2d8d1c-9b4b-4b83-9f91-cb4d12345678', '#ffffff', 'Белый', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456'),
    ('e05588af-7094-4548-a0c0-3397d9c4dd23', '#000000', 'Черный', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678'),
    ('8fd6c51c-de33-428c-b00c-4ba0a3be0a61', '#2c5bbf', 'Синий', '3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456'),
    ('0868eab8-0fa8-4ae4-8069-082558edf2b4', '#64ba18', 'Зеленый', '7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456');

insert into product_sizes (id, value, product_id)
VALUES
    ('359d7d75-b89a-4cff-accf-be4dba272adc', 'M', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678'),
    ('53173c23-9854-4d90-874a-f01d324655c1', 'L', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678'),
    ('37e5773a-fb14-45e4-955f-e16c2dc745a4', 'XL', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678'),
    ('30a7a1d9-473c-475d-9dd3-a0212299a8fe', 'M', '1d2e5f8b-4c3a-47ab-937d-cf1234567890'),
    ('1bb11d6c-c341-472f-a587-440196010d62', 'L', '1d2e5f8b-4c3a-47ab-937d-cf1234567890'),
    ('2b9d0719-3b2c-4cbf-b412-cc118facf2c6', 'XL', '1d2e5f8b-4c3a-47ab-937d-cf1234567890'),
    ('67c0ad1f-b106-436d-a1b7-e1405cecd14a', 'M', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678'),
    ('60e09b8a-e976-4b0c-b774-bb6be2ee0293', 'L', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678'),
    ('5a7b972d-726f-4e19-a46e-c14ae3f554f1', 'XL', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678'),
    ('cdc9c291-157b-4a92-9756-83c1a33bda88', 'M', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456'),
    ('2d5afd96-a87b-496b-93a2-2e8b438e91af', 'L', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456'),
    ('ff4254e6-ca81-41e5-a47d-25560b37c62e', 'XL', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456'),
    ('0370e088-9800-4f0f-9de5-84674bfb6be9', 'M', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678'),
    ('385e4a66-6412-455f-b72c-3ac01f1a476c', 'L', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678'),
    ('922561d4-2c18-427f-8ed9-8ca52a01583f', 'XL', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678'),
    ('6aaf40cc-27a8-4dde-b36f-b2d59be35a23', 'M', '3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456'),
    ('7e98949e-f017-42c7-aca9-792764035bde', 'L', '3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456'),
    ('7d6c24ce-39e7-4fbd-aed8-67270a8b1d73', 'XL', '3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456'),
    ('610b6a99-0c22-4a9b-ab47-0cdc0d88a49a', 'M', '7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456'),
    ('db3c624b-0dd3-46d6-be35-cc694053933c', 'L', '7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456'),
    ('eb2035c0-0ccd-433c-96db-1ad83ed88558', 'XL', '7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456');

insert into product_images (image_id, path, product_id, order_index)
VALUES
    ('146d48b7-7169-45a2-a726-1890ed35d0e7', '146d48b7-7169-45a2-a726-1890ed35d0e7.webp', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678', 1),
    ('cf117a8c-3b57-48d5-920e-4126549b03e1', 'cf117a8c-3b57-48d5-920e-4126549b03e1.webp', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678', 2),
    ('0871c89f-db51-437e-8ca0-c014d80bcacc', '0871c89f-db51-437e-8ca0-c014d80bcacc.webp', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678', 3),
    ('5d67330e-4274-4d1a-8b04-7da13537179f', '5d67330e-4274-4d1a-8b04-7da13537179f.webp', '1d2e5f8b-4c3a-47ab-937d-cf1234567890', 1),
    ('f977babc-49be-400b-89d7-f060e4df803e', 'f977babc-49be-400b-89d7-f060e4df803e.webp', '1d2e5f8b-4c3a-47ab-937d-cf1234567890', 2),
    ('22ef5d36-82ee-4d67-9293-dba892cccdcd', '22ef5d36-82ee-4d67-9293-dba892cccdcd.webp', '1d2e5f8b-4c3a-47ab-937d-cf1234567890', 3),
    ('88bd11f2-4714-4f30-ac4d-9d6da01b76dc', '88bd11f2-4714-4f30-ac4d-9d6da01b76dc.webp', '1d2e5f8b-4c3a-47ab-937d-cf1234567890', 4),
    ('b0aef6db-4e36-4346-b89c-149df3d85f3b', 'b0aef6db-4e36-4346-b89c-149df3d85f3b.webp', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678', 1),
    ('4abc1a49-4291-458e-a195-53cbe03d72b8', '4abc1a49-4291-458e-a195-53cbe03d72b8.webp', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678', 2),
    ('2fb294a5-543d-4acd-b6b4-865c3502c501', '2fb294a5-543d-4acd-b6b4-865c3502c501.webp', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678', 3),
    ('1a82f7ec-fd93-4c9b-a3b5-bbb03c215bb7', '1a82f7ec-fd93-4c9b-a3b5-bbb03c215bb7.webp', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678', 4),
    ('adf27848-4fb1-46be-b3a9-69c385a571bb', 'adf27848-4fb1-46be-b3a9-69c385a571bb.webp', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456', 1),
    ('c5474faf-01a7-43fe-90b4-e58baa7bc79a', 'c5474faf-01a7-43fe-90b4-e58baa7bc79a.webp', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456', 2),
    ('31eb6b54-020a-4fce-ac41-87ba25af34b7', '31eb6b54-020a-4fce-ac41-87ba25af34b7.webp', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456', 3),
    ('9e2c2785-6281-4a32-ad1e-bdb9028e2b5d', '9e2c2785-6281-4a32-ad1e-bdb9028e2b5d.webp', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456', 4),
    ('0885c83f-0fcd-417f-a788-3aa28ec5b581', '0885c83f-0fcd-417f-a788-3aa28ec5b581.webp', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678', 1),
    ('4ab854ae-3486-48ad-9edd-36d993212fd5', '4ab854ae-3486-48ad-9edd-36d993212fd5.webp', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678', 2),
    ('d37a3e0b-e92c-4018-addd-df9444fd0e4e', 'd37a3e0b-e92c-4018-addd-df9444fd0e4e.webp', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678', 3),
    ('63c7fbfc-3904-4cee-b851-d77ce9e36248', '63c7fbfc-3904-4cee-b851-d77ce9e36248.webp', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678', 4),
    ('f2e32b05-45e1-41df-a816-6338b20e61ec', 'f2e32b05-45e1-41df-a816-6338b20e61ec.webp', '3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456', 1),
    ('b81cbed0-ae5d-4d55-8324-b94056dc2cfe', 'b81cbed0-ae5d-4d55-8324-b94056dc2cfe.webp', '3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456', 2),
    ('a90e188b-f85d-4557-bd57-cf3b9a82024d', 'a90e188b-f85d-4557-bd57-cf3b9a82024d.webp', '3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456', 3),
    ('d155a618-7818-4ba7-828f-efa06196b3d3', 'd155a618-7818-4ba7-828f-efa06196b3d3.webp', '7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456', 1),
    ('2ee0c726-8a4e-4d90-8c45-ebb0bd09328d', '2ee0c726-8a4e-4d90-8c45-ebb0bd09328d.webp', '7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456', 2),
    ('5ba5e3fd-0e9a-43ca-8cef-048c02b6f9a1', '5ba5e3fd-0e9a-43ca-8cef-048c02b6f9a1.webp', '7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456', 3),
    ('fa5754e7-a2f9-4c01-a5c1-3678b0cdff5d', 'fa5754e7-a2f9-4c01-a5c1-3678b0cdff5d.webp', '7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456', 4);

-- Female
-- Футболки и топы
INSERT INTO products (product_id, price, title, description, stars, creation_date, is_new, category_id, brand, composition, sku) VALUES
                                                                                                                                     ('06666fc2-eb23-498a-9d73-90c4257f8719', 2990, 'Футболка с принтом', 'Футболка с принтом для стильного образа', 0, '2024-08-01', true, '82c46ab3-0854-4caa-a421-14060f75b6ff', 'BrandName', 'Хлопок', 'SKU001'),
                                                                                                                                     ('6c72bc48-69d6-41d1-b3a9-5c109fae2f40', 4990, 'Топ с кружевной отделкой Нежность', 'Топ с кружевной отделкой Нежность для стильного образа', 0, '2024-08-01', true, '82c46ab3-0854-4caa-a421-14060f75b6ff', 'BrandName', 'Хлопок', 'SKU002'),
                                                                                                                                     ('2f58bd6d-6f68-48f2-b7a5-a90b51dec60e', 1990, 'Майка на бретелях', 'Майка на бретелях для стильного образа', 0, '2024-08-01', true, '82c46ab3-0854-4caa-a421-14060f75b6ff', 'BrandName', 'Хлопок', 'SKU003'),
                                                                                                                                     ('11c0d193-b5a8-43b6-9219-2e8e7438ff28', 3990, 'Футболка с V-образным вырезом Элегантность', 'Футболка с V-образным вырезом Элегантность для стильного образа', 0, '2024-08-01', true, '82c46ab3-0854-4caa-a421-14060f75b6ff', 'BrandName', 'Хлопок', 'SKU004'),
                                                                                                                                     ('2633b56c-e990-4011-b23a-5edf1a9f6fbe', 3490, 'Кроп-топ с узором', 'Кроп-топ с узором для стильного образа', 0, '2024-08-01', true, '82c46ab3-0854-4caa-a421-14060f75b6ff', 'BrandName', 'Хлопок', 'SKU005'),
                                                                                                                                     ('0e9507f2-527f-4d57-a997-8b9514549e74', 4490, 'Топ с рукавами-фонариками Романтика', 'Топ с рукавами-фонариками Романтика для стильного образа', 0, '2024-08-01', true, '82c46ab3-0854-4caa-a421-14060f75b6ff', 'BrandName', 'Хлопок', 'SKU006'),
                                                                                                                                     ('98200c89-727f-44af-88c3-d919cb7ec258', 2990, 'Майка с асимметричным кроем', 'Майка с асимметричным кроем для стильного образа', 0, '2024-08-01', true, '82c46ab3-0854-4caa-a421-14060f75b6ff', 'BrandName', 'Хлопок', 'SKU007');

INSERT INTO product_colors (id, hex, name, product_id) VALUES
                                                           ('0033de60-58c5-44c8-abd9-61e178ebae12', '#ffffff', 'Белый', '06666fc2-eb23-498a-9d73-90c4257f8719'),
                                                           ('74d981e7-080e-4730-bbe8-6cf3b4874e74', '#000000', 'Черный', '06666fc2-eb23-498a-9d73-90c4257f8719'),
                                                           ('0ba42362-c50c-4659-8040-5b62139b464e', '#2c5bbf', 'Синий', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40'),
                                                           ('d7c68f99-13c1-4ed4-bf29-92c1d062ab43', '#40E0D0', 'Бирюзовый', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40'),
                                                           ('c37f948f-cbcb-4865-9882-1b3e1274cc84', '#F5F5DC', 'Бежевый', '2f58bd6d-6f68-48f2-b7a5-a90b51dec60e'),
                                                           ('b04f8b8e-0adf-4b56-bf35-cd4fcd2af9cc', '#64ba18', 'Зеленый', '11c0d193-b5a8-43b6-9219-2e8e7438ff28'),
                                                           ('8dfbfc8a-1f11-45fa-8982-0dfb71c1585e', '#ffffff', 'Белый', '11c0d193-b5a8-43b6-9219-2e8e7438ff28'),
                                                           ('f65dd9fc-cf1c-4de4-8f6f-3f8fe729a7f2', '#000000', 'Черный', '2633b56c-e990-4011-b23a-5edf1a9f6fbe'),
                                                           ('59dd06b7-1740-464e-8447-b9b302bb48e1', '#2c5bbf', 'Синий', '2633b56c-e990-4011-b23a-5edf1a9f6fbe'),
                                                           ('703eb44b-6b41-4c24-9a02-5cc3d3fbdeed', '#40E0D0', 'Бирюзовый', '0e9507f2-527f-4d57-a997-8b9514549e74'),
                                                           ('e5a0a973-f9d8-4972-a27c-0f99eeb90bc6', '#F5F5DC', 'Бежевый', '0e9507f2-527f-4d57-a997-8b9514549e74'),
                                                           ('490147b3-7d2b-4201-8be3-8658a399a3a2', '#64ba18', 'Зеленый', '98200c89-727f-44af-88c3-d919cb7ec258'),
                                                           ('8e61f243-89aa-4f4d-8752-1d6ff54f59b8', '#ffffff', 'Белый', '98200c89-727f-44af-88c3-d919cb7ec258');

INSERT INTO product_sizes (id, value, product_id) VALUES
                                                      ('6e7f0017-57bf-4da1-8449-4bc7b284c0f0', 'M', '06666fc2-eb23-498a-9d73-90c4257f8719'),
                                                      ('e1b75adb-81ef-4e2e-8d39-406bb5a8a237', 'L', '06666fc2-eb23-498a-9d73-90c4257f8719'),
                                                      ('b93ad3bb-8481-45cf-b9af-95afec3e6505', 'XL', '06666fc2-eb23-498a-9d73-90c4257f8719'),
                                                      ('798f5488-b60c-4aaa-bfb2-00a3152f326d', 'M', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40'),
                                                      ('777bc09d-22ba-4053-9717-e99fd0e79228', 'L', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40'),
                                                      ('42b13911-0e91-459e-a12f-20c949eb2678', 'XL', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40'),
                                                      ('7fde0030-10bf-4dbc-afc8-710a40223d77', 'M', '2f58bd6d-6f68-48f2-b7a5-a90b51dec60e'),
                                                      ('bbcffb6e-71a4-4fcd-82ce-a14fd9963f50', 'L', '2f58bd6d-6f68-48f2-b7a5-a90b51dec60e'),
                                                      ('4bf4e380-6fae-4c26-9bf9-f5b04626d19d', 'XL', '2f58bd6d-6f68-48f2-b7a5-a90b51dec60e'),
                                                      ('14611780-ec2f-4a46-a64a-da059b154282', 'M', '11c0d193-b5a8-43b6-9219-2e8e7438ff28'),
                                                      ('f466bc13-f8f3-46a8-bd36-a263df95a735', 'L', '11c0d193-b5a8-43b6-9219-2e8e7438ff28'),
                                                      ('d085c1fb-3428-43db-aa2a-eb07059292dd', 'XL', '11c0d193-b5a8-43b6-9219-2e8e7438ff28'),
                                                      ('7a7839f3-10e0-490a-a23e-d11055c6fa39', 'M', '2633b56c-e990-4011-b23a-5edf1a9f6fbe'),
                                                      ('6ebcaa6d-4958-4f0f-82f2-63735b36bd1c', 'L', '2633b56c-e990-4011-b23a-5edf1a9f6fbe'),
                                                      ('c7c43fde-b7c1-447f-84a2-3e8fb6a35419', 'XL', '2633b56c-e990-4011-b23a-5edf1a9f6fbe'),
                                                      ('68628be1-6918-4cff-aa15-75fbe93e4ebc', 'M', '0e9507f2-527f-4d57-a997-8b9514549e74'),
                                                      ('c5fafe85-a25e-48a5-990f-01ceab664a3e', 'L', '0e9507f2-527f-4d57-a997-8b9514549e74'),
                                                      ('4b49cab6-5847-4983-93e7-b8636aac2800', 'XL', '0e9507f2-527f-4d57-a997-8b9514549e74'),
                                                      ('b3d86f0e-b1b2-4a7d-9ce2-e0b2c9b06347', 'M', '98200c89-727f-44af-88c3-d919cb7ec258'),
                                                      ('f9f7af90-657f-4562-8454-4556d598ece6', 'L', '98200c89-727f-44af-88c3-d919cb7ec258'),
                                                      ('f41feadb-abc9-4d1e-82b9-c99908448cdf', 'XL', '98200c89-727f-44af-88c3-d919cb7ec258');

INSERT INTO product_images (image_id, path, product_id, order_index) VALUES
                                                                         ('8442522e-c730-4b4b-b116-5e6c1b034b2e', '8442522e-c730-4b4b-b116-5e6c1b034b2e.webp', '06666fc2-eb23-498a-9d73-90c4257f8719', 1),
                                                                         ('db604f66-0b81-40f4-85b4-402e685aecd2', 'db604f66-0b81-40f4-85b4-402e685aecd2.webp', '06666fc2-eb23-498a-9d73-90c4257f8719', 2),
                                                                         ('548c7349-4ba8-47e5-a2ce-94f7bd7e58d7', '548c7349-4ba8-47e5-a2ce-94f7bd7e58d7.webp', '06666fc2-eb23-498a-9d73-90c4257f8719', 3),
                                                                         ('a0827ce1-97b7-4567-8248-5a40fb3dc1b8', 'a0827ce1-97b7-4567-8248-5a40fb3dc1b8.webp', '06666fc2-eb23-498a-9d73-90c4257f8719', 4),
                                                                         ('f877c51d-3c73-48a1-b518-4d7c65b62be9', 'f877c51d-3c73-48a1-b518-4d7c65b62be9.webp', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40', 1),
                                                                         ('17cf10ae-4a96-441a-816d-672e901d2b1a', '17cf10ae-4a96-441a-816d-672e901d2b1a.webp', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40', 2),
                                                                         ('8b5ec1cd-2e5a-43db-94ef-ef4ce019f081', '8b5ec1cd-2e5a-43db-94ef-ef4ce019f081.webp', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40', 3),
                                                                         ('e47e1f07-e050-4c08-a5cf-e362aca06ae8', 'e47e1f07-e050-4c08-a5cf-e362aca06ae8.webp', '6c72bc48-69d6-41d1-b3a9-5c109fae2f40', 4),
                                                                         ('574cecdb-faa2-4a40-a74f-90fe3a019ab8', '574cecdb-faa2-4a40-a74f-90fe3a019ab8.webp', '2f58bd6d-6f68-48f2-b7a5-a90b51dec60e', 1),
                                                                         ('865497d9-a477-4c50-a208-133598c03da3', '865497d9-a477-4c50-a208-133598c03da3.webp', '2f58bd6d-6f68-48f2-b7a5-a90b51dec60e', 2),
                                                                         ('4501496f-39a4-40c4-9a92-8fd480c0025a', '4501496f-39a4-40c4-9a92-8fd480c0025a.webp', '2f58bd6d-6f68-48f2-b7a5-a90b51dec60e', 3),
                                                                         ('c3900e60-ed3e-4a8f-acc6-4afaf4d6f164', 'c3900e60-ed3e-4a8f-acc6-4afaf4d6f164.webp', '2f58bd6d-6f68-48f2-b7a5-a90b51dec60e', 4),
                                                                         ('7f5c747d-c561-46dd-b342-aceea0e6ced1', '7f5c747d-c561-46dd-b342-aceea0e6ced1.webp', '11c0d193-b5a8-43b6-9219-2e8e7438ff28', 1),
                                                                         ('49d0e0dd-ec25-4db1-a02d-72746d35ab09', '49d0e0dd-ec25-4db1-a02d-72746d35ab09.webp', '11c0d193-b5a8-43b6-9219-2e8e7438ff28', 2),
                                                                         ('703baf9b-c105-44be-90ac-a813ed60836a', '703baf9b-c105-44be-90ac-a813ed60836a.webp', '11c0d193-b5a8-43b6-9219-2e8e7438ff28', 3),
                                                                         ('abc8b36e-df26-49c1-9d53-59393d244f82', 'abc8b36e-df26-49c1-9d53-59393d244f82.webp', '2633b56c-e990-4011-b23a-5edf1a9f6fbe', 1),
                                                                         ('2851c889-59b6-4b0d-8e55-8d00530bce35', '2851c889-59b6-4b0d-8e55-8d00530bce35.webp', '2633b56c-e990-4011-b23a-5edf1a9f6fbe', 2),
                                                                         ('b700402a-fa5c-4b7b-a052-58b9929e6f5c', 'b700402a-fa5c-4b7b-a052-58b9929e6f5c.webp', '2633b56c-e990-4011-b23a-5edf1a9f6fbe', 3),
                                                                         ('fb81b2ff-43d4-4da7-9bbf-978d0b8db6c2', 'fb81b2ff-43d4-4da7-9bbf-978d0b8db6c2.webp', '2633b56c-e990-4011-b23a-5edf1a9f6fbe', 4),
                                                                         ('623f6d2f-9ab6-488d-9c66-16f4e08a2613', '623f6d2f-9ab6-488d-9c66-16f4e08a2613.webp', '0e9507f2-527f-4d57-a997-8b9514549e74', 1),
                                                                         ('67e37269-8efe-47fe-b87f-95bc8712b075', '67e37269-8efe-47fe-b87f-95bc8712b075.webp', '0e9507f2-527f-4d57-a997-8b9514549e74', 2),
                                                                         ('3c0ca503-e4de-4c4d-ad6e-c69dd20cad31', '3c0ca503-e4de-4c4d-ad6e-c69dd20cad31.webp', '0e9507f2-527f-4d57-a997-8b9514549e74', 3),
                                                                         ('f291a544-da15-4c3f-a32d-7fe06579e295', 'f291a544-da15-4c3f-a32d-7fe06579e295.webp', '0e9507f2-527f-4d57-a997-8b9514549e74', 4),
                                                                         ('9499012e-d42e-4df3-9144-decdcc70986b', '9499012e-d42e-4df3-9144-decdcc70986b.webp', '98200c89-727f-44af-88c3-d919cb7ec258', 1),
                                                                         ('b6ba2a44-1993-4321-8578-b77e00e9d8a6', 'b6ba2a44-1993-4321-8578-b77e00e9d8a6.webp', '98200c89-727f-44af-88c3-d919cb7ec258', 2),
                                                                         ('bef67554-b95e-4d4c-9d46-4bdfdb719e58', 'bef67554-b95e-4d4c-9d46-4bdfdb719e58.webp', '98200c89-727f-44af-88c3-d919cb7ec258', 3);


-- Шорты
INSERT INTO products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('ae3c2b1a-394b-41f1-9df5-89e334f8b7cd', 2990, 'Хлопковые шорты', 'Удобные хлопковые шорты для летних прогулок', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandA', 'Хлопок', 'HS123'),
    ('efc52b3a-7cda-4266-a65d-60a1f72e8749', 3990, 'Льняные шорты', 'Лёгкие и дышащие льняные шорты', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandB', 'Лён', 'LS456'),
    ('d81a620e-c441-4f3d-b08b-29f50a9c1c76', 4990, 'Джинсовые шорты', 'Стильные джинсовые шорты для любого случая', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandC', 'Джинс', 'JS789'),
    ('a5e9c10b-78b9-4533-a1a7-568fcd42d11b', 2790, 'Шорты-шорты', 'Удобные и стильные шорты-шорты', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandD', 'Хлопок', 'SS321'),
    ('b5c91d37-71cb-4c31-81ab-124fc72a1468', 3190, 'Шорты', 'Повседневные шорты для отдыха и прогулок', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandE', 'Хлопок', 'CS654'),
    ('e5a2f539-b392-4c9e-b57f-b8b8f29b129e', 3490, 'Юбка-шорты', 'Модные юбка-шорты с уникальным дизайном', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandF', 'Хлопок', 'SK987'),
    ('f4c6713e-573f-4c9e-877e-6a0f5c9e3e53', 2890, 'Шорты из вискозы', 'Лёгкие шорты из вискозы для летнего отдыха', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandG', 'Вискоза', 'VS543');


INSERT INTO product_colors (id, hex, name, product_id)
VALUES
    ('08e9c170-123b-458b-857f-8429c2e2d2f7', '#ffffff', 'Белый', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('28e9c170-14c2-46f1-857f-8429c2e2d2f7', '#000000', 'Черный', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('48e9c170-16e3-4b12-857f-8429c2e2d2f7', '#2c5bbf', 'Синий', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('58f2a1c1-8d7f-4a3d-9d56-c3b14d5f24f1', '#40E0D0', 'Бирюзовый', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('68f2a1c1-7c4a-4c35-9d56-c3b14d5f24f1', '#F5F5DC', 'Бежевый', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('78f2a1c1-8d1a-403d-9d56-c3b14d5f24f1', '#64ba18', 'Зеленый', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('88f2a1c1-8d2c-481d-9d56-c3b14d5f24f1', '#ffffff', 'Белый', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76'),
    ('98f2a1c1-9e2f-4e7b-9d56-c3b14d5f24f1', '#000000', 'Черный', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76'),
    ('a8f2a1c1-7b23-4c6e-9d56-c3b14d5f24f1', '#2c5bbf', 'Синий', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b'),
    ('b8f2a1c1-7c3f-43b8-9d56-c3b14d5f24f1', '#40E0D0', 'Бирюзовый', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b'),
    ('c8f2a1c1-7d12-4a23-9d56-c3b14d5f24f1', '#F5F5DC', 'Бежевый', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('d8f2a1c1-7e24-40c2-9d56-c3b14d5f24f1', '#64ba18', 'Зеленый', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('e8f2a1c1-7f13-4b76-9d56-c3b14d5f24f1', '#ffffff', 'Белый', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('f8f2a1c1-803e-48e2-9d56-c3b14d5f24f1', '#000000', 'Черный', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e'),
    ('09f2a1c1-805f-42de-9d56-c3b14d5f24f1', '#2c5bbf', 'Синий', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e'),
    ('19f2a1c1-814d-43fd-9d56-c3b14d5f24f1', '#40E0D0', 'Бирюзовый', 'f4c6713e-573f-4c9e-877e-6a0f5c9e3e53'),
    ('29f2a1c1-824e-40bf-9d56-c3b14d5f24f1', '#F5F5DC', 'Бежевый', 'f4c6713e-573f-4c9e-877e-6a0f5c9e3e53');


INSERT INTO product_sizes (id, value, product_id)
VALUES
    ('a4924287-8ff3-495c-8028-59693f40d5d3', 'M', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('21a3525a-aac4-4404-b36e-ddd92fa6469e', 'L', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('49473e99-875a-413b-b2a1-52eb49c93376', 'XL', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('9b34a932-a1fc-4e8b-a411-7845bc9aa615', 'M', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('a559b084-395f-4cac-8d95-0a0fb9b4244d', 'L', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('7a25ed10-952e-4cda-9e5b-6e3d83973a4c', 'XL', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('108e9004-ae01-45fd-975c-1788761e42dc', 'M', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76'),
    ('8697ce54-4c15-4493-a2bb-fe52272051c4', 'L', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76'),
    ('9eb8a6f5-3dd5-4567-b59d-c927071b0618', 'XL', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76'),
    ('0953100a-2b2c-4e04-8e3f-bdcd6dfce560', 'M', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b'),
    ('bc885999-7aa7-4cf1-9bf3-a4577163d836', 'L', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b'),
    ('c31e7222-9c30-4b5d-a332-0687b1296b28', 'XL', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b'),
    ('eedf73fc-2a55-43bd-a876-b550f8ef9ee2', 'M', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('620e94d9-32de-40fa-b246-8eb3cb8ded65', 'L', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('e67eac0c-986f-430a-89f5-1c57a9b80510', 'XL', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('ae270f66-cce3-4d42-b2c9-0ab440c442ea', 'M', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e'),
    ('161a363b-93be-463c-bffb-0628a275090b', 'L', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e'),
    ('bb549ec7-e233-419c-851b-c91ad60822ae', 'XL', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e'),
    ('da8f2456-e2b7-4251-8585-6071e289715d', 'M', 'f4c6713e-573f-4c9e-877e-6a0f5c9e3e53'),
    ('754f77aa-b901-413f-a29f-ec523ec1936e', 'L', 'f4c6713e-573f-4c9e-877e-6a0f5c9e3e53'),
    ('472f175e-12c1-43e5-9e9e-34fd8ddb1ab7', 'XL', 'f4c6713e-573f-4c9e-877e-6a0f5c9e3e53');


INSERT INTO product_images (image_id, path, product_id, order_index)
VALUES
    ('09b3e673-fc9e-493f-9d56-357a2c22e5f1', 'dd6c2d4e-9dd5-4bcd-92bd-f86e0a58f540.webp', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd', 1),
    ('19b3e673-fc9e-493f-9d56-357a2c22e5f1', '5dd4c675-0b26-4a18-a0be-86990f523961.webp', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd', 2),
    ('29b3e673-fc9e-493f-9d56-357a2c22e5f1', '637c4adb-5f5b-426e-9b7f-815bb70a72ba.webp', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd', 3),
    ('39b3e673-fc9e-493f-9d56-357a2c22e5f1', 'fc03da7d-3850-4385-b3d1-10c0b5341d01.webp', 'efc52b3a-7cda-4266-a65d-60a1f72e8749', 1),
    ('49b3e673-fc9e-493f-9d56-357a2c22e5f1', 'f6fa5f6f-3469-4580-a6b2-6270021b370a.webp', 'efc52b3a-7cda-4266-a65d-60a1f72e8749', 2),
    ('59b3e673-fc9e-493f-9d56-357a2c22e5f1', 'b7461360-912c-447e-acfd-5249ad6b7b43.webp', 'efc52b3a-7cda-4266-a65d-60a1f72e8749', 3),
    ('69b3e673-fc9e-493f-9d56-357a2c22e5f1', '69d458c8-18d2-41cb-95a9-7595289579ad.webp', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76', 1),
    ('79b3e673-fc9e-493f-9d56-357a2c22e5f1', 'fc676829-e9aa-4038-8a17-c0860c80c556.webp', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76', 2),
    ('89b3e673-fc9e-493f-9d56-357a2c22e5f1', '0b5637e2-2d17-4228-bcec-53281ca7be37.webp', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76', 3),
    ('99b3e673-fc9e-493f-9d56-357a2c22e5f1', 'e94345bd-28db-4a9f-874d-db7adda0a379.webp', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b', 1),
    ('a9b3e673-fc9e-493f-9d56-357a2c22e5f1', '0f553fd9-3bf3-4454-8e9d-c1a1ccf660eb.webp', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b', 2),
    ('b9b3e673-fc9e-493f-9d56-357a2c22e5f1', '9e4e96e6-196f-498e-9591-eb900b2f725c.webp', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b', 3),
    ('c9b3e673-fc9e-493f-9d56-357a2c22e5f1', '50f92c54-fab4-4d7d-b07a-4edbde7e2170.webp', 'b5c91d37-71cb-4c31-81ab-124fc72a1468', 1),
    ('d9b3e673-fc9e-493f-9d56-357a2c22e5f1', '9f88a8e3-cc2f-4636-bbc4-2879e985d203.webp', 'b5c91d37-71cb-4c31-81ab-124fc72a1468', 2),
    ('e9b3e673-fc9e-493f-9d56-357a2c22e5f1', 'fcd4d772-eed4-4710-b93f-a7a51695557e.webp', 'b5c91d37-71cb-4c31-81ab-124fc72a1468', 3),
    ('f9b3e673-fc9e-493f-9d56-357a2c22e5f1', '16c59002-fcac-4d2b-8707-b2fb11e5e4e4.webp', 'b5c91d37-71cb-4c31-81ab-124fc72a1468', 4),
    ('0ab3e673-fc9e-493f-9d56-357a2c22e5f1', '36385f1f-9635-46d3-bec6-951069700808.webp', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e', 1),
    ('1ab3e673-fc9e-493f-9d56-357a2c22e5f1', 'e649b8ef-fb20-4fbe-a397-ce9f53398cd0.webp', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e', 2),
    ('2ab3e673-fc9e-493f-9d56-357a2c22e5f1', 'bed8294f-e728-4ed7-b5ec-8e9bf59a6185.webp', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e', 3),
    ('3ab3e673-fc9e-493f-9d56-357a2c22e5f1', '3da77212-b319-4607-80be-abb3ade74d9f.webp', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e', 4),
    ('4ab3e673-fc9e-493f-9d56-357a2c22e5f1', 'a582ff82-8aa6-4b4c-97ee-22b72f8bf6c4.webp', 'f4c6713e-573f-4c9e-877e-6a0f5c9e3e53', 1),
    ('5ab3e673-fc9e-493f-9d56-357a2c22e5f1', 'bb3d09a2-9069-47cc-a981-d69e6e0212d6.webp', 'f4c6713e-573f-4c9e-877e-6a0f5c9e3e53', 2);

-- Джинсы
INSERT INTO products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('e23c5a1b-392f-4f1b-8a65-345f9f45adcd', 3590, 'Джинсы унисекс', 'Универсальные джинсы для любого сезона', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimX', 'Джинс', 'DU001'),
    ('7e12d845-ef6a-45b5-9448-6a18b58e5e43', 4990, 'Джинсы', 'Классические джинсы для повседневной носки', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimY', 'Джинс', 'D002'),
    ('be43531c-f4c4-467d-9a35-652c8f9e6757', 5490, 'Джинсы с отделкой стразами', 'Джинсы с яркой отделкой стразами для стильного образа', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimZ', 'Джинс', 'DS003'),
    ('cf129f8e-46f4-4e6f-bb7e-3c92652867d2', 3990, 'Джинсовая юбка', 'Модная джинсовая юбка для летнего сезона', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimQ', 'Джинс', 'DS004'),
    ('d127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7', 2790, 'Шорты джинсовые', 'Удобные джинсовые шорты для активного отдыха', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimR', 'Джинс', 'DS005'),
    ('f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934', 4290, 'Джинсы удлиненные', 'Стильные удлиненные джинсы для современной моды', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimS', 'Джинс', 'DU006'),
    ('b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65', 4790, 'Модные джинсы', 'Современные модные джинсы для креативных образов', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimT', 'Джинс', 'MJ007');

INSERT INTO product_colors (id, hex, name, product_id)
VALUES
    ('81e9c480-123a-46e3-912a-2429c2e2d2d2', '#ffffff', 'Белый', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('91e9c470-22c2-46f1-857f-3429c2e2d2e2', '#000000', 'Черный', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('a1e9c460-32e2-46f2-857f-4429c2e2d2f3', '#2c5bbf', 'Синий', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('b1e9c450-42f2-46f3-857f-5429c2e2d2d4', '#40E0D0', 'Бирюзовый', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('c1e9c440-52f2-46f4-857f-6429c2e2d2d5', '#F5F5DC', 'Бежевый', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('d1e9c430-62f2-46f5-857f-7429c2e2d2d6', '#64ba18', 'Зеленый', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('e1e9c420-72f2-46f6-857f-8429c2e2d2d7', '#ffffff', 'Белый', 'be43531c-f4c4-467d-9a35-652c8f9e6757'),
    ('f1e9c410-82f2-46f7-857f-9429c2e2d2d8', '#000000', 'Черный', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2'),
    ('01e9c400-92f2-46f8-857f-a429c2e2d2d9', '#2c5bbf', 'Синий', 'd127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7'),
    ('11e9c3f0-a2f2-46f9-857f-b429c2e2d2d1', '#40E0D0', 'Бирюзовый', 'f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934'),
    ('21e9c3e0-b2f2-46fa-857f-c429c2e2d2d2', '#F5F5DC', 'Бежевый', 'b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65');


INSERT INTO product_sizes (id, value, product_id)
VALUES
    ('51b8a987-1f93-495c-8028-59693f40d5d7', 'M', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('52b8a987-2f93-495c-8028-59693f40d5d7', 'L', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('53b8a987-3f93-495c-8028-59693f40d5d7', 'XL', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('54b8a987-4f93-495c-8028-59693f40d5d7', 'M', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('55b8a987-5f93-495c-8028-59693f40d5d7', 'L', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('56b8a987-6f93-495c-8028-59693f40d5d7', 'XL', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('57b8a987-7f93-495c-8028-59693f40d5d7', 'M', 'be43531c-f4c4-467d-9a35-652c8f9e6757'),
    ('58b8a987-8f93-495c-8028-59693f40d5d7', 'L', 'be43531c-f4c4-467d-9a35-652c8f9e6757'),
    ('59b8a987-9f93-495c-8028-59693f40d5d7', 'XL', 'be43531c-f4c4-467d-9a35-652c8f9e6757'),
    ('60b8a987-af93-495c-8028-59693f40d5d7', 'M', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2'),
    ('61b8a987-bf93-495c-8028-59693f40d5d7', 'L', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2'),
    ('62b8a987-cf93-495c-8028-59693f40d5d7', 'XL', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2'),
    ('63b8a987-df93-495c-8028-59693f40d5d7', 'M', 'd127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7'),
    ('64b8a987-ef93-495c-8028-59693f40d5d7', 'L', 'd127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7'),
    ('65b8a987-ff93-495c-8028-59693f40d5d7', 'XL', 'd127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7'),
    ('66b8a987-0f94-495c-8028-59693f40d5d7', 'M', 'f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934'),
    ('67b8a987-1f94-495c-8028-59693f40d5d7', 'L', 'f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934'),
    ('68b8a987-2f94-495c-8028-59693f40d5d7', 'XL', 'f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934'),
    ('69b8a987-3f94-495c-8028-59693f40d5d7', 'M', 'b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65'),
    ('70b8a987-4f94-495c-8028-59693f40d5d7', 'L', 'b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65'),
    ('71b8a987-5f94-495c-8028-59693f40d5d7', 'XL', 'b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65');

INSERT INTO product_images (image_id, path, product_id, order_index)
VALUES
    ('ebb1324e-3cfb-479a-b1ce-7f5d65cf5b47', '28435ab6-30d7-48db-8dfc-6934f1a29b44.webp', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd', 1),
    ('97fe23f4-7259-4aee-a8e6-0ecaa11a7cf6', 'ac3672c5-457a-4b3b-b4a9-b28f4cc5e7f4.webp', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd', 2),
    ('c5c563cb-8cd5-4cee-811c-5329e7315a14', 'c0277980-ca02-495e-b1d2-fbbbba461a22.webp', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd', 3),
    ('822e9e7d-bcb7-4ab7-a427-34e4b8839131', '5a249a7f-3728-4b17-99f9-355e9154b4d5.webp', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd', 4),
    ('b517923a-8d9f-404a-bd0a-259a6c4055a6', 'befbf8e1-2d4e-4133-8d66-9ebbf22302d4.webp', '7e12d845-ef6a-45b5-9448-6a18b58e5e43', 1),
    ('6c207e1d-b567-4267-a6a3-d95572450b3f', 'c2dd6a29-2023-4875-b75f-3a2c9c3a845d.webp', '7e12d845-ef6a-45b5-9448-6a18b58e5e43', 2),
    ('e1f9358d-4371-499e-95d9-8c11de8362e6', '5788b357-6a3b-4555-a65f-6d109b43e7da.webp', '7e12d845-ef6a-45b5-9448-6a18b58e5e43', 3),
    ('99dd49b3-37e3-4021-a928-f1ba99d25350', 'd153f4fc-c17f-430e-b7bd-fce5f3d71cdf.webp', '7e12d845-ef6a-45b5-9448-6a18b58e5e43', 4),
    ('7b779d26-fada-4161-9998-4984acf2a51a', 'cd35c52d-2ee1-4d7d-9423-1e8a908ac78c.webp', 'be43531c-f4c4-467d-9a35-652c8f9e6757', 1),
    ('fed9b77d-a51f-4343-ab90-2cc21cf7f1ca', '73c3d39e-1fac-46f1-96bd-df0ff2a59b06.webp', 'be43531c-f4c4-467d-9a35-652c8f9e6757', 2),
    ('50a6642d-ff59-443c-a764-cba6bd3b2c59', 'a1a2da90-47be-4222-82d8-8d3a1540f6bf.webp', 'be43531c-f4c4-467d-9a35-652c8f9e6757', 3),
    ('b8d4e29f-3c54-409c-9321-454c339a1cd6', '4b59d0be-76ae-4f17-a777-c34a24a58288.webp', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2', 1),
    ('32baaa91-10f3-485c-8277-4663d9c1cd95', '91ee9348-4961-426a-8f98-d06c31f6be20.webp', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2', 2),
    ('53f2e072-3163-400f-85a0-f6ae7a6dbcda', '3acad0de-03f5-4435-ad73-65a6f6a9ff33.webp', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2', 3),
    ('ba1992db-4382-4038-b9f3-f610590ddf0c', '533192f3-b839-499f-bd75-dad391119165.webp', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2', 4),
    ('8186242c-0214-453d-a34e-6558afc0ed8a', 'cd12fe78-f09f-4f56-b411-bda230f53716.webp', 'd127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7', 1),
    ('74e933d7-afe3-4e85-97d5-0f2b4b2858ba', '1d3002dd-27cf-447c-9f0c-4883579a9427.webp', 'd127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7', 2),
    ('2b5f12b8-4e0f-4c9f-90d6-9d4e2d83d4a3', 'bc317d79-4bf5-4525-b694-f7d6b1778b8a.webp', 'd127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7', 3),
    ('cd104842-a135-46e1-9375-1a958b3f7e69', 'e2d59444-feab-4e1a-86ac-30faa478aa6f.webp', 'd127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7', 4),
    ('ee08441e-2fa3-46ab-8d39-97fd3a28dc75', 'c57a7cbe-1211-4682-b511-ba00f9fb2e3b.webp', 'f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934', 1),
    ('64acb236-5c9d-422e-8a4b-0c633b4046c3', '78c020ce-6e93-407c-8a29-d29adee2a682.webp', 'f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934', 2),
    ('47978fef-632d-48d6-b4e5-723338444289', '87087fd3-2bd0-4006-986f-fd34ca14f0c4.webp', 'f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934', 3),
    ('53232e0a-7bce-49fa-b253-5d3de71dd94b', 'a3ec36c2-1742-4800-88d3-c263d099398f.webp', 'f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934', 4),
    ('e8b504d0-3814-418a-a701-6bdd54d71d65', 'b7475522-de7d-42ab-a2e5-0f31bec3a5f6.webp', 'b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65', 1),
    ('30321f41-68e9-4071-9a54-63b71b397cfd', 'ca9587fd-5d74-4cd9-a51a-a8772181ff03.webp', 'b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65', 2),
    ('a21db3b0-aa87-48ce-8c9e-d2234823867a', 'e63888a3-9c9a-4dcf-ae22-974da4e212a3.webp', 'b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65', 3),
    ('e6cf0010-5190-42f5-bd50-69f6e215768e', '9c620b66-d5fb-49c0-8399-c88a58f5e144.webp', 'b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65', 4);

-- Рубашки и блузки
INSERT INTO products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4', 3990, 'Блузка из хлопка и льна', 'Блузка из натуральных тканей', 0, '2023-12-01', true, '93c503da-3a98-4d52-a413-19963d9a875c', 'TopG', 'Хлопок и лён', 'BLZ12345'),
    ('c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75', 5490, 'Шелковая рубашка', 'Элегантная шелковая рубашка', 0, '2023-12-02', true, '93c503da-3a98-4d52-a413-19963d9a875c', 'TopG', 'Шелк', 'SLK12345'),
    ('d2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd', 2990, 'Хлопковая блузка', 'Лёгкая хлопковая блузка', 0, '2023-12-03', true, '93c503da-3a98-4d52-a413-19963d9a875c', 'TopG', 'Хлопок', 'COT12345'),
    ('e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de', 4590, 'Рубашка женская', 'Универсальная женская рубашка', 0, '2023-12-04', true, '93c503da-3a98-4d52-a413-19963d9a875c', 'TopG', 'Хлопок', 'WMS12345'),
    ('f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef', 7990, 'Вельветовая рубашка', 'Тёплая рубашка из вельвета', 0, '2023-12-05', true, '93c503da-3a98-4d52-a413-19963d9a875c', 'TopG', 'Вельвет', 'VEL12345'),
    ('a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef', 6390, 'Рубашка из вискозы', 'Мягкая рубашка из вискозы', 0, '2023-12-06', true, '93c503da-3a98-4d52-a413-19963d9a875c', 'TopG', 'Вискоза', 'VIS12345'),
    ('b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0', 4990, 'Блузка', 'Стильная блузка для офиса', 0, '2023-12-07', true, '93c503da-3a98-4d52-a413-19963d9a875c', 'TopG', 'Хлопок', 'OFI12345');

INSERT INTO product_sizes (id, value, product_id)
VALUES
    (uuid_generate_v4(), 'M', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4'),
    (uuid_generate_v4(), 'L', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4'),
    (uuid_generate_v4(), 'XL', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4'),
    (uuid_generate_v4(), 'M', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75'),
    (uuid_generate_v4(), 'L', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75'),
    (uuid_generate_v4(), 'XL', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75'),
    (uuid_generate_v4(), 'M', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd'),
    (uuid_generate_v4(), 'L', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd'),
    (uuid_generate_v4(), 'XL', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd'),
    (uuid_generate_v4(), 'M', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de'),
    (uuid_generate_v4(), 'L', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de'),
    (uuid_generate_v4(), 'XL', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de'),
    (uuid_generate_v4(), 'M', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef'),
    (uuid_generate_v4(), 'L', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef'),
    (uuid_generate_v4(), 'XL', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef'),
    (uuid_generate_v4(), 'M', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef'),
    (uuid_generate_v4(), 'L', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef'),
    (uuid_generate_v4(), 'XL', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef'),
    (uuid_generate_v4(), 'M', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0'),
    (uuid_generate_v4(), 'L', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0'),
    (uuid_generate_v4(), 'XL', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0');

INSERT INTO product_colors (id, hex, name, product_id)
VALUES
    (uuid_generate_v4(), '#2c5bbf', 'Синий', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4'),
    (uuid_generate_v4(), '#40E0D0', 'Бирюзовый', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4'),
    (uuid_generate_v4(), '#000000', 'Черный', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4'),
    (uuid_generate_v4(), '#F5F5DC', 'Бежевый', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75'),
    (uuid_generate_v4(), '#ffffff', 'Белый', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75'),
    (uuid_generate_v4(), '#64ba18', 'Зеленый', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75'),
    (uuid_generate_v4(), '#2c5bbf', 'Синий', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd'),
    (uuid_generate_v4(), '#000000', 'Черный', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd'),
    (uuid_generate_v4(), '#F5F5DC', 'Бежевый', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd'),
    (uuid_generate_v4(), '#40E0D0', 'Бирюзовый', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de'),
    (uuid_generate_v4(), '#64ba18', 'Зеленый', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de'),
    (uuid_generate_v4(), '#2c5bbf', 'Синий', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de'),
    (uuid_generate_v4(), '#ffffff', 'Белый', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef'),
    (uuid_generate_v4(), '#F5F5DC', 'Бежевый', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef'),
    (uuid_generate_v4(), '#40E0D0', 'Бирюзовый', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef'),
    (uuid_generate_v4(), '#2c5bbf', 'Синий', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef'),
    (uuid_generate_v4(), '#000000', 'Черный', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef'),
    (uuid_generate_v4(), '#64ba18', 'Зеленый', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef'),
    (uuid_generate_v4(), '#ffffff', 'Белый', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0'),
    (uuid_generate_v4(), '#000000', 'Черный', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0'),
    (uuid_generate_v4(), '#2c5bbf', 'Синий', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0');


INSERT INTO product_images (image_id, path, product_id, order_index)
VALUES
    (uuid_generate_v4(), '7c508ac2-4e58-4d44-a51a-43890615377b.webp', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4', 1),
    (uuid_generate_v4(), 'ddabcde6-0e0a-4426-952f-f0d399d74c00.webp', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4', 2),
    (uuid_generate_v4(), '71c35c7f-dba7-4b63-bf46-2fcc74f347fc.webp', 'b1e25f2c-4d8c-42e2-9269-33dfb5a2d1e4', 3),
    (uuid_generate_v4(), '098b40ca-72ee-4762-90e3-39c57769d539.webp', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75', 1),
    (uuid_generate_v4(), '2e5fd335-b823-4365-9412-9927cc32d054.webp', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75', 2),
    (uuid_generate_v4(), '807d526a-d8a9-438d-badf-0e7c361beb20.webp', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75', 3),
    (uuid_generate_v4(), '587b7494-169d-4acb-849d-43ba2b76a6e2.webp', 'c1f36e7a-5a4b-4b8f-8ecf-f5e097654a75', 4),
    (uuid_generate_v4(), '83060400-a4bf-4dff-a3e0-3d575bd98b37.webp', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd', 1),
    (uuid_generate_v4(), '117d1eb8-4a84-414f-9f57-af72cd73baf4.webp', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd', 2),
    (uuid_generate_v4(), '0e776f7c-2899-4a45-b94a-db14a3d845f4.webp', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd', 3),
    (uuid_generate_v4(), '06b4adb6-c2ca-4079-aeba-c33afe97d03b.webp', 'd2b87c3a-6c5d-4fa6-8e1e-2d6e458f79cd', 4),
    (uuid_generate_v4(), '0bdfb248-9db4-4123-8d99-8f442df993dd.webp', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de', 1),
    (uuid_generate_v4(), 'f2bbeb8a-7201-4aa8-9eb1-a86c8de14a3e.webp', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de', 2),
    (uuid_generate_v4(), 'ba40bb1b-b2df-4245-9856-3ce8ba1839cc.webp', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de', 3),
    (uuid_generate_v4(), '1e88013d-cbc0-43c3-90e9-35d88dd2d7dd.webp', 'e3d78e4b-7e6f-4bb8-9a2f-3e7f578c89de', 4),
    (uuid_generate_v4(), '621f651e-5bf6-4b33-87d8-752f05ca70f4.webp', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef', 1),
    (uuid_generate_v4(), '61140355-c88f-4e34-a4ac-293a62c44584.webp', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef', 2),
    (uuid_generate_v4(), '0f4501d6-f2a5-4d2a-b5be-d1b1ab24eaae.webp', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef', 3),
    (uuid_generate_v4(), '07006c7e-2d56-41bf-965f-ec786e719289.webp', 'f4e89f5c-8f70-4bc9-9b3f-4f80a6989aef', 4),
    (uuid_generate_v4(), 'ffc73ebc-4f82-41ad-b4c7-de8f3e3b53b9.webp', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef', 1),
    (uuid_generate_v4(), '904031bb-0a85-4e5b-89e2-b80eb0779ce6.webp', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef', 2),
    (uuid_generate_v4(), '1916fa77-e0f7-45cf-acc1-143446cfa6a2.webp', 'a5f9a06d-9a81-4cba-9c4f-5f90b7a9abef', 3),
    (uuid_generate_v4(), '6b0d5db8-e95b-4cf9-a56e-0d4fc0061490.webp', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0', 1),
    (uuid_generate_v4(), 'b77eb647-1eb6-4aab-ac29-76b05bdbe27b.webp', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0', 2),
    (uuid_generate_v4(), 'd3611f13-5e2a-4a45-8253-65b0a816989e.webp', 'b6fa0b7e-ac92-4dab-9d5f-6fa1c8c8bcf0', 3);

-- Толстовки и худи
INSERT INTO products
(
    product_id,
    price,
    title,
    description,
    stars,
    creation_date,
    is_new,
    category_id,
    brand,
    composition,
    sku
)
VALUES
    ('1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 3490, 'Хлопковый свитшот', 'Теплый и уютный свитшот из хлопка', 0, '2024-08-24', true, '9257f496-fd5b-411a-9031-1a3d6c45cca8', 'BrandA', '100% Хлопок', 'HSW2024'),
    ('e73dc324-155f-4322-8e2f-d8303da6300c', 4590, 'Свитшот', 'Мягкий свитшот для повседневной носки', 0, '2024-08-24', true, '9257f496-fd5b-411a-9031-1a3d6c45cca8', 'BrandB', '100% Хлопок', 'SW2024'),
    ('9aecd02c-7a5b-4d15-960a-7d5943cf5e87', 5290, 'Толстовка женская', 'Стильная женская толстовка на молнии', 0, '2024-08-24', true, '9257f496-fd5b-411a-9031-1a3d6c45cca8', 'BrandC', '80% Хлопок, 20% Полиэстер', 'FJH2024');

INSERT INTO product_colors (id, hex, name, product_id)
VALUES
    (uuid_generate_v4(), '#ffffff', 'Белый', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
    (uuid_generate_v4(), '#000000', 'Черный', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
    (uuid_generate_v4(), '#2c5bbf', 'Синий', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),

    (uuid_generate_v4(), '#40E0D0', 'Бирюзовый', 'e73dc324-155f-4322-8e2f-d8303da6300c'),
    (uuid_generate_v4(), '#F5F5DC', 'Бежевый', 'e73dc324-155f-4322-8e2f-d8303da6300c'),
    (uuid_generate_v4(), '#64ba18', 'Зеленый', 'e73dc324-155f-4322-8e2f-d8303da6300c'),

    (uuid_generate_v4(), '#ffffff', 'Белый', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87'),
    (uuid_generate_v4(), '#2c5bbf', 'Синий', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87'),
    (uuid_generate_v4(), '#64ba18', 'Зеленый', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87');

INSERT INTO product_sizes (id, value, product_id)
VALUES
    (uuid_generate_v4(), 'M', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
    (uuid_generate_v4(), 'L', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
    (uuid_generate_v4(), 'XL', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),

    (uuid_generate_v4(), 'M', 'e73dc324-155f-4322-8e2f-d8303da6300c'),
    (uuid_generate_v4(), 'L', 'e73dc324-155f-4322-8e2f-d8303da6300c'),
    (uuid_generate_v4(), 'XL', 'e73dc324-155f-4322-8e2f-d8303da6300c'),

    (uuid_generate_v4(), 'M', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87'),
    (uuid_generate_v4(), 'L', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87'),
    (uuid_generate_v4(), 'XL', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87');

INSERT INTO product_images (image_id, path, product_id, order_index)
VALUES
    (uuid_generate_v4(), 'c99d0514-ef17-46e5-855c-1927a5dd33cd.webp', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 1),
    (uuid_generate_v4(), '88dd3fec-5290-4be1-b901-5df08b4eb396.webp', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 2),
    (uuid_generate_v4(), '5c2cdbe1-96a9-46af-980f-768e3f455033.webp', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 3),
    (uuid_generate_v4(), 'b5a01bbf-41a2-474b-a231-65c0affb6084.webp', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 4),

    (uuid_generate_v4(), '2dabe8c8-0b3c-461e-88e2-ac2776bd49d1.webp', 'e73dc324-155f-4322-8e2f-d8303da6300c', 1),
    (uuid_generate_v4(), 'ab47443a-031e-44bc-8fde-89d205b0ff70.webp', 'e73dc324-155f-4322-8e2f-d8303da6300c', 2),
    (uuid_generate_v4(), '0510db15-9ec5-4c53-909c-de11ce855fc0.webp', 'e73dc324-155f-4322-8e2f-d8303da6300c', 3),
    (uuid_generate_v4(), '46640203-6162-4a5f-aa94-e7f9332802d5.webp', 'e73dc324-155f-4322-8e2f-d8303da6300c', 4),

    (uuid_generate_v4(), 'a3577255-9d07-4c49-8654-0d2811b9a3c1.webp', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87', 1),
    (uuid_generate_v4(), 'ff9799d7-0c9a-4062-a251-caf073c99c88.webp', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87', 2),
    (uuid_generate_v4(), '58601fd9-3523-4c28-81af-294792d68d5c.webp', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87', 3),
    (uuid_generate_v4(), '763197bc-5b1a-4b5f-9cd5-23515edffd85.webp', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87', 4);

END;