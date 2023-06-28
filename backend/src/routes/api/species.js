import express from "express";

const router = express.Router();

// Gets all species
router.get("/", async (req, res) => {
  return res.json({"message": "Hello aaa World!"});
});

export default router;

