const express = require("express");
const router = express.Router();

const newController = require("../../app/controllers/NewContollers");

router.use("/:slug", newController.show);
router.use("/", newController.index);

module.exports = router;
