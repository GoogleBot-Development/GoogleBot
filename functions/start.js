// Initialize the User


module.exports = (user) => {
    new require('../models/user.js')({
      id: user.id,
      username: `${user.tag}`,
      money: {wallet: 50, bank: 0},
      times: {beg: null, daily: null, fishing: null, wheat: null, weekly: null, work: null},
      fish: 5,
      wheat: 20
    }).save()
    console.log(`A new profile was just created for ${user.username}#${user.discriminator}!`)
    return {id: user.id, username: `${user.tag}`, money: {wallet: 0, bank: 0}, times: {beg: null, daily: null, fishing: null, wheat: null, weekly: null, work: null}, fish: 5, wheat: 20}
  }
