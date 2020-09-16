const express = require("express");
const auth = require("../config/auth");
const db = require("../models");
const { create } = require("../models/Company");

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

router.post("/api/signup", async (req, res) => {
  let company_id;
  const table_count = req.body.table_count;

  try {
    // first create the company
    const createCompany = await db.Company.create({
      restaurant_name: req.body.restaurant_name,
      email: req.body.email,
      password: req.body.password,
    });

    // Reference the company id
    company_id = createCompany._id;

    // Create two empty arrays
    const QR_array = [];
    const table_array = [];

    //  addUser to socket.io using companyID

    // Loop through # of tables to generate QR strings
    // and create table objects http://localhost:3000/welcome/12039485739/1
    for (let i = 1; i <= table_count; i++) {
      let QR_string = `http://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://cobramon.herokuapp.com/welcome/${company_id}/${i}`;
      QR_array.push(QR_string);
      let table_obj = {
        company_id: company_id,
        table_num: i,
        QR_code: QR_string,
        isActive: false,
        chat: [],
      };
      const createTable = await db.Table.create(table_obj);
      table_array.push(createTable);
    }

    // Update the company with QR_codes and tables
    const updateCompany = await db.Company.findByIdAndUpdate(company_id, {
      QR_codes: QR_array,
      tables: table_array,
    });

    // send back the updated company object
    res.json(updateCompany);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
