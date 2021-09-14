"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const {BCRYPT_WORK_FACTOR} = require("../config");

class User {
    static async authenticate(username, password){
        const result = await db.query(
            `
                SELECT username,
                       password,
                       first_name AS "firstName",
                       last_name AS "lastName",
                       email_address AS "emailAddress",
                       date_of_birth AS "dateOfBirth",
                       security_question AS "securityQuestion",
                       security_answer AS "securityAnswer",
                       is_admin AS "isAdmin"
                FROM users
                WHERE username = $1
            `, [username],
        );

        const user = result.rows[0];

        if(user){
            const isValid = await bcrypt.compare(password, user.password);
            if(isValid){
                delete user.password;
                return user;
            }
        }
        console.log("Incorrect password");
    }

    static async register({username, password, firstName, lastName, email, dateOfBirth, securityQuestion, securityAnswer, isAdmin}) {
        const duplicateCheck = await db.query(
            `
                SELECT username
                FROM users
                WHERE username = $1
            `, [username],
        );

        if(duplicateCheck.rows[0]){
            console.log("Duplicate user: " + username);
        }
        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        const hashedDob = await bcrypt.hash(dateOfBirth, BCRYPT_WORK_FACTOR);
        const hashedAnswer = await bcrypt.hash(securityAnswer, BCRYPT_WORK_FACTOR);

        const result = await db.query(
            `
                INSERT INTO users
                (
                    username,
                    password,
                    first_name,
                    last_name,
                    email_address,
                    date_of_birth,
                    security_question,
                    security_answer,
                    is_admin
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING username, first_name AS "firstName", last_name AS "last_name", email_address AS "emailAddress", security_question AS "securityQuestion"
            `, [
                username, 
                hashedPassword,
                firstName,
                lastName,
                email,
                hashedDob,
                securityQuestion,
                hashedAnswer,
                isAdmin
            ],
        );

        const user = result.rows[0];

        return user;
    }

    static async like(username, songName, songArtist){
        if(username && songName && songArtist){
            const result = await db.query(
                `
                    INSERT INTO favorites (username, song_name, song_artist)
                    VALUES ($1, $2, $3)
                    RETURNING username, song_name AS "songName", song_artist AS "songArtist"
                `, [username, songName, songArtist]
            );

            return result.rows[0];
        } else {
            console.log("Must have username, song name and song artist.");
        }
    }
    //Add unlike function that removes values from favorites table.
    static async unlike(username, songName, songArtist){
        if(username && songName && songArtist){
            const res = await db.query(
                `
                    DELETE FROM favorites
                    WHERE username=$1 AND song_name=$2 AND song_artist = $3
                    RETURNING song_name AS songName
                `, [username, songName, songArtist]
            )
            if(res.rows[0]){
                return res.rows[0];
            } else {
                let message = "The song, " + songName + " was not liked by " + username + "."
                return message;
            }
        }
    }
    static async get(username){
        const userRes = await db.query(
            `
                SELECT username,
                       first_name AS "firstName",
                       last_name AS "lastName",
                       email_address AS "email_address",
                       is_admin AS "isAdmin"
                FROM users
                WHERE username = $1
            `, [username],
        );

        const user = userRes.rows[0];

        if(!user) console.log("User does not exist.");

        const songs = await db.query(
            `
                SELECT song_name AS "songName", song_artist AS "songArtist"
                FROM favorites
                WHERE username = $1
            `, [username]
        );

        user.songs = songs.rows;

        return user;
    }
}

module.exports = User;