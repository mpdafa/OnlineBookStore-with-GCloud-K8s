CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL
);

INSERT INTO books (title, author, description, price)
VALUES
  ('Adventure of Corrupt Conquerer', 'Dafa', 'Description of Book 1', 19.99),
  ('Book Title 2', 'Micahel', 'Description of Book 2', 29.99),
  ('Book Title 3', 'Jack', 'Description of Book 3', 14.99),
  ('Book Title 4', 'Brook', 'Description of Book 3', 4.99);

INSERT INTO books (title, author, description, price)
VALUES
  ('Secrets of the Azure Sky', 'Emily Smith', 'A fantasy adventure set in a world above the clouds.', 24.99),
  ('Echoes from the Past', 'Daniel Johnson', 'A gripping mystery that unfolds through generations.', 19.99),
  ('The Enchanted Forest', 'Alicia Williams', "A children's book full of magical creatures and wonders.", 12.99),
  ('Starship Odyssey', 'Jason Anderson', 'A space opera that takes readers on a journey to distant galaxies.', 34.99),
  ('Whispers in the Shadows', 'Sophia Roberts', 'A haunting thriller that delves into the depths of the human psyche.', 28.99),
  ('The Alchemists Legacy', 'Lucas Martinez', 'An alchemical adventure filled with quests and discoveries.', 22.99),
  ('Sunset on Ephemeral Sands', 'Isabella Brown', 'A poignant romance set against the backdrop of a desert oasis.', 17.99),
  ('The Chronicles of Evergreen', 'Olivia Taylor', 'A series of interconnected tales set in the magical land of Evergreen.', 29.99),
  ('Sword of Destiny', 'Alexander Knight', 'A high-fantasy epic featuring knights, magic, and destiny.', 26.99),
  ('City of Clockwork Secrets', 'Eleanor Johnson', 'An urban fantasy where clockwork technology meets ancient magic.', 21.99),
  ('Culinary Adventures', 'Maria Rodriguez', 'A cookbook that combines recipes with stories from around the world.', 14.99),
  ('The Art of Mindfulness', 'Michael Brown', 'A guide to mindfulness and self-discovery through artistic expression.', 16.99),
  ('Gardening Through the Seasons', 'Emma Davis', 'A comprehensive guide to creating vibrant gardens all year round.', 18.99),
  ('The Science of Curiosity', 'David Clark', 'An exploration of how curiosity drives scientific discovery.', 23.99);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password) VALUES
  ('dafa', MD5('hey123'));