const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');

const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function generateToken(user) {
  const payload = {
      username: user.username,
  };
  const secret = 'secretkey!';
  const options = {
      expiresIn: '1h',
      jwtid: '12345'
  };
  return jwt.sign(payload, secret, options);
}

 // --- REGISTRATION --- //
function register(req, res) {
  // implement user registration
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 10);
  creds.password = hash;

  db('users')
  .insert(creds)
  // get ids back after inserting user creds
  .then(ids => {
      const id = ids[0];

      // find the user by id and grab user from db with any additional info we may need from the user
      db('users')
      .where({ id })
      .first()
      // pass user to generate a token
      .then(user => {
        //generate a token
        const token = generateToken(user);
        //pass token to user
        res.status(201).json({ id:user.id, token });
      })
      .catch(err => res.status(500).send(err));
  })
  .catch(err => res.status(500).send(err));
  };

  // --- LOGIN --- //
function login(req, res) {
  // implement user login
  const creds = req.body;

   db('users')
   .where({ username: creds.username })
   .first()
   .then(user => {
       if (user && bcrypt.compareSync(creds.password, user.password)) {
           //const token = generateToken(user);
           res.status(200).json({message: `Welcome!${user.username}`});
       } else {
           res.status(401).json({ message: 'You shall not pass!' });
       }
   })
   .catch(err => res.status(500).send(err));
  }

  /// --- PROTECT ROUTE --- ///
  function protected(req, res, next) {
    const token = req.headers.authorization;
    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'Invalid Token'});
            } else {
               req.username = decodedToken.username;
               next();
            }
        });
    } else {
        res.status(401).json({ message: 'No token provided' })
    }
}

/// --- GET JOKES --- ///
function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
