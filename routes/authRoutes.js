const passport = require("passport");
const { User } = require("../services/db");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/auth/logout", async (req, res) => {
    req.session.destroy(function(err) {
      res.clearCookie("connect.sid");
      res.redirect("/");
    });
  });

  app.get("/api/current_user", async (req, res) => {
    const { dataValues } = await User.findByPk(req.user.googleID);
    res.send(dataValues);
  });
};
