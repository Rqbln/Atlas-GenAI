FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/config/serverless.yml ./serverless.yml
COPY --from=builder /app/package*.json ./

RUN npm ci --production --ignore-scripts

RUN npx serverless plugin install -n serverless-finch

CMD ["npx", "serverless", "deploy", "--force"]
