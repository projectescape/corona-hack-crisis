const Sequelize = require("sequelize");
const { DATABASE_URL } = require("../config/keys");

const sequelize = new Sequelize(DATABASE_URL, {
  define: {
    timestamps: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  googleID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  photo: {
    type: Sequelize.TEXT,
  },
});

const Patient = sequelize.define("patient", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pincode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

User.belongsToMany(Patient, { through: "userpatient" });
Patient.belongsToMany(User, { through: "userpatient" });

const Advisory = sequelize.define("advisory", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
  },
});

const Eligibility = sequelize.define("eligibility", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sex: {
    // True for male, false female
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pincode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // Symptoms
  fever: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  breath: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  dryCough: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  wetCough: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  nose: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  temp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // contact and abroad
  contactWithPatient: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  abroad: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

User.hasMany(Eligibility);

const Follow = sequelize.define("follow", {
  fever: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  breath: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  dryCough: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  wetCough: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  nose: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  temp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  contactWithPatient: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});
Follow.belongsTo(User);
// sequelize.sync();

module.exports = { User, Patient, Advisory, Eligibility, Follow };
