CREATE TABLE customers(user_id SERIAL PRIMARY KEY,
                                              email VARCHAR(500) UNIQUE NOT NULL,
                                                                        password VARCHAR(500) NOT NULL,
                                                                                              isAdmin BOOLEAN);


INSERT INTO customers(email,
                      password,
                      isAdmin)
VALUES('charles.e.campbell1989@gmail.com',
       'rufus0606',
       true)
CREATE TABLE inventory(item_id SERIAL PRIMARY KEY,
                                              name VARCHAR(500) price FLOAT NOT NULL,
                                                                            brand VARCHAR(64) NOT NULL,
                                                                                              category VARCHAR(64) NOT NULL,
                                                                                                                   image TEXT NOT NULL,
                                                                                                                              description TEXT NOT NULL,
                                                                                                                                               type VARCHAR(64));


INSERT INTO inventory(name, price, brand, category, image, description, type)
VALUES('Nike Mens Court Dry Tennis Polo',
       45.00,
       'Nike',
       'Top',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/men1.jpg',
       'Stay cool, comfortable and concentrated on the match in the Nike® Men’s Court Dry Tennis Polo, which boasts Nike® Dry fabric with moisture-wicking Dri-FIT® technology and a classic on-court look.',
       'Men');


VALUES('Under Armour Mens Rival Fleece Hoodie',
       45.00,
       'Under Armour',
       'Top',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/men2.jpg',
       'Whether you’re headed to the gym or hanging out with friends, the Under Armour® Men’s Rival Fleece Hoodie is designed to meet the needs of your active lifestyle. Constructed out of incredibly soft, cotton-blend material, this hoodie provides superior comfort and performance. Moisture-wicking technology works to keep you dry, while raglan sleeves and an adjustable hood offer superior coverage and unrestricted mobility. Get more from your workout wardrobe with the UA Rival Fleece Hoodie.',
       'Men');


VALUES('Adidas Mens Tiro 19 Training Pants',
       75.00,
       'adidas',
       'Bottom',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/men3.jpg',
       'Stay cool under pressure in the adidas® Men’s Tiro 19 Training Pants. Designed with smooth, lightweight climacool® material, these bottoms deliver cool coverage and durable performance. Tapered legs, stretch construction, and convenient ankle zips provide full unrestricted mobility and comfort. Deliver your best performance, on and off the field, in the adidas® Tiro 19 Pants.',
       'Men');


VALUES('Adidas Mens New York Long Sleeve Tennis T-Shirt',
       65.00,
       'adidas',
       'Top',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/men4.jpg',
       'Slam the ball in comfort and style in the adidas® Men’s New York Long Sleeve Tennis T-Shirt. Its long sleeve and crew neck will create a comfortable feel and protect you from the elements.',
       'Men');


VALUES('Fila Mens Heritage Tennis Henley T-Shirt',
       37.97,
       'Fila',
       'Top',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/men6.jpg',
       'Tear up the court in this Fila® Men’s Heritage Tennis Henley T-Shirt. This Henley is made with moisture wicking material and UPF 50 protection to keep you cool and comfortable, even in the most intense match.',
       'Men');


VALUES('Mike Mens Court 9" Tennis Shorts',
       45.00,
       'Nike',
       'Bottom',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/men5.jpg',
       'Constructed of Nike® Dry fabric with Dri-FIT® technology, the Nike® Court Dry Shorts offer unbeatable comfort to keep you cool, dry and concentrated during even the most intense matches.',
       'Men');


VALUES('Asics Court FF 2 Novak Mens Tennis Shoe',
       160.00,
       'Asics',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/mens1.jpg',
       'Get ready for the new Asics tennis shoe that offers the best in speed and stability in a great looking shoe designed in close collaboration with Novak Djokovic! The Asics Court FF2 mens tennis shoe includes technological advancements so you move easily with comfort and stability. Endorsed on the court at the US Open in NYC. This tennis shoe includes a mesh and polyurethane upper for added lightweight stability and durability. A court-specific FLYTEFOAM midsole provides lightweight and continuous cushioning, TWISTRUSS system increases flexibility, a wider heel part of the outsole increases stability.',
       'Men');


VALUES('adidas Sole Court Boost Mens Tennis Shoe',
       160.00,
       'addias',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/mens2.jpg',
       'An update to the adidas Barricade Boost tennis shoes, the new adidas Sole Court Boost Mens tennis shoes are comfortable, lightweight, stable, and durable making them ideal for tennis players of any level. This mens tennis shoe features a new chassis construction with TPU material that wraps the foot for stability, Boost technology for maximum cushion and energy, and a durable Adiwear 6 outsole for maximum durability.',
       'Men');


VALUES('Nike Air Zoom Vapor X Knit Mens Tennis Shoe',
       170.00,
       'Nike',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/mens3.jpg',
       'Take your game and performance to the next level wearing these Nike tennis shoes! The Nike Zoom Vapor 10 Knit mens tennis shoe, has a lightweight, breathable design with a circular knit upper, a Dynamic fit system that wraps the mid foot and arch for a glove-like fit. The Zoom Vapor X shoe has a Zoom Air unit in the heel and a Phylon midsole for low to the court, responsive cushioning. Adaptive Fit construction wraps from the laces to the bottom of the arch for support and comfort. Mesh throughout keeps the shoe lightweight and keeps your feet cool and comfortable, and XDR compound on the heel and forefoot in a multisurface, herringbone pattern provides long lasting durability and traction with added traction on the perimeter of the outsole for improved stability.',
       'Men');


VALUES('Nike Air Zoom Vapor X Mens Tennis Shoe',
       120.00,
       'Nike',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/mens4.jpg',
       'The Nike Zoom Vapor 10 mens tennis shoe, in new colors for the season, now has even more stability and an updated Dynamic fit system that wraps the mid foot and arch for a glove-like fit. The Zoom Vapor X shoe has a Zoom Air unit in the heel and a Phylon midsole for low to the court, responsive cushioning. Adaptive Fit construction wraps from the laces to the bottom of the arch for support and comfort. Mesh throughout keeps the shoe lightweight and keeps your feet cool and comfortable, and XDR compound on the heel and forefoot in a multisurface, herringbone pattern provides long lasting durability and traction with added traction on the perimeter of the outsole for improved stability.',
       'Men');


VALUES('Diadora Speed Blushield Fly 2 AG Mens Tennis Shoe',
       120.00,
       'Diadora',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/mens5.jpg',
       'The mens Diadora Speed Blushield Fly 2 tennis shoe utilizes Blushield Fly technology along with Suprelltech, Air mesh, and Diashield for lightweight support and comfort in a durable tennis shoe. This shoe offers top performance and has a removable Ortholite insole, a light EVA midsole for support, and Duratech 5000 wearproof rubber outsole for stability, cushioning, and durability. This shoe the comfort and stability you need to perform your best on all court surfaces.',
       'Men');


VALUES('Wilson Rush Pro 2.5 Mens Tennis Shoe',
       90.00,
       'Wilson',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/mens6.jpg',
       'In new colors for 2018, Wilson Mens Rush Pro 2.5 tennis shoes will help you take your game to the next level. This tennis shoe is a lightweight shoe with explosive power and unmatched stability with Pro Torque technology, along with Dynamic fit to give a cushioned court feel and enhanced responsiveness. The R-DST+ offers the best combination of cushioning and rebound for a more dynamic performance on the court while the Sensifeel insole upgrades comfort and maintains superior support.',
       'Men');


VALUES('Babolat Drive G Tennis Racquet',
       150.00,
       'Babolat',
       'Gear',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/gear1.webp',
       'Best for intermediate and competitive players, the Babolat® Drive G Tennis Racquet offers power, comfort, and maneuverability.',
       'Raquet');


VALUES('Prince 100 Warrior Tennis Racquet',
       130.00,
       'Prince',
       'Gear',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/gear2.webp',
       'Speed and spin-friendly precision go hand and hand with the Prince® Warrior 100 Tennis Racquet. The Warrior is perfect for beginner players who want easy access to pace and spin with a lighter racquet option.',
       'Raquet');


VALUES('Wilson XP 1 Tennis Racquet',
       259.00,
       'Wilson',
       'Gear',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/gear3.webp',
       'You will not have played with true power until youve played with the Wilson XP 1 Tennis Racquet. Being the most powerful racquet on the market, it is fine-tuned and its improved layup generates more power than ever before. A new string pattern will allow you to use a softer multi-filament string for a more comfortable, more powerful strike.',
       'Raquet');


VALUES('Penn Championship Extra Duty Tennis Balls - 12 Can Pack',
       25.00,
       'Penn',
       'Gear',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/gear4.webp',
       'The Penn® Championship Extra Duty Tennis Balls are the official ball of USTA® League Tennis. For use on hard tennis courts, the regular duty balls are built with natural rubber for reliable feel and reduced shock. The interlocked wool fiber composition increases durability for longer wear, while deep-elastic seams offer reduced cracking. This 12 can multi-pack provides the gear you need to be a champion from one season to the next.',
       'Ball');


VALUES('GAMMA Ballhopper Pro Plus 110',
       35.00,
       'GAMMA',
       'Gear',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/gear5.webp',
       'The GAMMA® Ballhopper Pro Plus 110 features a strengthened weld design, Diamond Clad weather-resistant coating, and unique wear bumpers for heavy duty construction that will last through the years. Carry handles provide easy transport and flip over to stand the basket at fingertip height to prevent extra straining to reach the tennis balls during practice. Fits up to 110 standard tennis balls.',
       'MISC');


VALUES('Babolat Pure Strike Tennis Backpack',
       80.00,
       'Babolat',
       'Gear',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/gear6.webp',
       'Transport all your essentials in the Babolat® Pure Strike Tennis Backpack. With plenty of pockets and internal space, the bag conveniently stores all of your items and easily converts to hold your favorite racquet.',
       'MISC');


VALUES('Nike Air Zoom Vapor X Knit Womens Tennis Shoe',
       170.00,
       'Nike',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/ws1.jpg',
       'Take your game and performance to the next level wearing these Nike tennis shoes! The Nike Zoom Vapor 10 Knit womens tennis shoe, has a lightweight, breathable design with a circular knit upper, a Dynamic fit system that wraps the mid foot and arch for a glove-like fit. The Zoom Vapor X shoe has a Zoom Air unit in the heel and a Phylon midsole for low to the court, responsive cushioning. Adaptive Fit construction wraps from the laces to the bottom of the arch for support and comfort. Mesh throughout keeps the shoe lightweight and keeps your feet cool and comfortable, and XDR compound on the heel and forefoot in a multisurface, herringbone pattern provides long-lasting durability and traction with added traction on the perimeter of the outsole for improved stability.',
       'Women');


VALUES('Nike Air Zoom Vapor X Womens Tennis Shoe',
       140.00,
       'Nike',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/ws2.jpg',
       'The Nike Zoom Vapor X womens tennis shoe, in new colors for the season, now has even more stability and an updated Dynamic fit system that wraps the mid foot and arch for a glove-like fit. The womens Zoom Vapor X shoe has a Zoom Air unit in the heel and a Phylon midsole for low to the court, responsive cushioning. Adaptive Fit construction wraps from the laces to the bottom of the arch for support and comfort. Mesh throughout keeps the shoe lightweight and keeps your feet cool and comfortable, and XDR compound on the heel and forefoot in a multisurface, herringbone pattern provides long-lasting durability and traction now with added traction on the perimeter of the outsole for improved stability.',
       'Women');


VALUES('K Swiss Hypercourt Express Womens Tennis Shoe',
       105.00,
       'K Swiss',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/ws3.jpg',
       'The Hypercourt Express womens tennis shoe, now in new colors for 2019, has a superior on-court feel along with running inspired lightness and breathability. This shoe is designed to keep you close to the court, and includes lateral support and great traction for any level of play.',
       'Women');


VALUES('Mizuno Wave Exceed Tour 3 Womens Tennis Shoe',
       110.00,
       'Mizuno',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/ws4.jpg',
       'The Mizuno Wave Exceed Tour 3 womens tennis shoe is engineered for power, speed, and agility, and features Mizuno Wave technology for dynamic cushioning and excellent stability. D-Flex Groove and SR-Touch technologies promote agile movements and high-velocity acceleration giving this shoe great balance between speed, stability and comfort.',
       'Women');


VALUES('Asics Gel Resolution 7 Womens Tennis Shoe',
       110.00,
       'Asics',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/ws5.jpg',
       'Asics Gel Resolution 7 Womens Tennis Shoe, in new colors for 2019, is one of the top stability shoes from Asics. This shoe continues to offer maximum midfoot support and stability with an external heel counter. The womens Gel Resolution 7 features redesigned Flexion Fit construction through the midfoot and has added a lateral support brace for maximum stability, and continues to offer ultimate comfort for the courts.',
       'Women');


VALUES('Asics Solution Speed FF Womens Tennis Shoe',
       90.00,
       'Asics',
       'Shoe',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/ws6.jpg',
       'The Asics Solution Speed FF womens tennis shoes, now in new colors for 2019, are lightweight and supportive with a form-fitting Flexion fit upper, Gel cushioning systems in the rearfoot and forefoot, and a FlyteFoam midsole for excellent cushioning. A high abrasion rubber outsole offers exceptional durability. This shoe is the perfect blend of moderate support and speedy ride with comfort and support for even the most aggressive, agile players.',
       'Women');


VALUES('Nike Womens NikeCourt Dri-FIT Tennis T-Shirt',
       50.00,
       'Nike',
       'Top',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/women1.jpg',
       'Serve your opponent tough in the Nike Women’s NikeCourt Dri-FIT Tennis T-Shirt, which boasts Nike Dry fabric with moisture-wicking Dri-FIT® technology and a classic on-court look.',
       'Women');


VALUES('Nike Womens NikeCourt Dri-FIT Tennis Skirt',
       55.00,
       'Nike',
       'Top',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/women2.jpg',
       'Stack up the winners in the Nike Women’s NikeCourt Dri-FIT Tennis Skirt, which boasts Nike Dry fabric with moisture-wicking Dri-FIT® technology and a classic on-court look.',
       'Women');


VALUES('adidas Womens Tiro 19 Tape Pants',
       25.00,
       'adidas',
       'Bottom',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/women3.webp',
       'Keep cool no mattter how tough your workout is with the adidas® Women’s Tiro 19 Tape Pants. climacool® technology battles the heat with lighweight, breathable fabric.',
       'Women');


VALUES('adidas Womens Tiro Tape Crewneck Sweatshirt',
       30.00,
       'adidas',
       'Top',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/women4.webp',
       'Whether you’re on your way to the gym or hanging out at home, stay comfortable in the adidas® Women’s Tiro Tape Crewneck Sweatshirt. A crew neckline offers a classic silhouette, while logo tape on the sleeves offers a signature look.',
       'Women');


VALUES('Lucky In Love Womens Lit Pleated Scallop Tennis Skort',
       48.00,
       'Lucky In Love',
       'Bottom',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/women5.jpg',
       'Turn heads on the court in the stunning yet performance-focused Lucky In Love® Women’s Lit Pleated Scallop Tennis Skort. This bottom is made with super-smooth moisture-wicking fabric and UPF 30+ so you stay dry and covered from match to match.',
       'Women');


VALUES('Under Armour Womens TechTwist Print Zip Long Sleeve Shirt',
       45.00,
       'Under Armour',
       'Top',
       'https://tennisfileholder.s3.us-east-2.amazonaws.com/women6.jpg',
       'Designed for performance and comfort, the Under Armour® Women’s Tech Twist Print ½ Zip Long Sleeve Shirt is your next go-to favorite. Incredibly lightweight UA Tech™ offers a soft, athletic feel, while the ½ zip front closure makes layering a breeze. Moisture-wicking properties work to keep you dry and light, while anti-odor technology works to eliminate odor build-up. Train without distraction in the UA Tech™ Twist Print ½ Zip Long Sleeve Shirt.',
       'Women');


CREATE TABLE cart(user_id INTEGER REFERENCES customer(user_id),
                                             item_id INTEGER REFERENCES inventory(item_id))
CREATE TABLE favorites(user_id INTEGER, item_id INTEGER)