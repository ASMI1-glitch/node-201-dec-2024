const users = require("../users.json"); 

exports.getAllUsers = (req, res) => {
  res.json(users);
};


exports.getUserByUUID = (req, res) => {
  const { uuid } = req.params;
  const user = users.find((user) => user.login.uuid === uuid);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};


exports.searchUsers = (req, res) => {
  const { gender, age } = req.query;

  let filteredUsers = users;

  if (gender) {
    filteredUsers = filteredUsers.filter(
      (user) => user.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  if (age) {
    filteredUsers = filteredUsers.filter((user) => user.age === parseInt(age));
  }

  res.json(filteredUsers);
};
