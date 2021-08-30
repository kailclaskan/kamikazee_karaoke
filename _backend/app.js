"use strict";

const express = require("express");
const cors = require("cors");

//Need authentication and JWT

//What routes will I have?
const kamikazeeRoutes = require("./routes/kamikazee");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
//Need to use JWT

// app.use("/auth", authRoutes);
// app.use("/users", usersRoutes);
app.use("/kamikazee", kamikazeeRoutes);

//Need to handle errors

app.use((err, req, res, next) =>{
    if(process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;