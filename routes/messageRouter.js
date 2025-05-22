const { Router } = require("express");
const messageRouter = Router();
const db = require("../db/queries")

messageRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await db.getMessageByID(id);
  const message = result[0];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("messageDetail", { message });
});

module.exports = messageRouter;
