const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("xe.json");
const db = low(adapter);

db.defaults({ xe: [] }).write();

module.exports = db;