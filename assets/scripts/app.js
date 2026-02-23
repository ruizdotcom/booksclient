'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const events = require('./auth/events.js')

authEvents.addHandlers()

$(() => {
  // your JS code goes here
  $('#sign-up-email').on('submit', events.onSignUpEmail)
  $('#sign-in-email').on('submit', events.onSignInEmail)
  $('#change-password-email').on('submit', events.onChangePasswordEmail)
  $('#sign-out-email').on('submit', events.onSignOutEmail)

  $('#create-book-form').on('submit', events.onCreateBook)
  $('#show-books-form').on('submit', events.onShowBooks)
  $('#update-book-form').on('submit', events.onUpdateBook)
  $('#delete-book-form').on('submit', events.onDeleteBook)

  $('#create-movie-form').on('submit', events.onCreateMovie)
  $('#show-movies-form').on('submit', events.onShowMovies)
  $('#update-movie-form').on('submit', events.onUpdateMovie)
  $('#delete-movie-form').on('submit', events.onDeleteMovie)
})
