const USERS_KEY = "users";
const USER_KEY = "user";

function initUsers() {
  localStorage.clear()
  if(localStorage.getItem(USERS_KEY) !== null)
    return;

  const users = [
    {
      username: "jabbar",
      password: "1234"
    },
    {
      username: "michael",
      password: "123456"
    }
  ];

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getUsers() {
  const data = localStorage.getItem(USERS_KEY);

  return JSON.parse(data);
}

function verifyUser(username, password) {
  const users = getUsers();
  for(const user of users) {
    if(username === user.username && password === user.password)
    {
      setUser(username);
      return true;
    }
  }

  return false;
}

function addUser(username,password) {
  const users = getUsers();
  for(const user of users) {
    if(username === user.username)
    {
      setUser(username);
      return false;
    }
  }

  users.push({username, password});

  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return true;
}

function setUser(username) {
  localStorage.setItem(USER_KEY, username);
}

function getUser() {
  return localStorage.getItem(USER_KEY);
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

export {
  addUser,
  initUsers,
  verifyUser,
  getUser,
  removeUser
}
