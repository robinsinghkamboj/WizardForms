import axios from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import _ from 'lodash'

export function getCompanies() {
  return axios.get('http://baredex-admin.nextpageit.net/api/1.1/tables/car_comapny/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII')
    .then(res => {
      return res
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getPlaces() {
  return axios.get('http://baredex-admin.nextpageit.net/api/1.1/tables/dealer_places/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc')
    .then(res => {
      return res;
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getAllDealers() {
  return axios.get('http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function registerUser(user) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hash(user.password, salt).then(hashPassword => {
    return axios
      .post(
        'http://baredex-admin.nextpageit.net/api/1.1/tables/reactuser/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII',
        {
          username: user.name,
          email: user.email,
          password: hashPassword
        }
      )
      .then(res => {
        return res;
      });
  })
}

export function getSelectedUser(user) {
  return axios
    .get(
      'http://baredex-admin.nextpageit.net/api/1.1/tables/reactuser/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc&filters[email][eq]=' + user.email
    )
    .then(res => {
      var response = res.data.data
      if (response[0]) {
        return bcrypt.compare(user.password, response[0].password).then(res => {
          if (!res)
            return res
          else
            return response[0]
        })
      } else {
        return null
      }
    });
}

export function authenticateUser(user) {
  return getSelectedUser(user).then(res => {
    if (res === null)
      return ({ success: false, message: 'User does not exists!' })
    else if (!res)
      return ({ success: false, message: 'Invalid Credentials!' })
    else
      return ({
        success: true,
        token: jwt.sign({ id: res.id }, 'ABC', { expiresIn: '120m' }),
        userData: _.pick(res, ['id', 'username', 'email'])
      })
  })
}