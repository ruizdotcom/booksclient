/*const config = require('./../config')
const store = require('../store')
*/
const signUpData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signInData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePasswordData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const signOutData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE',
    data: data
  })
}

const createBookData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const showBooksData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

const updateBookData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/' + data.book.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const deleteBookData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/' + data.book.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

// MOVIE
const createMovieData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const showMoviesData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

const updateMovieData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + data.movie.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const deleteMovieData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + data.movie.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

// module.exports = 
window.authApi = {
  signUpData,
  signInData,
  changePasswordData,
  signOutData,
  createBookData,
  showBooksData,
  updateBookData,
  deleteBookData,
  createMovieData,
  showMoviesData,
  updateMovieData,
  deleteMovieData
}
