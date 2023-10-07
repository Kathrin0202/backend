const { response } = require("express");

const logger = (request, response, next) => {
  console.log(request.originalUrl);
  next();
};

module.exports = logger;
