// app/src/routes/bedrockRoute.ts
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import { fetchTrainingData } from "../services/dynamoService";
import { callBedrock } from "../services/bedrockService";

export async function bedrockRoutes(fastify: FastifyInstance) {
  fastify.get("/bedrock/train", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      // Récupérer les données de DynamoDB
      const dataItems = await fetchTrainingData();
      // Construire un prompt (exemple simple)
      const prompt = "Voici les données extraites de la table test6 :\n" +
        dataItems.map(item => JSON.stringify(item)).join("\n") +
        "\nFournissez une analyse synthétique des informations ci-dessus.";

      // Appeler Amazon Bedrock avec le prompt
      const bedrockResponse = await callBedrock(prompt);
      return reply.send({ success: true, data: bedrockResponse });
    } catch (error) {
      return reply.status(500).send({ success: false, error: error.toString() });
    }
  });
}
