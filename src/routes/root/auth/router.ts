import { EVENTS_FROM_CLIENT } from '../../../../types/events-from-clients';
import { Router } from '../../../services/socket/router';
import * as controller from './controller';
import * as schemeValidator from './schemeValidator';

const router = new Router();

router.addRoute(
    { 
        path: EVENTS_FROM_CLIENT.SIGN_UP,
    },
    schemeValidator.signUp,
    controller.signUp,
);

router.addRoute(
    { 
        path: EVENTS_FROM_CLIENT.SIGN_IN,
    },
    schemeValidator.signIn,
    controller.signIn,
);

export const authRouter = router;
