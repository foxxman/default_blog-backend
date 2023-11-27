import { logger } from '../config/logger';
import sequelize from '../db';
import { startSocket } from './startSocket';

export const runBootTasks = async () => {
    logger.info('BootTasks:running:start');
    
    sequelize.sync()
        .then(() => {
            logger.info(`BootTasks:db:synced`);
        })
        .catch((error) => {
            logger.info(error)
        });

    startSocket();
    logger.info('BootTasks:running:complete');
};
