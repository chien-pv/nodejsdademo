const User = require("../models/user");
class HomeController {
  static index(req, res) {
    // let q = req.query.q;
    // let id = req.params.id;
    let params = req.body;
    // console.log(q);
    // console.log(id);
    console.log(params);

    res.render("index");
  }

  static login(req, res) {
    console.log("login");
    res.render("login");
  }

  static async createlogin(req, res) {
    console.log(req.body);
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      if (password == user.password) {
        req.session.user = user;
        res.redirect("/");
      } else {
        res.render("login");
      }
    } else {
      res.render("login");
    }
  }
}

module.exports = HomeController;
