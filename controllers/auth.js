import express from "express"
const router = express.Router()

import bcrypt from "bcrypt"
import User from "../models/user.js"

router.get("/register", (req, res) => {
    res.render("auth/register.ejs")
})

router.get("/login", (req, res) => {
    res.render("auth/login.ejs")
})

router.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/")
})

router.post("/register", async (req, res) => {
    try {
        const userExists = await User.findOne({
            username: req.body.username
        })
        if (userExists) {
            return res.send("Username already taken")
        }

        if (req.body.password !== req.body.confirmPassword) {
            return res.send("Passwords do not match.")
        }

        const hashPassword = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hashPassword

        const newUser = await User.create(req.body)
        req.session.user = {
            username: newUser.username,
            _id: newUser._id
        }
        res.redirect("/")
    } catch (error) {
        console.error(error)
        res.redirect("/")
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if (!user) {
            return res.send("User does not exist. Check spelling if necessary.")
        }

        const validPassword = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if (!validPassword) {
            return res.send("Incorrect password. Check your password and its spelling.")
        }

        req.session.user = {
            username: user.username,
            _id: user._id
        }

        res.redirect(`/user/${user._id}/dashboard`)

    } catch (error) {
        console.error(error)
        res.redirect("/")
    }
})

export default router