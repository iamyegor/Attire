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
    ('7a672a41-a5b7-4e73-a160-8a53b2d94801', 5600, 'Шорты джинсовые мужская', 'Мужские джинсовые шорты', 0, '2020-11-02', false, '36e7c91e-e844-437e-a04f-792f7950a3c7', 'TopG', 'Джинса', '130825/SR', 'Men''s Denim Shorts', 'Men''s denim shorts', 'Denim'),
    ('1a881f21-5f3e-4c69-b8d9-214a43d3251e', 7000, 'Шорты Goods мужские', 'Шорты мужские Goods из мягкого хлопка', 0, '2023-11-01', false, '36e7c91e-e844-437e-a04f-792f7950a3c7', 'TopG', 'Хлопок', '10846/BL', 'Goods Men''s Shorts', 'Goods men''s shorts made of soft cotton', 'Cotton'),
    ('1b229cf8-dcfa-446e-8d28-e4b3089e15f8', 3800, 'Шорты мужские Attire Lang', 'Шорты мужские для повседневной носки', 0, '2023-11-11', true, '36e7c91e-e844-437e-a04f-792f7950a3c7', 'TopG', 'Хлопок', '30847/EN', 'Attire Lang Men''s Shorts', 'Men''s shorts for everyday wear', 'Cotton'),
    ('2b51e5df-0541-41a3-bcfb-d3d287c2a655', 3900, 'Шорты джоггеры Lamar мужские', 'Шорты джоггеры Lamar из мягкого хлопка', 0, '2023-11-14', true, '36e7c91e-e844-437e-a04f-792f7950a3c7', 'TopG', 'Хлопок', '130848/DY', 'Lamar Men''s Jogger Shorts', 'Lamar jogger shorts made of soft cotton', 'Cotton');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('1ad12c3e-906b-4a90-7b21-0a431345eef1', '#2477b2', 'Синий', '7a672a41-a5b7-4e73-a160-8a53b2d94801'),
    ('1a641a61-a5b2-4e73-a160-8a53b2d97801', '#313133', 'Тёмно-серый', '1a881f21-5f3e-4c69-b8d9-214a43d3251e'),
    ('1bdc48d3-f38a-3e22-810b-bd7ac5b17b3a', '#000', 'Чёрный', '1b229cf8-dcfa-446e-8d28-e4b3089e15f8'),
    ('2bdc32d3-f38a-4e98-810b-bd7ac5b17b4a', '#fff', 'Белый', '2b51e5df-0541-41a3-bcfb-d3d287c2a655'),
    ('3cf4f612-37f2-4a9e-bf6f-d5b496f8a601', '#000', 'Чёрный', '2b51e5df-0541-41a3-bcfb-d3d287c2a655');

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

