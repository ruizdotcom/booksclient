// const store = require('./../store')

// INITIAL_LOAD
$(document).ready(function () {
  $('#change-password-email').hide()
  $('#sign-out-email').hide()
  $('#footer').hide()

  $('#create-book-form').hide()
  $('#show-books-form').hide()
  $('#update-book-form').hide()
  $('#delete-book-form').hide()

  $('#create-movie-form').hide()
  $('#show-movies-form').hide()
  $('#update-movie-form').hide()
  $('#delete-movie-form').hide()
})

// SIGN_UP
const signUpSuccessful = function (response) {
  $('#message').text('Congradulations ' + response.user.email + '! You have signed up successfully')
}
const signUpFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// SIGN_IN
const signInSuccessful = function (response) {
  $('#message').text('Here is your token: ' + response.user.token)
  store.user = response.user
  $('#change-password-email').show()
  $('#sign-out-email').show()
  $('#footer').show()

  $('#create-book-form').show()
  $('#show-books-form').show()
  $('#update-book-form').show()
  $('#delete-book-form').show()

  $('#create-movie-form').show()
  $('#show-movies-form').show()
  $('#update-movie-form').show()
  $('#delete-movie-form').show()

  $('#sign-up-email').hide()
  $('#sign-in-email').hide()
}
const signInFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// SIGN_OUT
const signOutSuccessful = function (response) {
  $('#message').text('You have signed out successfully')
  store.user = null
  $('#change-password-email').hide()
  $('#sign-out-email').hide()
  $('#sign-up-email').show()
  $('#sign-in-email').show()

  $('#create-book-form').hide()
  $('#show-books-form').hide()
  $('#book-index-form').hide()
  $('#update-book-form').hide()
  $('#delete-book-form').hide()
  $('#books-index').hide()

  $('#create-movie-form').hide()
  $('#show-movies-form').hide()
  $('#movie-index-form').hide()
  $('#update-movie-form').hide()
  $('#delete-movie-form').hide()
  $('#movies-index').hide()

  $('form').trigger('reset')
}
const signOutFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// CHANGE_PASSWORD
const changePasswordSuccessful = function (response) {
  $('#message').text('You have successfully changed your password')
  $('form').trigger('reset')
}
const changePasswordFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// CREATE
const createBookSuccessful = function (response) {
  $('#message').text('You have successfully created a book!')
  $('form').trigger('reset')
}
const createBookFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// SHOW
const showBooksSuccessful = function (response) {
  $('#book-list').html(' ')
  $('#message').text('You have successfully showed a book!')
  const allBooks = response.books
  allBooks.forEach(book => {
    $('#book-list').append(`<li>${book.title}</li>`)
    $('#book-list').append(`<li>by ${book.author}</li>`)
    $('#book-list').append(`<li>${book._id}</li>`)
  })
  $('#books-index').show()
  $('form').trigger('reset')
}
const showBooksFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// UPDATE
const updateBookSuccessful = function (response) {
  $('#message').text('You have successfully updated a book!')
  $('form').trigger('reset')
}
const updateBookFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// DELETE
const deleteBookSuccessful = function (response) {
  $('#message').text('You have successfully deleted a book!')
  $('form').trigger('reset')
}
const deleteBookFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// MOVIE UI VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

// CREATE
const createMovieSuccessful = function (response) {
  $('#message').text('You have successfully created a movie!')
  $('form').trigger('reset')
}
const createMovieFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// SHOW
const showMoviesSuccessful = function (response) {
  $('#movie-list').html(' ')
  $('#message').text('You have successfully showed a movie!')
  const allMovies = response.movies
  allMovies.forEach(movie => {
    $('#movie-list').append(`<li>${movie.title}</li>`)
    $('#movie-list').append(`<li>by ${movie.director}</li>`)
    $('#movie-list').append(`<li>${movie._id}</li>`)
  })
  $('#movies-index').show()
  $('form').trigger('reset')
}
const showMoviesFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// UPDATE
const updateMovieSuccessful = function (response) {
  $('#message').text('You have successfully updated a Movie!')
  $('form').trigger('reset')
}
const updateMovieFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// DELETE
const deleteMovieSuccessful = function (response) {
  $('#message').text('You have successfully deleted a Movie!')
  $('form').trigger('reset')
}
const deleteMovieFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// module.exports =
window.authUi = {
  // initialLoad,
  signUpSuccessful,
  signUpFailed,
  signInSuccessful,
  signInFailed,
  signOutSuccessful,
  signOutFailed,
  changePasswordSuccessful,
  changePasswordFailed,
  createBookSuccessful,
  createBookFailed,
  showBooksSuccessful,
  showBooksFailed,
  updateBookSuccessful,
  updateBookFailed,
  deleteBookSuccessful,
  deleteBookFailed,
  createMovieSuccessful,
  createMovieFailed,
  showMoviesSuccessful,
  showMoviesFailed,
  updateMovieSuccessful,
  updateMovieFailed,
  deleteMovieSuccessful,
  deleteMovieFailed
}
