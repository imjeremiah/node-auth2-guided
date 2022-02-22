// AUTHENTICATION
const restricted = (req, res, next) => {
  const token = req.headers.authorization
  if(!token) {
    next({ status: 401, message: 'access denied' });
  } else {
    next()
  }
}

// AUTHORIZATION
const checkRole = (req, res, next) => {
  next()
}

module.exports = {
  restricted,
  checkRole,
}
