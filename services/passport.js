const passport = require('passport')
const GoogleOAuth = require('passport-google-oauth20')
const keys = require('../config/keys')


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((userId, done) => {

})
// pass strategy configuration to passport, tells passport to
// authenticate using google OAuth strategy
 passport.use(new GoogleOAuth({
     clientID: keys.googleClientID,
     clientSecret: keys.googleClientSecret,
     callbackURL: '/auth/google/callback'
     }, (accessToken, refreshToken, profile, done) => {
             console.log('access token ', accessToken)
             console.log('refresh token ', refreshToken)
             console.log('profile: ', profile)
         }
     )
 )