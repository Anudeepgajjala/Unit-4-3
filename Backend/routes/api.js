var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const insuranceController = require("../controllers/insuranceController");

router.post("/add-insurance", async (req, res) => {
  data = req.body;
  data.insurance_id = uuidv4();
  insuranceController.create(data, (err, insuranceResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: insuranceResponse,
    });
  });
});

router.post("/update-insurance", (req, res) => {
  let data = req.body;
  insuranceController.findOneAndUpdate(
    { insurance_id: req.body.insurance_id },
    data,
    (err, updatedInsurance) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedInsurance,
      });
    }
  );
});

router.get("/find-insurance/:id", (req, res) => {
  insuranceController.find(
    { insurance_id: req.params.id },
    (err, insuranceDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: insuranceDetails,
      });
    }
  );
});

router.delete("/delete-insurance/:id", (req, res) => {
  insuranceController.findOneAndRemove(
    { insurance_id: req.params.id },
    (err, deletedInsurance) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedInsurance,
      });
    }
  );
});

router.get("/find-all-insurances", (req, res) => {
  insuranceController.find({}, (err, allInsuranceDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allInsuranceDetails,
    });
  });
});

module.exports = router;
