import { handleError } from './error-handling-repository';

const checkDatabaseConnectionFn = async (): Promise<boolean> => {
  try {
    return true;
  } catch (error) {
    console.error('Database connection check failed:', error);
    return false;
  }
};

export const checkDatabaseConnection = handleError(checkDatabaseConnectionFn);
