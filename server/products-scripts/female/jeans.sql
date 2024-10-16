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
    ('e23c5a1b-392f-4f1b-8a65-345f9f45adcd', 3590, 'Джинсы унисекс', 'Универсальные джинсы для любого сезона', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimX', 'Джинс', 'DU001', 'Unisex Jeans', 'Universal jeans for any season', 'Denim'),
    ('7e12d845-ef6a-45b5-9448-6a18b58e5e43', 4990, 'Джинсы', 'Классические джинсы для повседневной носки', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimY', 'Джинс', 'D002', 'Jeans', 'Classic jeans for everyday wear', 'Denim'),
    ('be43531c-f4c4-467d-9a35-652c8f9e6757', 5490, 'Джинсы с отделкой стразами', 'Джинсы с яркой отделкой стразами для стильного образа', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimZ', 'Джинс', 'DS003', 'Rhinestone-embellished Jeans', 'Jeans with bright rhinestone embellishment for a stylish look', 'Denim'),
    ('cf129f8e-46f4-4e6f-bb7e-3c92652867d2', 3990, 'Джинсовая юбка', 'Модная джинсовая юбка для летнего сезона', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimQ', 'Джинс', 'DS004', 'Denim Skirt', 'Fashionable denim skirt for the summer season', 'Denim'),
    ('d127c72e-65b4-4a1a-8a8c-3e68f9f5eeb7', 2790, 'Шорты джинсовые', 'Удобные джинсовые шорты для активного отдыха', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimR', 'Джинс', 'DS005', 'Denim Shorts', 'Comfortable denim shorts for active leisure', 'Denim'),
    ('f5c7ab8f-48c9-4bb8-8a2e-8fa9f3f7d934', 4290, 'Джинсы удлиненные', 'Стильные удлиненные джинсы для современной моды', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimS', 'Джинс', 'DU006', 'Extended Jeans', 'Stylish extended jeans for modern fashion', 'Denim'),
    ('b8f5c4d9-3cf5-4873-ae83-1b8d8a4f7e65', 4790, 'Модные джинсы', 'Современные модные джинсы для креативных образов', 0, '2024-08-24', true, '93c503da-3a98-4d52-a413-18963d9a874c', 'DenimT', 'Джинс', 'MJ007', 'Trendy Jeans', 'Modern trendy jeans for creative looks', 'Denim');

INSERT INTO product_colors (id, hex, name, product_id)
VALUES
    ('81e9c480-123a-46e3-912a-2429c2e2d2d2', '#fff', 'Белый', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('91e9c470-22c2-46f1-857f-3429c2e2d2e2', '#000', 'Черный', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('a1e9c460-32e2-46f2-857f-4429c2e2d2f3', '#2c5bbf', 'Синий', 'e23c5a1b-392f-4f1b-8a65-345f9f45adcd'),
    ('b1e9c450-42f2-46f3-857f-5429c2e2d2d4', '#40E0D0', 'Бирюзовый', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('c1e9c440-52f2-46f4-857f-6429c2e2d2d5', '#F5F5DC', 'Бежевый', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('d1e9c430-62f2-46f5-857f-7429c2e2d2d6', '#64ba18', 'Зеленый', '7e12d845-ef6a-45b5-9448-6a18b58e5e43'),
    ('e1e9c420-72f2-46f6-857f-8429c2e2d2d7', '#fff', 'Белый', 'be43531c-f4c4-467d-9a35-652c8f9e6757'),
    ('f1e9c410-82f2-46f7-857f-9429c2e2d2d8', '#000', 'Черный', 'cf129f8e-46f4-4e6f-bb7e-3c92652867d2'),
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