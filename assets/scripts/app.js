'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const events = require('./auth/events.js')

// authEvents.addHandlers()

$(() => {
  // your JS code goes here
  $('#sign-up-email').on('submit', authEvents.onSignUpEmail)
  $('#sign-in-email').on('submit', authEvents.onSignInEmail)
  $('#change-password-email').on('submit', authEvents.onChangePasswordEmail)
  $('#sign-out-email').on('submit', authEvents.onSignOutEmail)

  $('#create-book-form').on('submit', authEvents.onCreateBook)
  $('#show-books-form').on('submit', authEvents.onShowBooks)
  $('#update-book-form').on('submit', authEvents.onUpdateBook)
  $('#delete-book-form').on('submit', authEvents.onDeleteBook)

  $('#create-movie-form').on('submit', authEvents.onCreateMovie)
  $('#show-movies-form').on('submit', authEvents.onShowMovies)
  $('#update-movie-form').on('submit', authEvents.onUpdateMovie)
  $('#delete-movie-form').on('submit', authEvents.onDeleteMovie)
})
