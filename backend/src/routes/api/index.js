import express from "express";

const router = express.Router();

import speciesRoutes from "./species.js";
import postRoutes from "./post.js";
import usersRotes from "./users.js";
import authRotes from "./auth.js";

router.use("/species", speciesRoutes);
router.use("/post", postRoutes);
router.use("/user", usersRotes);
router.use("/auth", authRotes);



export default router;
