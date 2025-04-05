const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/home_controller");
const ProductController = require("../controllers/product_controller");

function checkLogin(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

router.get("/", checkLogin, HomeController.index);
router.get("/resgiter", HomeController.resgiter);
router.post("/resgiter", HomeController.newresgiter);

router.get("/login", HomeController.login);
router.post("/login", HomeController.createlogin);
router.get("/products", ProductController.index);
router.post("/products", ProductController.create);
router.get("/products/new", ProductController.new);
router.delete("/products/delete/:id", ProductController.delete);

module.exports = router;
