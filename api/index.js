import express from "express";
const app = express();
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/post.js"
import commmentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"

//middleware
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commmentRoutes);
app.use("/api/likes", likeRoutes);

app.listen(8800, ()=>{
    console.log("API Working");
});  