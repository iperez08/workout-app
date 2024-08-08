import express from "express"
const router = express.Router()

router.get("/users/:userID/show", async (res, req) => {
    res.render("user/show.ejs")
})

export default router