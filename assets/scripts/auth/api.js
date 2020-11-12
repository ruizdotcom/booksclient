const config = require('./../config')
const store = require('../store')

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
    url: config.apiUrl + '/books',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const deleteBookData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  signUpData,
  signInData,
  changePasswordData,
  signOutData,
  createBookData,
  showBooksData,
  updateBookData,
  deleteBookData
}
