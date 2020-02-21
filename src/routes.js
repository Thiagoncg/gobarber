const { Router } = require('express');

const routes = new Router();

routes.get('/',(req, res)=> {
  return res.json({message:'Server funcionando na porta 3333'})
});

module.exports = routes;