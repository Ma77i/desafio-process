const path = require('path')

// import router
const { Router } = require('express')
const router = new Router()

// middleware
const auth = require('../middlewares/auth')

// controllers
//const { loginUser, registerUser } = require('../controllers/user.controller')

// passport
const passport = require('passport')


// GET Main
router.get('/', auth, (req, res) => {
    const { firstName } = req.user
    res.render('main', { firstName })
})

// GET Login
router.get('/login', (req, res) => res.render('login'))


// POST Login
//router.post('/login', loginUser)
router.post("/login", passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))

// GET Register
router.get('/register', (req, res) => res.render('register'))

// POST Register
router.post("/register",
    passport.authenticate("register", {
        successRedirect: "/",
        failureRedirect: "/register",
        failureFlash: true
    })
)


router.get('/logout', auth, (req, res) => {
    const { firstName } = req.user
    console.log(firstName);

    req.logOut()
    res.render("logout", { firstName })
    // const { name } = req.session.user
    // req.session.destroy((err) => {
    //     if (err) {
    //         console.log(err);
    //         res.send(err)
    //         return
    //     }
    // })
    // res.render('logout', { name })
})



module.exports = router