const { OktaApiError, okta } = require('@okta/okta-sdk-nodejs');
const express = require('express');
const router = express.Router();
const oktaClient = require('../lib/oktaClient');

/* Create a new User (register). */
router.post('/', (req, res, next) =>
{
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    body: {
      profile: {
        firstName: req.body.profile.firstName,
        lastName: req.body.profile.lastName,
        email: req.body.profile.email,
        login: req.body.profile.email
      },
      credentials: {
        password: {
          value: req.body.credentials.password.value
        }
      }
    }
  };



  // oktaClient.User.getUser("00ub4rg6cyFsHAcT45d7").then((res) =>
  // {
  //   alert(res);
  // }).catch(err =>
  // {
  //   res.status(400);
  //   res.send(err);
  // });

  oktaClient.userApi
    .createUser(newUser)
    .then(user =>
    {
      res.status(201);
      res.send(user);
    })
    .catch(err =>
    {
      res.status(400);
      res.send(err);
    });
});

module.exports = router;