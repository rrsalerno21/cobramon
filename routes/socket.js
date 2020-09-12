const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/api/getMessages/:company_id/:table_num", async (req, res) => {
  const company_id = req.params.company_id;
  const table_num = req.params.table_num;

  try {
    const tableMessages = await db.Table.find({
      company_id: company_id,
      table_num: table_num,
    });

    console.log(tableMessages);
    res.json(tableMessages);
  } catch (error) {
    if (error) {
      console.log("Error getting messages");
      res.status(500).send(error);
    }
  }
});

router.post("/api/sendMessage", async (req, res) => {
  const tableId = req.body.table_id;
  try {
    const updatedChat = await db.Table.updateOne(
      { company_id: req.body.company_id, table_num: tableId },
      {
        $push: { chat: req.body.message },
      }
    );

    console.log(updatedChat);
    res.json(updatedChat);
  } catch (error) {
    if (error) {
      console.log(error);
      console.log("still broke");
      res.status(500).send(error);
    }
  }
});

module.exports = router;

// {$push: {'seasons.0.episodes.0.videos.$.reports': data.details}}
