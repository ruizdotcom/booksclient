const store = require('./../store')

// SIGN_UP
const signUpSuccessful = function (response) {
  $('#message').text('Congradulations ' + response.user.email + '! You have signed up successfully')
  console.log('ipo')
}
const signUpFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
  console.log('ipon')
}

// SIGN_IN
const signInSuccessful = function (response) {
  $('#message').text('Here is your token: ' + response.user.token)
  store.user = response.user
}
const signInFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// CHANGE_PASSWORD
const changePasswordSuccessful = function (response) {
  $('#message').text('You have successfully changed your password')
}
const changePasswordFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// CREATE
const createBookSuccessful = function (response) {
  $('#message').text('You have successfully created a book!')
}
const createBookFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// SHOW
const showBooksSuccessful = function (response) {
  console.log(response)
  $('#message').text('You have successfully showed a book!')
  const allBooks = response.books
  allBooks.forEach(book => {
    $('#book-list').append(`<li>${book.title}</li>`)
  })
}
const showBooksFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// UPDATE
const updateBookSuccessful = function (response) {
  $('#message').text('You have successfully updated a book!')
}
const updateBookFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// DELETE
const deleteBookSuccessful = function (response) {
  $('#message').text('You have successfully deleted a book!')
}
const deleteBookFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

module.exports = {
  signUpSuccessful,
  signUpFailed,
  signInSuccessful,
  signInFailed,
  changePasswordSuccessful,
  changePasswordFailed,
  createBookSuccessful,
  createBookFailed,
  showBooksSuccessful,
  showBooksFailed,
  updateBookSuccessful,
  updateBookFailed,
  deleteBookSuccessful,
  deleteBookFailed
}
