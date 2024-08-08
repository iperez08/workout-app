import express from "express"
const router = express.Router()

router.get("/:userID/show", async (res, req) => {
    res.render("user/show.ejs")
})

export default router