const { User, Patient } = require("../services/db");

module.exports = (app) => {
  app.get("/api/current_user", async (req, res) => {
    const { dataValues } = await User.findByPk(req.user.googleID);
    res.send(dataValues);
  });

  app.get("/api/patient", async (req, res) => {
    const patients = await Patient.findAll();
    res.json(patients);
  });
};
