const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableSchema = new Schema({
  company_id: {
    type: String,
    required: true,
  },
  table_num: {
    type: Number,
    required: true,
  },
  QR_code: String,
  isActive: Boolean,
  chat: [],
});

const Table = mongoose.model("Table", TableSchema);

module.exports = Table;
