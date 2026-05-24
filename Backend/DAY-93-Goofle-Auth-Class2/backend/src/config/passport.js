const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (googleAccessToken, googleRefreshToken, profile, cb) => {
      try {
        console.log("profile-->", profile);

        const googleId = profile.id;
        const name = profile.name?.givenName;
        const email = profile.emails?.[0]?.value;
        const avatar = profile.photos?.[0]?.value;
        const isEmailVerified = profile.emails?.[0]?.verified;

        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({
            googleId,
            name,
            email,
            avatar,
            authProvider: "google",
            isEmailVerified,
          });
        }

        return cb(null, user);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

module.exports = passport;
