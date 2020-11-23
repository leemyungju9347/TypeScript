// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url)
}

fetchUser().then(function (response) {
  response.address
})

console.log(fetchUser());

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기

      console.log(user);
      username.innerHTML = user[0].name
      email.innerHTML = user[0].email
      address.innerHTML = user[0].address
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
