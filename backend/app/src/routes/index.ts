import { FastifyInstance } from 'fastify';

import Health from './health';
import { bedrockRoutes } from "./bedrockRoute";

export async function registerRoutes(fastify: FastifyInstance) {
  // ... d'autres routes
  await fastify.register(bedrockRoutes, { prefix: "/api" });
}

export async function router(app: FastifyInstance): Promise<void> {
  app.register(Health, { prefix: '/health' });
}
