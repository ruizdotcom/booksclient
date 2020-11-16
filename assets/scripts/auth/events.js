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

module.exports = {
  onSignUpEmail,
  onSignInEmail,
  onChangePasswordEmail,
  onSignOutEmail,
  onCreateBook,
  onShowBooks,
  onUpdateBook,
  onDeleteBook
}
