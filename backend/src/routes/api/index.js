import express from "express";

const router = express.Router();

import speciesRoutes from "./species.js";

router.use("/species", speciesRoutes);


export default router;
