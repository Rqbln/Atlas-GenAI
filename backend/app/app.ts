// import ffy, { setupServer } from './src';

// const startServer = async (): Promise<void> => {
//   try {
//     await setupServer();

//     const port = parseInt("3000", 10);
//     await ffy.listen({ port, host: '0.0.0.0' });
//     ffy.log.info(`Server listening on port ${port}`);
//   } catch (err) {
//     ffy.log.error(err);
//     process.exit(1);
//   }
// };

// startServer();

// import awsLambdaFastify from '@fastify/aws-lambda';

// import ffy, { setupServer } from './src';

// const startServer = async (): Promise<void> => {
//   try {
//     await setupServer();

//     const port = parseInt('3000', 10);
//     await ffy.listen({ port, host: '0.0.0.0' });
//     ffy.log.info(`Server listening on port ${port}`);
//   } catch (err) {
//     ffy.log.error(err);
//     process.exit(1);
//   }
// };

// // Export the handler for AWS Lambda
// export const handler = awsLambdaFastify(ffy);

// // Start the server if running locally
// if (process.env.NODE_ENV !== 'lambda') {
//   startServer();
// }
import awsLambdaFastify from '@fastify/aws-lambda';

import ffy, { setupServer } from './src';

const startServer = async (): Promise<void> => {
  try {
    await setupServer();

    const port = parseInt('3000', 10);
    await ffy.listen({ port, host: '0.0.0.0' });
    ffy.log.info(`Server listening on port ${port}`);
  } catch (err) {
    ffy.log.error(err);
    process.exit(1);
  }
};

// Export the handler for AWS Lambda
export const handler = awsLambdaFastify(ffy);

// Start the server if running locally
if (require.main === module) {
  startServer();
}
