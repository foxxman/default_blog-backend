import Joi from 'joi';
import { NAME_MAX_LENGTH } from '../../const/hello';

export const email = () => Joi.string().max(NAME_MAX_LENGTH);
export const password = () => Joi.string().max(NAME_MAX_LENGTH);
