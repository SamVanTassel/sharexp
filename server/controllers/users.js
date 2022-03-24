import db from "../models/dataModel.js";
import bcrypt from 'bcrypt';

const saltRounds = 10;
const usersController = {};

// retrieve all users and store in res.locals to use in next middleware
usersController.checkIfUsernameExists = (req, res, next) => {
  console.log('getting all usernames');
    const sql = `SELECT * FROM "users"
    WHERE username=$1;
    `;
    const params = [req.body.username]
    db.query(sql, params)
        .then((data) => {
          console.log(data.rows)
            res.locals.newUsername = data.rows[0] ? false : true;
            return next();
        })
        .catch((err) => {
            return next(err)
        });
};

// check if users contains matching information
//   if yes, return cookie
//   if no, return failure message
usersController.login = (req, res, next) => {
  if (!res.locals.newUsername) {
    console.log('username exists, loggin\' in')
    const sql = `SELECT id, password from "users" 
    WHERE username=$1;
    `
    const params = [req.body.username];
    db.query(sql, params)
      .then((data) => {
        console.log('data: ', data.rows);
        bcrypt.compare(req.body.password, data.rows[0].password)
        .then(result => {
          if (result) {
            res.locals.userId = data.rows[0].id;
            console.log('res.locals: ', res.locals.userId);
            return next();
          } else {
            res.locals.userId = 'ERR: username or password is incorrect';
          return next();
          }
        }).catch(err => next(err));
      })
      .catch((err) => next(err))
  } else {
    res.locals.userId = 'ERR: username or password is incorrect';
    return next();
  };
};

// add new row to users
//   if row exists, return failure message
//   if not, return cookie
usersController.signup = (req, res, next) => {
  if (res.locals.newUsername) {
    const sql = `INSERT INTO "users" (username, password, cohort_id, avatar)
    VALUES ($1, $2, $3, $4)
    RETURNING id, avatar
    `
    const avatarUrl = `https://avatars.dicebear.com/api/big-smile/${req.body.username}.svg`
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      console.log(hash);
      if (err) {
        return next(err);
      } else {
        const params = [req.body.username, hash, res.locals.cohortId, avatarUrl];
        db.query(sql, params)
          .then((data) => {
            res.locals.userId = data.rows[0].id;
            res.locals.avatar = data.rows[0].avatar;
            return next();
          })
          .catch((err) => next(err))
      }
    })
  } else {
    res.locals.userId = 'ERR: username already exists';
    return next();
  }
};

export default usersController;

/* <-- ~~**~~**~~**~~** SCRATCHPAD **~~**~~**~~**~~**~~ -->
  username: samAccount
  password: passpasspass
  inviteKey: 'LACOHORT'
  salt: 

*/ 
