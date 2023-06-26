const BaseController = require("./baseController");
const InsuranceModel = require("../models/insuranceModel");
class Insurance extends BaseController {
  constructor() {
    super(Insurance, InsuranceModel);
  }
}
module.exports = new Insurance();
