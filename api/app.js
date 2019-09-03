exports.App = function(){

const app = require('express')();
const routes = require('./route');

//  Connect all our routes to our application
app.use('/', routes);

return app;
};
