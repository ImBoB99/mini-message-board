const { Router } = require("express");
const newRouter = Router();
const db = require("../db/queries")

newRouter.post("/", async (req, res) => {
  const { name, text} = req.body;
  try {
    await db.insertMessage(name, text)
  } catch (error) {
    console.error(error);
  }
  res.redirect("/")
});

module.exports = newRouter;
