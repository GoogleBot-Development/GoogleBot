const mongoose = require('mongoose')

const guildSchema = new mongoose.Schema({
  id: String,
  username: String,
  money: Object,
  times: Object,
  fish: Number,
  wheat: Number
})

module.exports = mongoose.model('Users', guildSchema);
