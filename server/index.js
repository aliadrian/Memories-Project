import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "40mb", extended: true }));
app.use(express.urlencoded({ limit: "40mb", extended: true }));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello to memories API')
});

// https://www.mongodb.com/cloud/atlas
// daniel andersson account ;)

const CONNECTION_URL = 'mongodb+srv://admin:mt72yLyXwZbglS3j@memories-project.c45kv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);