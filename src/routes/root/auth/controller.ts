import { SignInData, SignUpData } from './../../../../types/index';
import { IRouteFn } from '../../../../types/socket';
import authService from '../../../services/auth/authService';
import { logger } from '../../../config/logger';

export const signUp: IRouteFn<SignUpData, any> = async (socket, data) => {
    logger.info('sign up from: ' + data.email)
    authService.signUp({socket, data});}

export const signIn: IRouteFn<SignInData, any> = async (socket, data) => authService.signIn({socket, data});
