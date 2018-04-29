const bot = require('../../bot.js');
const levels = require('../../levels.js');

module.exports = {
  SetRewardCommand: class extends bot.Command {
    constructor() {
      super({
        name: 'setreward',
        aliases: [],
        category: 'administration',
        priority: 1,
        permLvl: 3
      });
    }
    execute(msg, args) {
      levels.setReward(msg, args);
    }
  },
  UnsetRewardCommand: class extends bot.Command {
    constructor() {
      super({
        name: 'unsetreward',
        aliases: [],
        category: 'administration',
        priority: 0,
        permLvl: 3
      });
    }
    execute(msg, args) {
      levels.setReward(msg, args);
    }
  }
}
