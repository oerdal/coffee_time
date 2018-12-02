const passport = require('passport')
const GoogleOAuth = require('passport-google-oauth20')
const keys = require('../config/keys')
const con = require('./connection')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((userId, done) => {
    var query = "SELECT * FROM USERS WHERE WHERE "
    con.query(query )
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
             var query = "SELECT * FROM users WHERE users.google_id = '{0}';".format(profile.id)
             con.query(query, (err, user) => {
                if(err){
                    
                }
             })
         }
     )
 )