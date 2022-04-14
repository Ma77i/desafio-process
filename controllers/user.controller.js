const bcrypt = require('bcrypt')


// import models
const User = require("../models/userModel");

/* exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password);
    try {
        if (!await User.exists({ email })) {
            console.log("Incorrect mail")
            return res.render("login", {
                err: "This mail doesn't exists"
            })
        }
        const user = await User.findOne({ email })

        if (password !== user.password) {
            console.log("Credentials are invalid, Password: ", isPasswordValid, "User: ", user);
            return res.render("login", { err: "Contraseña incorrecta" })
        }
        req.session.user = {
            id: user._id,
            name: user.userName,
            email: user.email
        }
        res.redirect("/")
    } catch (error) {
        console.log("CATCH:", error);
        res.status(500).send(error)
    }
}

exports.registerUser = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName, userName, } = req.body
    try {
        if (await User.exists({ email })) {
            console.log("This mail already exists")
            return res.render("login", {
                err: "This mail already exists, login"
            })
        }
        await User.create({ email, password, confirmPassword, firstName, lastName, userName })
        req.session.user = { name: userName }
        res.redirect("/")
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
} */

exports.getAllUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).send(users)
}