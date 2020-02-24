// Rodar estrutura base com node src/server.js
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({
    message: 'Estrutura completa funcionando com debug automático direto',
  });
});

export default routes;
