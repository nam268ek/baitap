const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data.json");
const db = low(adapter);
db.defaults({ products: [] }).write();

module.exports = bsd