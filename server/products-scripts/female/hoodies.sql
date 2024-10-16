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
    ('1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 3490, 'Хлопковый свитшот', 'Теплый и уютный свитшот из хлопка', 0, '2024-08-24', true, '9257f496-fd5b-411a-9031-1a3d6c45cca8', 'BrandA', '100% Хлопок', 'HSW2024', 'Cotton sweatshirt', 'Warm and cozy cotton sweatshirt', '100% Cotton'),
    ('e73dc324-155f-4322-8e2f-d8303da6300c', 4590, 'Свитшот', 'Мягкий свитшот для повседневной носки', 0, '2024-08-24', true, '9257f496-fd5b-411a-9031-1a3d6c45cca8', 'BrandB', '100% Хлопок', 'SW2024', 'Sweatshirt', 'Soft sweatshirt for everyday wear', '100% Cotton'),
    ('9aecd02c-7a5b-4d15-960a-7d5943cf5e87', 5290, 'Толстовка женская', 'Стильная женская толстовка на молнии', 0, '2024-08-24', true, '9257f496-fd5b-411a-9031-1a3d6c45cca8', 'BrandC', '80% Хлопок, 20% Полиэстер', 'FJH2024', 'Women''s hoodie', 'Stylish women''s zip-up hoodie', '80% Cotton, 20% Polyester');

INSERT INTO product_colors (id, hex, name, product_id)
VALUES
    (uuid_generate_v4(), '#fff', 'Белый', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
    (uuid_generate_v4(), '#000', 'Черный', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
    (uuid_generate_v4(), '#2c5bbf', 'Синий', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),

    (uuid_generate_v4(), '#40E0D0', 'Бирюзовый', 'e73dc324-155f-4322-8e2f-d8303da6300c'),
    (uuid_generate_v4(), '#F5F5DC', 'Бежевый', 'e73dc324-155f-4322-8e2f-d8303da6300c'),
    (uuid_generate_v4(), '#64ba18', 'Зеленый', 'e73dc324-155f-4322-8e2f-d8303da6300c'),

    (uuid_generate_v4(), '#fff', 'Белый', '9aecd02c-7a5b-4d15-960a-7d5943cf5e87'),
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
