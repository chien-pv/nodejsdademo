const Product = require("../models/product");
class ProductController {
  static async index(req, res) {
    const q = req.query.q;
    console.log(q);
    let products;
    // if (q) {
    //   products = await Product.find({ name: { $regex: ".*" + q + ".*" } });
    // } else {
    // Tìm các sản phẩm có số lượng từ 2-10
    products = await Product.find({
      $and: [{ quantity: { $gte: 2 } }, { quantity: { $lte: 10 } }],
    });
    // }
    res.render("products/index", { products });
  }
  static async new(req, res) {
    res.render("products/new");
  }

  static async create(req, res) {
    try {
      let { name, description } = req.body;
      const product = await Product.create({ name, description });
      res.redirect("/products");
    } catch (error) {
      res.render("products/new");
    }
  }

  static async delete(req, res) {
    let id = req.params.id;
    const product = await Product.deleteOne({ _id: id });
    console.log(product);
    res.json({ message: "Server Xoá thành công!!!!!!" });
  }
}

module.exports = ProductController;
