import Joi from 'joi';
import { email, password } from './../../../services/auth/schemeValidator';
import { schemeValidator } from '../../../services/socket/schemeValidator';

export const signUp = schemeValidator(Joi.object({
    email: email(),
    password: password(),
}));

export const signIn = schemeValidator(Joi.object({
    email: email(),
    password: password(),
}));
