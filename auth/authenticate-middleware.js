/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken");
const User = require("../User/user-Model");

module.exports = (req, res, next) => {
  // Authorization
  const { authorization } = req.headers;

  // check if user provides a token
  if (!authorization) {
    return res.status(403).json({
      status: 403,
      error: "Unauthorize, please login"
    });
  }

  // check if token is valid
  try {
    // decode and get token
    const decodedToken = jwt.verify(authorization, "D4RE!EFGF");

    // find user by email
    const user = User.findBy(decodedToken.username).first();

    // check if user exist
    if (!user) {
      return res.status(401).json({
        status: 401,
        error: "Invalid token provided"
      });
    }

    // make current logged in user email available
    req.user = decodedToken;
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error
    });
  }
  next();
};
