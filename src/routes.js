import { Router } from 'express';

const routes = new Router();

routes.get('/',(req, res)=> {
  return res.json({message:'Server funcionando na porta 3333'})
});

export default routes;