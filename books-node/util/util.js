const fs = require("fs");

exports.getData = () => {
  let data;

  try {
    data = JSON.parse(fs.readFileSync("./data/books.json"));
  } catch (e) {
    data = [];
  }

  return data;
};

exports.setData = (data) => {
  fs.writeFileSync("./data/books.json", JSON.stringify(data));
};

exports.getId = (arr, id) => {
  return arr.findIndex((el) => el.id === id);
};

// module.exports = {
//   readJSON,
//   writeJSON,
//   getId,
// };
