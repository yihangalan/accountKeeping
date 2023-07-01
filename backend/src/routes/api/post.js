import express from "express";
import {addPost, deletePost, getPost, getPosts, updatePost, getPostsByMonth} from "../../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/getPostsByMonth", getPostsByMonth);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);



export default router;