import express from "express"
const router = express.Router()
import User from "../models/user.js"


router.get(`/dashboard`, async (req, res) => {
    const user = await User.findOne(req.body._id)
    res.render("user/dashboard.ejs", {
        user
    })
})

export default router