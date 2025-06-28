import { Router } from 'express';
import authRouter from './auth';

const apiRouterV1 = Router();

const routes = [
  {
    route: '/auth',
    router: authRouter,
    isProtected: false,
  },
];

routes.forEach((route) => {
  if (route.isProtected) {
    // TODO: Implement authentication middleware
    apiRouterV1.use(route.route, route.router);
  } else {
    apiRouterV1.use(route.route, route.router);
  }
});

export default apiRouterV1;
