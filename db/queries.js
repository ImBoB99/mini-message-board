const pool = require("./pool")

// async functionality here.

async function getAllMessages() {
  const {rows} = await pool.query("SELECT * FROM messages")
  console.log(rows)
  return rows
}

async function insertMessage(name, text) {
  await pool.query("INSERT INTO messages (message, username) VALUES ($1, $2)", [text, name])
}

async function getMessageByID(id) {
  const {rows} = await pool.query("SELECT * FROM messages WHERE messages.id = $1", [id])
  console.log(rows)
  return rows
}

module.exports = {
  insertMessage,
  getAllMessages,
  getMessageByID
}