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

function deleteUser() {
  let users = getUsers();
  

  let to_delete = localStorage.getItem(USER_KEY);

  let users_size = Object.keys(users).length;

  for (let i=0;i<users_size;i++){

    if (users[i].username === to_delete){

      delete users[i]

      var users_flat = users.filter(item => item !== undefined && item !== null);

      localStorage.setItem(USERS_KEY, JSON.stringify(users_flat))
      console.log(users_flat)

      removeUser()


      return true

    }
  }

}

function editUserName(name) {
  let users = getUsers();

  let users_size = Object.keys(users).length;

  for (let i=0;i<users_size;i++){

    if (users[i].email === localStorage.getItem(EMAIL_KEY)){

      users[i].username = name;

      localStorage.setItem(USERS_KEY, JSON.stringify(users))
      console.log(users)
      return true

    }
  }

}

function editUserPass(password) {
  let users = getUsers();

  let users_size = Object.keys(users).length;

  for (let i=0;i<users_size;i++){

    if (users[i].email === localStorage.getItem(EMAIL_KEY)){

      users[i].password = password;

      localStorage.setItem(USERS_KEY, JSON.stringify(users))
      console.log(users)
      return true

    }
  }

}



function initItems() {
  const items = [
    {
      id:123,
      cart:0,
      item: "Chocolate protein bar",
      price_old: "5.99",
      price_new: "2.99",
      image_url:"https://media.istockphoto.com/id/155153756/photo/chocolate-and-peanut-butter-energy-bar.jpg?s=1024x1024&w=is&k=20&c=vy_QM-Bw_Tn30PM17W9O2-K2lhNvlegJNHTtPm1JWCo="
    },
    {
      id:5,
      cart:0,
      item: "Olive oil",
      price_old: "14.99",
      price_new: "9.99",
      image_url:"https://media.istockphoto.com/id/615424950/photo/olive-oil-bottle-isolated-on-the-white.jpg?s=1024x1024&w=is&k=20&c=X2vd2-vQmY9lqT-X5uiaNEyh89KEcVf2VAjm5UqWxIk="
    },
    {
      id:9467,
      cart:0,
      item: "Organic carrots (PACK)",
      price_old: "8.99",
      price_new: "4.99",
      image_url:"https://media.istockphoto.com/id/1369528511/photo/new-harvest-cleaned-carrots-packed-and-labeled-on-isolated-white-background.jpg?s=1024x1024&w=is&k=20&c=IP67FFtLuSwZi09djInECRdo8T3duOMfmzkRs5vDmJs="
    },
    {
      id:10,
      cart:0,
      item: "Sunflower seeds",
      price_old: "2.99",
      price_new: "0.99",
      image_url:"https://media.istockphoto.com/id/1333231684/photo/peeled-sunflower-seeds-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=OGqkIXgDiAIVIUOIvrGGxNlC9X-1_0T9A8AtLIEiDnQ="
    },
    {
      id:999,
      cart:0,
      item: "BRAND watering can (YELLOW)",
      price_old: "15.99",
      price_new: "10.99",
      image_url:"https://media.istockphoto.com/id/142266066/photo/watering-can.jpg?s=612x612&w=is&k=20&c=5FIu6ZwpnxRgHIIneYmZ-C4haxgKKIY7mytPITZ9060="
    }

  ];

  localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
}

function getItems() {
  let data = localStorage.getItem(ITEMS_KEY);
  return JSON.parse(data);
}

function addCart(id){
  const items = getItems();

  let items_size = Object.keys(items).length;

  for (let i=0;i<items_size;i++){

    if (id == items[i].id){

      items[i].cart += 1

    }
  }

  console.log(items)
  localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
}

function removeCart(id){
  const items = getItems();

  let items_size = Object.keys(items).length;

  for (let i=0;i<items_size;i++){

    if (id == items[i].id && items[i].cart > 0){

      items[i].cart -= 1

    }
  }

  console.log(items)
  localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
}

export {
  addUser,
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  deleteUser,
  editUserName,
  editUserPass,
  initItems,
  getItems,
  addCart,
  removeCart
}
