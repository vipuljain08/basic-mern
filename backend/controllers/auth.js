import bcrypt from "bcrypt";
import User from "../models/user.js";

const authController = {
  getSignup(req, res, next) {
    res.send("Sign UP");
  },
  getLogin(req, res, next) {
    res.send("Login");
  },
  postSignup(req, res, next) {
    const { email, password } = req.body;
  //   console.log([email, password]);
    bcrypt
      .hash(password, 10)
      .then((hashPassword) => {
        const user = new User({
          email: email,
          password: hashPassword,
        });
        return user.save();
      })
      .then((result) => {
        console.log("Successfully Signup");
        res.send("Successfully Signup")
        // res.redirect("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postLogin(req, res, next) {
    const { email, password } = req.body;
  //   console.log([email, password]);
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          console.log("Invalid email or password");
          res.send("Invalid email or password")
          // return res.redirect("/login");
        }
        return bcrypt.compare(password, user.password).then((istrue) => {
          if (istrue) {
            console.log("Successfully Login");
            res.send(user)
            // res.redirect("/");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default authController