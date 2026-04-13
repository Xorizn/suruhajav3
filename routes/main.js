__path = process.cwd();

var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__path + "/views/index.html");
});
router.get("/about", (req, res) => {
  res.sendFile(__path + "/views/about.html");
});
router.get("/detail-layanan", (req, res) => {
  res.sendFile(__path + "/views/detail-layanan.html");
});
router.get("/layanan", (req, res) => {
  res.sendFile(__path + "/views/layanan.html");
});
router.get("/login", (req, res) => {
  res.sendFile(__path + "/views/login.html");
});
router.get("/mitra", (req, res) => {
  res.sendFile(__path + "/views/mitra.html");
});

module.exports = router;
