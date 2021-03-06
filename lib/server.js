const http = require('http');

module.exports = exports = (routes, port) => {
  port = port || 3000;

  return http.createServer(routes)
    .listen(port, () => {
      console.log('server up on port ' + port);
    });
};
