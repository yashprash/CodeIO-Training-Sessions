// const routes = require('express').Router();

// routes.post('/test', (req, res) => {
//   console.log(req.body);
//   res.status(200).json({ message: 'Connected!' });
// });

// module.exports = routes;

exports.routers = function(route)
{
  route.post('/test',(req,res) => {
    console.log(req.body);
    res.send({success:'true'});
  });

  return route;
}