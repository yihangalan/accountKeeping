import express from "express";

const router = express.Router();

import postRoutes from "./post.js";
import usersRotes from "./users.js";
import authRotes from "./auth.js";


router.use("/post", postRoutes);
router.use("/user", usersRotes);
router.use("/auth", authRotes);



export default router;
