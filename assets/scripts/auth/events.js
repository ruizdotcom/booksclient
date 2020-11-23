const getformfields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUpEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.signUpData(data)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailed)
}

const onSignInEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.signInData(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailed)
}

const onChangePasswordEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.changePasswordData(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailed)
}

const onSignOutEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.signOutData(data)
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailed)
}

const onCreateBook = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.createBookData(data)
    .then(ui.createBookSuccessful)
    .catch(ui.createBookFailed)
}

const onShowBooks = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.showBooksData(data)
    .then(ui.showBooksSuccessful)
    .catch(ui.showBooksFailed)
}

const onUpdateBook = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.updateBookData(data)
    .then(ui.updateBookSuccessful)
    .catch(ui.updateBookFailed)
}

const onDeleteBook = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.deleteBookData(data)
    .then(ui.deleteBookSuccessful)
    .catch(ui.deleteBookFailed)
}

// Movies forms VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
const onCreateMovie = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.createMovieData(data)
    .then(ui.createMovieSuccessful)
    .catch(ui.createMovieSuccessful)
}

const onShowMovies = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.showMoviesData(data)
    .then(ui.showMoviesSuccessful)
    .catch(ui.ShowMoviesFailed)
}

const onUpdateMovie = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.updateMovieData(data)
    .then(ui.updateMovieSuccessful)
    .catch(ui.updateMovieFailed)
}

const onDeleteMovie = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.deleteMovieData(data)
    .then(ui.deleteMovieSuccessful)
    .catch(ui.deleteMovieFailed)
}

module.exports = {
  onSignUpEmail,
  onSignInEmail,
  onChangePasswordEmail,
  onSignOutEmail,
  onCreateBook,
  onShowBooks,
  onUpdateBook,
  onDeleteBook,
  onCreateMovie,
  onShowMovies,
  onUpdateMovie,
  onDeleteMovie
}
