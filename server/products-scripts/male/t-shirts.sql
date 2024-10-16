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
    sku,
    title_en,
    description_en,
    composition_en
)
VALUES
    (
        '517b15d4-10c3-425f-b4eb-51c5b7973f18',
        4500,
        'Поло мужское',
        'Качественное мужское поло',
        0,
        '2001-09-28',
        false,
        '82c46ab3-0854-4caa-a421-24060f75b6ff',
        'TopG',
        'Хлопок',
        '13086/CI',
        'Men''s Polo',
        'High-quality men''s polo',
        'Cotton'
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
    sku,
    title_en,
    description_en,
    composition_en
)
VALUES
    (
        '517b15d4-10c3-425f-b4eb-51c5b7973f17',
        6500,
        'Поло с полосками мужское',
        'Качественное мужское поло с полосками',
        0,
        '2023-11-28',
        true,
        '82c46ab3-0854-4caa-a421-24060f75b6ff',
        'TopG',
        'Хлопок',
        '12086/CI',
        'Striped Men''s Polo',
        'High-quality striped men''s polo',
        'Cotton'
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
    sku,
    title_en,
    description_en,
    composition_en
)
VALUES
    (
        '517b15d4-10c3-425f-b4eb-51c5b7973f16',
        3500,
        'Футболка Hope мужская',
        'Качественное мужская футболка HOPE',
        0,
        '2023-11-02',
        true,
        '82c46ab3-0854-4caa-a421-24060f75b6ff',
        'TopG',
        'Хлопок',
        '130844/CI',
        'Hope Men''s T-Shirt',
        'High-quality men''s HOPE T-shirt',
        'Cotton'
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
    sku,
    title_en,
    description_en,
    composition_en
)
VALUES
    ('1a672a63-a5b7-4e73-a160-8a53b2d97801', 3600, 'Футболка пляжная мужская', 'Мужская пляжная футболка для активного отдыха', 0, '2023-11-05', false, '82c46ab3-0854-4caa-a421-24060f75b6ff', 'TopG', 'Хлопок', '130845/BR', 'Beach Men''s T-Shirt', 'Men''s beach T-shirt for active leisure', 'Cotton'),
    ('2a982f29-5f3e-4c69-b8d9-214a43d3451e', 3700, 'Футболка Whatever мужская', 'Комфортная футболка Whatever из мягкого хлопка', 0, '2023-11-08', false, '82c46ab3-0854-4caa-a421-24060f75b6ff', 'TopG', 'Хлопок', '130846/BL', 'Whatever Men''s T-Shirt', 'Comfortable Whatever T-shirt made of soft cotton', 'Cotton'),
    ('3b239cf8-dcfa-446e-8d39-e4b5089e75f8', 3800, 'Футболка карго мужская', 'Футболка карго с инновационным дизайном', 0, '2023-11-11', true, '82c46ab3-0854-4caa-a421-24060f75b6ff', 'TopG', 'Хлопок', '130847/EN', 'Cargo Men''s T-Shirt', 'Cargo T-shirt with innovative design', 'Cotton'),
    ('4b52e5df-0541-41a3-bcfb-d5d287c6a655', 3900, 'Футболка Sunshine мужская', 'Футболка Sunshine из мягкого хлопка', 0, '2023-11-14', true, '82c46ab3-0854-4caa-a421-24060f75b6ff', 'TopG', 'Хлопок', '130848/DY', 'Sunshine Men''s T-Shirt', 'Sunshine T-shirt made of soft cotton', 'Cotton');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('1ad12c3e-906b-4a90-8b21-0a431345eef1', '#fff', 'Белый', '1a672a63-a5b7-4e73-a160-8a53b2d97801'),
    ('1a672a63-a5b2-4e73-a160-8a53b2d97801', '#c5ad89', '8-кофейный', '1a672a63-a5b7-4e73-a160-8a53b2d97801'),
    ('2bdc48d3-f38a-4e98-810b-bd7ac5b17b3a', '#000', 'Чёрный', '2a982f29-5f3e-4c69-b8d9-214a43d3451e'),
    ('2bdc48d3-f38a-4e98-810b-bd7ac5b17b4a', '#fff', 'Белый', '2a982f29-5f3e-4c69-b8d9-214a43d3451e'),
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
