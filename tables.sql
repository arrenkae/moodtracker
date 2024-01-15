-- CREATE TABLE moodtracker_users (
-- id SERIAL PRIMARY KEY,
-- username VARCHAR(50) UNIQUE NOT NULL
-- );

-- CREATE TABLE moodtracker_entries (
--  id SERIAL PRIMARY KEY,
-- 	user_id INTEGER,
--  	mood_level SMALLINT,
-- 	stress_level SMALLINT,
-- 	last_update TIMESTAMP DEFAULT NOW(),
-- 	FOREIGN KEY (user_id) REFERENCES moodtracker_users(id)
-- );

-- CREATE TABLE moodtracker_activities (
--  id SERIAL PRIMARY KEY,
--  name VARCHAR(100) UNIQUE NOT NULL,
-- 	emoji VARCHAR(50),
-- 	positive BOOLEAN NOT NULL
-- );


-- CREATE TABLEmoodtracker_entries_activities (
-- id SERIAL PRIMARY KEY,
-- entry_id INTEGER,
-- activity_id INTEGER,
-- last_update TIMESTAMP DEFAULT NOW(),
-- FOREIGN KEY (entry_id) REFERENCES moodtracker_entries(id),
-- FOREIGN KEY (activity_id) REFERENCES moodtracker_activities(id)
-- );

-- INSERT INTO moodtracker_activities (name, emoji, positive)
-- VALUES
-- 	('Good sleep', '💤', TRUE),
-- 	('Music', '🎶', TRUE),
-- 	('Going outside', '🌞', TRUE),
-- 	('Walking', '🚶‍♀️', TRUE),
-- 	('Bath', '🛁', TRUE),
-- 	('Hugs', '🫂', TRUE),
-- 	('Meditation', '🧘', TRUE),
-- 	('Exercise', '🏋️‍', TRUE),
-- 	('Cleaning', '🧼', TRUE),
-- 	('Hobbies', '🎨', TRUE),
-- 	('Alcohol', '🍺', FALSE),
-- 	('Junk food', '🍔', FALSE),
-- 	('Bad news', '⚠️', FALSE),
-- 	('Fighting', '💢', FALSE),
-- 	('Bad sleep', '👁', FALSE),
-- 	('Overworking', '📈', FALSE);

-- INSERT INTO moodtracker_users (username)
-- VALUES ('Nadia')