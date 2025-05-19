const { Router } = require("express")
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Index Router Set up")
})

module.exports = indexRouter;