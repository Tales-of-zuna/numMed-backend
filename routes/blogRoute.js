const express = require("express");
const { isAdmin } = require("../middlewares/authMiddleware");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
} = require("../controller/blogCtrl");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImages");
const { uploadImages } = require("../controller/blogCtrl");
const router = express.Router();

router.post("/", createBlog);
router.put("/likes", likeBlog);
router.put("/dislikes", dislikeBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);

module.exports = router;
