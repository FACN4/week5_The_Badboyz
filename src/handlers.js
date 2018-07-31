const path = require('path');
const fs = require('fs');
// const logic = require('./logic');

const handler500 = function (res) {
  res.writeHead(500, { 'content-type': 'text/plain' });
  res.end('server error');
};

const handlerHome = function(req, res) {
  fs.readFile(
    path.join(__dirname, "..", "public", "index.html"),
    (err, file) => {
      if (err) {
        handler500(res);
        return;
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        logic.fillDropDownList;
        res.end(file);
      }
    }
  });
};

const handlerPublic = function (req, res, url) {
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpg',
    gif: 'image/gif',
  };
  fs.readFile(path.join(__dirname, '..', 'public', url), (err, file) => {
    if (err) {
      handler500(res);
    } else {
      console.log(extensionType[extension]);
      res.writeHead(200, { 'Content-Type': extensionType[extension] });
      res.end(file);
    }
  });
};

const handlerExchange = function (req, res) {};

const handler404 = function (req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', '404.html'), (err, file) => {
    if (err) {
      handler500(res);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
};

module.exports = {
  handlerHome,
  handlerPublic,
  handlerExchange,
  handler404,
};
