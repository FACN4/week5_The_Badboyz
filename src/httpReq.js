/* eslint-disable */
const request = require('request');

const httpReq = query => {
  const APIurl = `https://free.currencyconverterapi.com/api/v6/convert?q=${query}`;
  request(APIurl, (error, response, body) => {
    console.log(body);
  });
};

module.exports = httpReq;
