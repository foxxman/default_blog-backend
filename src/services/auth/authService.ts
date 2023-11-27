import { ServicesProps, SignInData, SignUpData } from "../../../types";
import { logger } from "../../config/logger";
import User from "../../db/models/user.model";

const signUp = async ({ socket, data }: ServicesProps<SignUpData>) => {
    // const {email, login, password} = data;

    logger.info('sign up from: ' + data.email)
    // const isEmailExist = User.findOne({
    //     where: {
    //         email,
    //     }
    // })

    // const isLoginExist = User.findOne({
    //     where: {
    //         login,
    //     }
    // })

    // logger.info(`${isEmailExist} ${isLoginExist}`);
};

const signIn = async ({ socket, data }: ServicesProps<SignInData>) => {
    logger.info('sign in from: ' + data.email)
};

const authService = {
    signIn,
    signUp,
}

export default authService;