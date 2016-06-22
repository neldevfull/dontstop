import express from "express";
import consign from "consign";


let app = express();

// Load Models adn Routes
consign().include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);
