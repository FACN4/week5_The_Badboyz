const handlers = require('./handlers');

const router = (req, res) => {
  const url = req.url;

  if (url === '/') {
    handlers.handlerHome(req, res);
  } else if (url.includes('/exchange')) {
    handlers.handlerExchange(req, res, url);
  } else if (
    ['/style.css', '/assets/dollars.jpg', '/dom.js', '/currencyList.js', '/xhr.js'].includes(url)
  ) {
    handlers.handlerPublic(req, res, url);
  } else {
    handlers.handler404(req, res);
  }
};

module.exports = router;
