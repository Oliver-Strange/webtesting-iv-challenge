const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove
};

async function insert(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => {
      return db("users")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
