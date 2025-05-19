const { Router } = require("express");
const newRouter = Router();
const messages = require("../messages");

newRouter.post("/", (req, res) => {
  const { name, text} = req.body;
  const newId = messages.length;
  messages.push({ id: newId, text: text, user: name, added: new Date()});
  res.redirect("/");
});

module.exports = newRouter;
