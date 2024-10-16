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
    sku,
    title_en,
    description_en,
    composition_en
)
VALUES
    ('ae3c2b1a-394b-41f1-9df5-89e334f8b7cd', 2990, 'Хлопковые шорты', 'Удобные хлопковые шорты для летних прогулок', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandA', 'Хлопок', 'HS123', 'Cotton shorts', 'Comfortable cotton shorts for summer walks', 'Cotton'),
    ('efc52b3a-7cda-4266-a65d-60a1f72e8749', 3990, 'Льняные шорты', 'Лёгкие и дышащие льняные шорты', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandB', 'Лён', 'LS456', 'Linen shorts', 'Light and breathable linen shorts', 'Linen'),
    ('d81a620e-c441-4f3d-b08b-29f50a9c1c76', 4990, 'Джинсовые шорты', 'Стильные джинсовые шорты для любого случая', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandC', 'Джинс', 'JS789', 'Denim shorts', 'Stylish denim shorts for any occasion', 'Denim'),
    ('a5e9c10b-78b9-4533-a1a7-568fcd42d11b', 2790, 'Шорты-шорты', 'Удобные и стильные шорты-шорты', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandD', 'Хлопок', 'SS321', 'Short shorts', 'Comfortable and stylish short shorts', 'Cotton'),
    ('b5c91d37-71cb-4c31-81ab-124fc72a1468', 3190, 'Шорты', 'Повседневные шорты для отдыха и прогулок', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandE', 'Хлопок', 'CS654', 'Shorts', 'Casual shorts for leisure and walks', 'Cotton'),
    ('e5a2f539-b392-4c9e-b57f-b8b8f29b129e', 3490, 'Юбка-шорты', 'Модные юбка-шорты с уникальным дизайном', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandF', 'Хлопок', 'SK987', 'Skort', 'Fashionable skort with a unique design', 'Cotton'),
    ('f4c6713e-573f-4c9e-877e-6a0f5c9e3e53', 2890, 'Шорты из вискозы', 'Лёгкие шорты из вискозы для летнего отдыха', 0, '2024-08-01', true, '36e7c91e-e844-437e-a04f-192f7950a3c7', 'BrandG', 'Вискоза', 'VS543', 'Viscose shorts', 'Light viscose shorts for summer leisure', 'Viscose');


INSERT INTO product_colors (id, hex, name, product_id)
VALUES
    ('08e9c170-123b-458b-857f-8429c2e2d2f7', '#fff', 'Белый', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('28e9c170-14c2-46f1-857f-8429c2e2d2f7', '#000', 'Черный', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('48e9c170-16e3-4b12-857f-8429c2e2d2f7', '#2c5bbf', 'Синий', 'ae3c2b1a-394b-41f1-9df5-89e334f8b7cd'),
    ('58f2a1c1-8d7f-4a3d-9d56-c3b14d5f24f1', '#40E0D0', 'Бирюзовый', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('68f2a1c1-7c4a-4c35-9d56-c3b14d5f24f1', '#F5F5DC', 'Бежевый', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('78f2a1c1-8d1a-403d-9d56-c3b14d5f24f1', '#64ba18', 'Зеленый', 'efc52b3a-7cda-4266-a65d-60a1f72e8749'),
    ('88f2a1c1-8d2c-481d-9d56-c3b14d5f24f1', '#fff', 'Белый', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76'),
    ('98f2a1c1-9e2f-4e7b-9d56-c3b14d5f24f1', '#000', 'Черный', 'd81a620e-c441-4f3d-b08b-29f50a9c1c76'),
    ('a8f2a1c1-7b23-4c6e-9d56-c3b14d5f24f1', '#2c5bbf', 'Синий', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b'),
    ('b8f2a1c1-7c3f-43b8-9d56-c3b14d5f24f1', '#40E0D0', 'Бирюзовый', 'a5e9c10b-78b9-4533-a1a7-568fcd42d11b'),
    ('c8f2a1c1-7d12-4a23-9d56-c3b14d5f24f1', '#F5F5DC', 'Бежевый', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('d8f2a1c1-7e24-40c2-9d56-c3b14d5f24f1', '#64ba18', 'Зеленый', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('e8f2a1c1-7f13-4b76-9d56-c3b14d5f24f1', '#fff', 'Белый', 'b5c91d37-71cb-4c31-81ab-124fc72a1468'),
    ('f8f2a1c1-803e-48e2-9d56-c3b14d5f24f1', '#000', 'Черный', 'e5a2f539-b392-4c9e-b57f-b8b8f29b129e'),
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