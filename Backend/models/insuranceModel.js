var mongoose = require("mongoose");

var insuranceSchema = mongoose.Schema({
  insurance_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },
  insurance_type: {
    type: String,
    required: false,
  },
  open_date: {
    type: String,
    required: false,
  },
  end_date: {
    type: String,
    required: false,
  },
  claims_count: {
    type: Number,
    required: false,
  },
});

const Insurance = mongoose.model("Insurance", insuranceSchema);
module.exports = Insurance;
