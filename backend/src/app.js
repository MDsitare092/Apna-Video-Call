import express from 'express';
import { createServer } from "node:http";

import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import connectTosocket from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";



const app = express();
const server = createServer(app);
const io =  connectTosocket(server);

const url_mongodb = process.env.MONGO_URL;

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({ limit: "40kb"}));
app.use(express.urlencoded({ limit: "40kb", extended: true}));

app.use("/api/v1/users", userRoutes);



app.get("/home", (req, res)=>{
    return res.json({"hello": 'word'});
});

const start = async ()=>{

    //connect to mongodb
    // const connectionDB = await mongoose.connect("mongodb+srv://sitare092:apnavideocall092@apnavideocall.ckyyyxg.mongodb.net/?retryWrites=true&w=majority&appName=apnavideocall")
     mongoose.connect(url_mongodb);
    console.log(`mongo connected DB host: `);
    server.listen(app.get("port"), ()=>{
        console.log("listen on port 8000");
    });
}  

start();