const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../../config/index')

// AUTHENTICATION
const restricted = (req, res, next) => {
  //  the server expects to find the token in Authorization
  const token = req.headers.authorization

  if (token) {
    // async function
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) {
        next({ status: 401, message: `token bad: ${err.message}` }) 
      } else {
        req.decoded = decoded
        next()
      }
    }) // old style async callback
  } else {
    next({ status: 401, message: 'we wants token!' })
  }
}

// AUTHORIZATION
const checkRole = (role) => (req, res, next) => {
  if (req.decoded.role === role) {
    next()
  } else {
    next({ status: 403, message: 'you have no power here!' })
  }
}

module.exports = {
  restricted,
  checkRole,
}
