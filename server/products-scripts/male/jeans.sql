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
    ('6a622a41-a5b7-4e73-a160-8a53b2d94801', 10600, 'Джинсы Lazy Way мужские', 'Джинсы Lazy Way из упругой джинсы', 0, '2020-01-02', false, '93c503da-3a98-4d52-a413-08963d9a874c', 'TopG', 'Джинса', '3825/DR', 'Lazy Way Men''s Jeans', 'Lazy Way jeans made of elastic denim', 'Denim'),
    ('1a541f22-5f3e-4c69-b8d9-214a43d3251e', 20000, 'Джинсы Sky Style мужские', 'Джинсы Sky Style из мягкого хлопка', 0, '2023-11-01', false, '93c503da-3a98-4d52-a413-08963d9a874c', 'TopG', 'Хлопок', '10846/BL', 'Sky Style Men''s Jeans', 'Sky Style jeans made of soft cotton', 'Cotton'),
    ('1b259cf8-dcfa-446e-8d28-e4b3089e15f8', 12800, 'Джинсы Grunge Moment мужские', 'Grunge Moment: Эти потертые джинсы идеально подойдут для создания неформального и дерзкого образа.', 0, '2024-08-08', true, '93c503da-3a98-4d52-a413-08963d9a874c', 'TopG', 'Хлопок', '30847/EN', 'Grunge Moment Men''s Jeans', 'Grunge Moment: These distressed jeans are perfect for creating an informal and edgy look.', 'Cotton'),
    ('2b16e5df-0541-41a3-bcfb-d3d287c2a635', 7900, 'Джинсы Blue Dreams мужские', 'Джинсы Blue Dreams мужские мягкого хлопка', 0, '2023-11-14', true, '93c503da-3a98-4d52-a413-08963d9a874c', 'TopG', 'Хлопок', '130848/DY', 'Blue Dreams Men''s Jeans', 'Blue Dreams men''s jeans made of soft cotton', 'Cotton');

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