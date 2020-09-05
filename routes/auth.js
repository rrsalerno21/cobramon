const express = require("express");
const auth = require("../config/auth");
const db = require("../models");

const router = express.Router();

router.post("/api/login", (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then((result) => {
      if (result.success) {
        return res.json(result);
      }
      res.status(400).json(result);
    })
    .catch(() => res.sendStatus(500));
});

router.post("/api/signup", (req, res) => {
  console.log(req.body.table_count);
  // Generate 'table_count' amount of QR code strings and store them in an array
  // Create 'table_count' amount of table schema objects
  db.Company.create({
    restaurant_name: req.body.restaurant_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
