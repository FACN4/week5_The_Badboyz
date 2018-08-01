/* eslint-disable */
const request = require('request');

const httpReq = (query, callback) => {
  const APIurl = `https://free.currencyconverterapi.com/api/v6/convert?q=${query}`;
  request(APIurl, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    callback(null, body);
    // console.log(body);
    // return body;
  });
};

module.exports = httpReq;
