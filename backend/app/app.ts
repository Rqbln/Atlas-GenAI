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

import { ffy, setupServer } from './src/index.js';

const startServer = async (): Promise<void> => {
  try {
    await setupServer();

    const port = parseInt("3000", 10);
    await ffy.listen({ port, host: '0.0.0.0' });
    ffy.log.info(`Server listening on port ${port}`);
  } catch (err) {
    ffy.log.error(err);
    process.exit(1);
  }
};

// Démarre le serveur uniquement si le fichier est exécuté directement (pas dans AWS Lambda)
if (require.main === module) {
  startServer();
}

// Exporte l'application Fastify pour qu'elle puisse être utilisée avec AWS Lambda
export { ffy };
