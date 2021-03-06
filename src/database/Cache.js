const { Collection } = require("discord.js-light");
class Cache {
  constructor() {
    this.users = new Collection();
    this.guilds = new Collection();
  }
  save(schema, id, data) {
    this[schema].set(id, new Collection().set("id", id));
    Object.entries(data).forEach((doc) => {
      this[schema].get(id).set(doc[0], doc[1]);
    });
    return this[schema].get(id);
  }
}

module.exports = Cache;
