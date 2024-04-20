const USERS_KEY = "users";
const USER_KEY = "user";
const EMAIL_KEY = "email";
const PASS_KEY = "password";
const JOIN_KEY = "date";

const ITEMS_KEY = "items"



function initUsers() {

  const users = [
    {
      username: "jabbar",
      email: "jabbar@gmail.com",
      password: "AAAAAAA1",
      date:"1/1/1970"
    },
    {
      username: "mike",
      email: "mike@gmail.com",
      password: "asdf1234",
      date:"2/2/1971"
    }
  ];

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getUsers() {
  const data = localStorage.getItem(USERS_KEY);

  return JSON.parse(data);
}

function verifyUser(username, email, password) {
  const users = getUsers();
  for(const user of users) {
    if(username === user.username && email === user.email && password === user.password)
    {
      setUser(username,email,password ,user.date);
      return true;
    }
  }

  return false;
}

function addUser(username, email, password) {
  const users = getUsers();
  for(const user of users) {
    if(username === user.username)
    {
      return false;
    }
  }
  
  var _date = new Date();

  var day = _date.getDate();
  var month = _date.getMonth() + 1;
  var year = _date.getFullYear();

  var day_str = (day < 10) ? '0' + day : day;
  var month_str = (month < 10) ? '0' + month : month;
  var year_str = year.toString();

  var date = day_str + '/' + month_str + '/' + year_str;

  users.push({username, email, password, date});

  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return true;
}

function setUser(username,email,password,date_str) {
  localStorage.setItem(USER_KEY, username);
  localStorage.setItem(EMAIL_KEY, email);
  localStorage.setItem(PASS_KEY, password);
  localStorage.setItem(JOIN_KEY, date_str);
}

function getUser() {
  return [localStorage.getItem(USER_KEY),
          localStorage.getItem(EMAIL_KEY),
          localStorage.getItem(JOIN_KEY)];
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(EMAIL_KEY);
  localStorage.removeItem(PASS_KEY);
  localStorage.removeItem(JOIN_KEY);
}



function initItems() {
  const items = [
    {
      item: "Chocolate protein bar",
      price_old: "5.99",
      price_new: "2.99",
      image_url:"https://media.istockphoto.com/id/155153756/photo/chocolate-and-peanut-butter-energy-bar.jpg?s=1024x1024&w=is&k=20&c=vy_QM-Bw_Tn30PM17W9O2-K2lhNvlegJNHTtPm1JWCo="
    },
    {
      item: "Olive oil",
      price_old: "14.99",
      price_new: "9.99",
      image_url:"https://media.istockphoto.com/id/615424950/photo/olive-oil-bottle-isolated-on-the-white.jpg?s=1024x1024&w=is&k=20&c=X2vd2-vQmY9lqT-X5uiaNEyh89KEcVf2VAjm5UqWxIk="
    },
    {
      item: "Organic carrots (PACK)",
      price_old: "8.99",
      price_new: "4.99",
      image_url:"https://media.istockphoto.com/id/1369528511/photo/new-harvest-cleaned-carrots-packed-and-labeled-on-isolated-white-background.jpg?s=1024x1024&w=is&k=20&c=IP67FFtLuSwZi09djInECRdo8T3duOMfmzkRs5vDmJs="
    }

  ];

  localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
}

function getItems() {
  let data = localStorage.getItem(ITEMS_KEY);
  return JSON.parse(data);
}





export {
  addUser,
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  initItems,
  getItems
}
