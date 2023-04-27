const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
  setUser,
  getOneOrder,
} = require("../controller/userCtrl");

const { isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", updatePassword);
router.put("/update-order/:id", updateOrderStatus);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", userCart);
router.post("/cart/applycoupon", applyCoupon);
router.post("/cart/cash-order", createOrder);
router.get("/orders", getAllOrders); //end authmiddleware tgd is admin bichne yvaanda
router.get("/orders/:id", getOneOrder); //end authmiddleware tgd is admin bichne yvaanda
router.get("/wishlist", getWishlist);
router.get("/cart", getUserCart);
router.delete("/empty-cart", emptyCart);
router.get("/all-users", getallUser);
router.get("/set-user", setUser);
router.get("/get-orders", getOrders);
router.get("/:id", getaUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.delete("/:id", deleteaUser);
router.put("/edit-user", updateUser);
router.put("/save-address", saveAddress);
router.put("/block-user/:id", blockUser);
router.put("/unblock-user/:id", unblockUser);

module.exports = router;
