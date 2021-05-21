require("dotenv").config()
const jwt = require('jsonwebtoken')

const VerifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']
    const { SECRET } = process.env
    if (!token) {
      return res
        .status(401)
        .json(
          {
            auth: false,
            message: 'No token provided.'
          }
        )
    }
    
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        return res.status(500).json(
          {
            auth: false,
            message: 'Failed to authenticate token.'
          }
        )
      }

      next();
    });
}

module.exports.VerifyJWT = VerifyJWT
