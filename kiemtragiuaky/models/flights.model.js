const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("flights.json");
const db = low(adapter);

db.defaults({ flights: [] }).write();

module.exports = db;