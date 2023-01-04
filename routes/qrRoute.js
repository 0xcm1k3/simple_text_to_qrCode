const express = require("express");
const { generateQR } = require("../controllers/qrGenerator");

const router = express.Router();

router.route("/generate").get(generateQR);

module.exports = router;
