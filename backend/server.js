import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

// import routes
import authRoutes from "./routes/auth.js"
import articleRoutes from "./routes/article.js"

const app = express();
const PORT = 3001;
dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json())

app.use(authRoutes)
app.use(articleRoutes)

app.listen(PORT, () => {
  console.log(`Server is listen on localhost:${PORT}`);
});