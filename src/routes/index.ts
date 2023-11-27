import { ROUTER_NAMES } from './../../types/router-names';
import { Router } from '../services/socket/router';
import { authRouter } from './root/auth/router';

const router = new Router();

router.addRouter(ROUTER_NAMES.AUTH, authRouter);

export const rootRouter = router;
