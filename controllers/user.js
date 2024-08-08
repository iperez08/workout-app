import express from "express"
const router = express.Router()
import User from "../models/user.js"


router.get(`/users/home`, async (req, res) => {
    const userID = req.session._id
    req.redirect(`${userID}/home`)
})

router.get(`/:userID/home`, async (req, res) => {
    const userID = req.params.userID
    const user = await User.findOne(userID)
    res.render("user/home.ejs", {
        user
    })
})

export default router