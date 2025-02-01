FROM node:18 AS builder

WORKDIR /app

COPY ../../package*.json ../../tsconfig*.json ./

RUN npm install

COPY ../../app ./app

FROM node:18 AS production

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

CMD ["sh", "-c", "npm run dev"]
