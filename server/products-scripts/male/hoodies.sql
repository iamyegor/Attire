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
    ('7f2d8d1c-9b4b-4b83-9f91-cb4d12345678', 15000, 'Толстовка мужская', 'Удобная мужская толстовка из хлопка', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'CasualStyle', 'Хлопок', '150001/BL', 'Men''s Hoodie', 'Comfortable men''s hoodie made of cotton', 'Cotton'),
    ('1d2e5f8b-4c3a-47ab-937d-cf1234567890', 17000, 'Худи мужское утепленное', 'Теплое мужское худи для холодной погоды', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'WarmWear', 'Флис', '150002/GR', 'Insulated Men''s Hoodie', 'Warm men''s hoodie for cold weather', 'Fleece'),
    ('8a9d6b7f-3b7d-40a1-a289-bc4d12345678', 14000, 'Худи мужское с длинным рукавом', 'Мужское худи с длинным рукавом и капюшоном', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'UrbanLife', 'Хлопок', '150003/RD', 'Men''s Long Sleeve Hoodie', 'Men''s hoodie with long sleeves and hood', 'Cotton'),
    ('6b3c7d9f-5d9c-4123-89ad-ec3b4d123456', 16000, 'Худи мужское карго', 'Практичное мужское худи с карманами карго', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'CargoFit', 'Хлопок', '150004/OL', 'Men''s Cargo Hoodie', 'Practical men''s hoodie with cargo pockets', 'Cotton'),
    ('9c7d8e2f-1e2a-4a4b-b93a-db4c12345678', 15500, 'Толстовка Welcome мужская', 'Мужская толстовка с принтом "Welcome"', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'ModernText', 'Хлопок', '150005/WH', 'Men''s Welcome Hoodie', 'Men''s hoodie with "Welcome" print', 'Cotton'),
    ('3f5e7c8a-2b1a-4b2f-9d1a-db3b4d123456', 14500, 'Толстовка Hello World мужская', 'Мужская толстовка с надписью "Hello World"', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'CodeWear', 'Хлопок', '150006/BL', 'Men''s Hello World Hoodie', 'Men''s hoodie with "Hello World" inscription', 'Cotton'),
    ('7b8c9d4f-6a7b-4c1f-89bd-ec2b4d123456', 14000, 'Толстовка мужская с надписями', 'Мужская толстовка с разнообразными надписями', 0, '2024-08-01', true, '9257f496-fd5b-411a-9031-9a3d6c45cca8', 'TextStyle', 'Хлопок', '150007/GY', 'Men''s Hoodie with Prints', 'Men''s hoodie with various prints', 'Cotton');

insert into product_colors (id, hex, name, product_id)
VALUES
    ('4c2d5f6e-1234-4f8d-b93c-ec2d4d123456', '#2c5bbf', 'Синий', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678'),
    ('5d3e6f7f-2345-4f9e-c84d-db3c4d123456', '#F5F5DC', 'Бежевый', '7f2d8d1c-9b4b-4b83-9f91-cb4d12345678'),
    ('6e8f12a1-d66b-47d5-b1ca-f600ab8646cf', '#64ba18', 'Зеленый', '1d2e5f8b-4c3a-47ab-937d-cf1234567890'),
    ('e39bb549-f2b7-425d-bfcf-fa2844e60fb4', '#40E0D0', 'Бирюзовый', '8a9d6b7f-3b7d-40a1-a289-bc4d12345678'),
    ('7f2d8d1c-9b4b-4b83-9f91-cb4d12345678', '#fff', 'Белый', '6b3c7d9f-5d9c-4123-89ad-ec3b4d123456'),
    ('e05588af-7094-4548-a0c0-3397d9c4dd23', '#000', 'Черный', '9c7d8e2f-1e2a-4a4b-b93a-db4c12345678'),
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
