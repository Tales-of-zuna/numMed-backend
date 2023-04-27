const Tool = require("../models/toolsModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const createTool = asyncHandler(async (req, res) => {
  try {
    const newTool = await Tool.create(req.body);
    res.json(newTool);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteTool = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteTool = await Tool.findOneAndDelete(id);
    res.json(deleteTool);
  } catch (error) {
    throw new Error(error);
  }
});
const updateTool = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateTool = await Tool.findOneAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateTool);
  } catch (error) {
    throw new Error(error);
  }
});
const getTool = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaTool = await Tool.findById(id);
    res.json(getaTool);
  } catch (error) {
    throw new Error(error);
  }
});
const getallTool = asyncHandler(async (req, res) => {
  try {
    const getallTool = await Tool.find();
    res.json(getallTool);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createTool,
  updateTool,
  deleteTool,
  getTool,
  getallTool,
};
