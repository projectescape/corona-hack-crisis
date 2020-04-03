const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const { User } = require("./db");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async ({ googleID }, done) => {
  //   const { dataValues } = await User.findByPk(googleID);
  done(null, { googleID });
});

passport.use(
  new GoogleStrategy(
    {
      ...keys.google,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const [user, created] = await User.findOrCreate({
        where: { googleID: profile.id },
        defaults: {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value
        }
      });
      console.log("created : ", created);
      console.log("User : ", user);
      done(null, { googleID: profile.id });
    }
  )
);
