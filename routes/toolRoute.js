const express = require("express");
const {
  createTool,
  updateTool,
  deleteTool,
  getTool,
  getallTool,
} = require("../controller/toolCtrl");

const router = express.Router();

router.post("/", createTool);
router.put("/:id", updateTool);
router.delete("/:id", deleteTool);
router.get("/:id", getTool);
router.get("/", getallTool);

module.exports = router;
