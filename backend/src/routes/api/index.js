import express from "express";

const router = express.Router();

import speciesRoutes from "./species.js";
import postRoutes from "./post.js";

router.use("/species", speciesRoutes);
router.use("/post", postRoutes);


export default router;
