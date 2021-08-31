CREATE TABLE users(
    username VARCHAR(20) UNIQUE NOT NULL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email_address VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR UNIQUE NOT NULL,
    date_of_birth VARCHAR NOT NULL,
    security_question VARCHAR NOT NULL,
    security_answer VARCHAR NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE favorites(
    username VARCHAR(20) 
        REFERENCES users ON DELETE CASCADE,
    song_id INTEGER NOT NULL,
    PRIMARY KEY (username, song_id)
);