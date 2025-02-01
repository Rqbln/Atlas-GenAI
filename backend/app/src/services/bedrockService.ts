// app/src/services/bedrockService.ts

import { URL } from "url";

import { config } from "dotenv";
import axios from "axios";

import dynamoService from "./dynamoService"; // Ajustez le chemin selon votre arborescence

config();

/**
 * Extrait les données de la table "test6" via le service DynamoDB,
 * construit un prompt et appelle l'API Amazon Bedrock pour obtenir une réponse.
 */
export async function callBedrockWithDynamoData(): Promise<any> {
  try {
    // Étape 1 : Récupération des données depuis DynamoDB
    // Ici, on suppose que la table "test6" possède une clé partition "type"
    // et qu'on veut récupérer les enregistrements dont "type" vaut "record".
    // Adaptez cette requête à votre schéma réel.
    const queryParams = {
      TableName: "test6",
      KeyConditionExpression: "#type = :recordType",
      ExpressionAttributeNames: { "#type": "type" },
      ExpressionAttributeValues: { ":recordType": "record" },
    };

    const queryResult = await dynamoService.query(queryParams);
    const items = queryResult.Items || [];

    // Étape 2 : Construction du prompt à partir des données extraites
    const promptData = items.map((item: any) => JSON.stringify(item)).join("\n");
    const prompt = `Voici les données extraites de la table DynamoDB 'test6':\n${promptData}\nFournissez une analyse synthétique des informations ci-dessus.`;

    // Étape 3 : Préparation de l'appel à Amazon Bedrock
    const bedrockRegion = process.env.BEDROCK_REGION || "us-east-1";
    const endpoint = `https://bedrock.${bedrockRegion}.amazonaws.com`;
    const path = "/"; // À adapter selon la documentation de l'API Bedrock

    // Construire le payload pour Bedrock
    const payload = {
      prompt,
      model: "mistralai/Mistral-7x8B", // Modifiez selon le nom exact du modèle si nécessaire
      // Ajoutez ici d'autres paramètres comme "temperature", "max_tokens", etc.
    };

    // Préparez l'objet de requête pour aws4
    const url = new URL(endpoint + path);
    const opts = {
      host: url.host,
      path: url.pathname,
      method: "POST",
      service: "bedrock",
      region: bedrockRegion,
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(payload),
    };

    // Signature de la requête
    const signedOpts = aws4.sign(opts);

    // Appel à l'API Bedrock avec axios
    const response = await axios.post(endpoint + path, payload, {headers: signedOpts.headers,});

    return response.data;
  } catch (error: any) {
    console.error("Erreur lors de l'appel à Bedrock avec les données DynamoDB :", error.response?.data || error);
    throw error;
  }
}
