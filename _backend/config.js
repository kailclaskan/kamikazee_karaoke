"use strict";

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

function getDatabaseURI(){
    return(process.env.NODE_ENV === "test")
        ? "kk_test"
        : process.env.DATABASE_URL || "kk";
}
const YT_API_KEY = "AIzaSyDL7bMV5fSCWzoh-EinFzZPq0K_bRNRxyk";
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1:12;

console.log("-----------------------------------".blue);
console.log("Kamikazee Karaoke Config:".green);
console.log("Secret Key:".yellow, SECRET_KEY);
console.log("Port:".yellow, PORT.toString());
console.log("BCRYPT Work Factor:".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseURI());
console.log("-----------------------------------".blue);

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR,
    YT_API_KEY,
    getDatabaseURI,
};