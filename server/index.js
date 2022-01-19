import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes)
// user name and password would need to be changed and encrypted later

const CONNECT_URL = 'mongodb+srv://admin:admin123@cluster0.pj4dq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
// http://www.mongodb.com/cloud/atlas

mongoose.connect(CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.group(`Server running on port : ${PORT}`)))
.catch((error) => console.log(error));
