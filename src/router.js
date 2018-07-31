const handlers = require("./handlers");

const router = (req, res) => {
  const url = req.url;

  if (url === "/") {
    handlers.handlerHome(req, res);
  } else if (url.includes("/exchange")) {
    handlers.handlerExchange(req, res);
  } else if (["/style.css", "dom.js"].includes(url)) {
    handlers.handlerPublic(req, res, url);
  } else {
    handlers.handler404(req, res);
  }
};

module.exports = router;
