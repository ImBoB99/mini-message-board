const { Router } = require("express")
const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.send("New page router setup")
})

module.exports = newRouter;