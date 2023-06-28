import express from "express";
import db from "../../db/index.js";

const router = express.Router();

// Gets all species
router.get("/", async (req, res) => {
  db.query('SELECT * FROM user', (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(result);
    }
  })
});

export default router;

