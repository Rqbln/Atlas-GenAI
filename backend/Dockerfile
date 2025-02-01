FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

COPY --from=builder /app /app

RUN npm install -g serverless

CMD ["serverless", "deploy", "--stage", "prod"]
