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
    ('5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc', 10100, 'Рубашка с короткими рукавами с принтом мужская', 'Рубашка с короткими рукавами с принтом мужская для пляжа', 0, '2023-12-01', true, '93c503da-3a98-4d52-a413-09962d9a875c', 'TopG', 'Хлопок', '140861/WH', 'Men''s short-sleeved printed shirt', 'Men''s short-sleeved printed shirt for the beach', 'Cotton'),
    ('a806f63f-205a-49f0-b6f0-c00b8b53da32', 7200, 'Рубашка с короткими рукавами мужская', 'Повседневная рубашка с короткими рукавами для комфорта и стиля', 0, '2023-12-03', true, '93c503da-3a98-4d52-a413-09962d9a875c', 'TopG', 'Хлопок', '140862/BL', 'Men''s short-sleeved shirt', 'Casual short-sleeved shirt for comfort and style', 'Cotton'),
    ('66904811-b707-4031-918c-4978805fb8ae', 6300, 'Рубашка Классическая мужская', 'Классическая мужская рубашка для стильного образа', 0, '2023-12-05', true, '93c503da-3a98-4d52-a413-09962d9a875c', 'TopG', 'Хлопок', '140863/GR', 'Men''s Classic Shirt', 'Classic men''s shirt for a stylish look', 'Cotton'),
    ('ff609921-0b41-4b4f-af62-d107366aed75', 12400, 'Рубашка Oversize мужская', 'Легкая мужская oversize рубашка из хлопка', 0, '2023-12-07', true, '93c503da-3a98-4d52-a413-09962d9a875c', 'TopG', 'Хлопок', '140864/BE', 'Men''s Oversize Shirt', 'Lightweight men''s oversize cotton shirt', 'Cotton');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('2d252384-3e1a-42f5-96bf-17581883c572', '#fff', 'Белый', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('d63d6cd5-3285-4fe2-8145-4147f52ff34e', '#000', 'Чёрный', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('187bd885-e696-4c92-8b6f-90ecd761f185', '#40E0D0', 'Бирюзовый', '5a1d2c34-9a1b-4e1d-8a6c-7b8e234f12bc'),
    ('f872e98c-bbb0-4cd2-853d-726782c16406', '#2c5bbf', 'Синий', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('5660fa7f-0591-466d-af16-ba17f64f2e1c', '#F5F5DC', 'Бежевый', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('319099ed-13eb-4f00-9bbe-810c7d698e80', '#64ba18', 'Зелёный', 'a806f63f-205a-49f0-b6f0-c00b8b53da32'),
    ('a074a7b5-a7ee-4354-8bcc-d2e04d6ff951', '#fff', 'Белый', '66904811-b707-4031-918c-4978805fb8ae'),
    ('ca552ad7-943c-42be-94f0-5ff390db5053', '#000', 'Чёрный', 'ff609921-0b41-4b4f-af62-d107366aed75'),
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