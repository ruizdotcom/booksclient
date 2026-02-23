/*const getformfields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
*/
const onSignUpEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.signUpData(data)
    .then(authUi.signUpSuccessful)
    .catch(authUi.signUpFailed)
}

const onSignInEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.signInData(data)
    .then(authUi.signInSuccessful)
    .catch(authUi.signInFailed)
}

const onChangePasswordEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.changePasswordData(data)
    .then(authUi.changePasswordSuccessful)
    .catch(authUi.changePasswordFailed)
}

const onSignOutEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.signOutData(data)
    .then(authUi.signOutSuccessful)
    .catch(authUi.signOutFailed)
}

const onCreateBook = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.createBookData(data)
    .then(authUi.createBookSuccessful)
    .catch(authUi.createBookFailed)
}

const onShowBooks = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.showBooksData(data)
    .then(authUi.showBooksSuccessful)
    .catch(authUi.showBooksFailed)
}

const onUpdateBook = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.updateBookData(data)
    .then(authUi.updateBookSuccessful)
    .catch(authUi.updateBookFailed)
}

const onDeleteBook = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.deleteBookData(data)
    .then(authUi.deleteBookSuccessful)
    .catch(authUi.deleteBookFailed)
}

// Movies forms VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
const onCreateMovie = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.createMovieData(data)
    .then(authUi.createMovieSuccessful)
    .catch(authUi.createMovieSuccessful)
}

const onShowMovies = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.showMoviesData(data)
    .then(authUi.showMoviesSuccessful)
    .catch(authUi.ShowMoviesFailed)
}

const onUpdateMovie = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.updateMovieData(data)
    .then(authUi.updateMovieSuccessful)
    .catch(authUi.updateMovieFailed)
}

const onDeleteMovie = event => {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  authApi.deleteMovieData(data)
    .then(authUi.deleteMovieSuccessful)
    .catch(authUi.deleteMovieFailed)
}

// module.exports = 
window.authEvents = {
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
