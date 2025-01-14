CREATE TABLE IF NOT EXISTS tutorials (
                                         id INT AUTO_INCREMENT PRIMARY KEY,
                                         title VARCHAR(255),
                                         description VARCHAR(255),
                                         is_published BOOLEAN
);

insert into tutorials(title,description,is_published)
values('Spring JPA H2 application','Simple application to overview Spring framework, using H2 dataase and JPA',true);
insert into tutorials(title,description,is_published)
values('Make a french braid hairstyle','Step-by-step tutorial as easy as it''s beautiful',false);
insert into tutorials(title,description,is_published)
values('Create a necklace with macramé','Macramé is amazing to create decoration items or cloth!',false);
insert into tutorials(title,description,is_published)
values('Cat cake','Do you like pastry? Your cat is lucky',false);
insert into tutorials(title,description,is_published)
values('Swiss cocktail','Recipe approved by swiss locals',false);
