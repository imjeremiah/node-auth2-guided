// AUTHENTICATION
const restricted = (req, res, next) => {
  const token = req.headers.authorization
  console.log(token);
  next()
}

// AUTHORIZATION
const checkRole = (req, res, next) => {
  next()
}

module.exports = {
  restricted,
  checkRole,
}
