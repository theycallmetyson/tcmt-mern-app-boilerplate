FROM node:alpine as ts-compiler-backend
WORKDIR /usr/app
COPY backend/package*.json ./
COPY backend/tsconfig*.json ./
RUN npm ci --omit=optional --quiet
COPY backend/ ./
RUN npm run build

FROM node:alpine as ts-remover-backend
WORKDIR /usr/app
COPY --from=ts-compiler-backend /usr/app/package*.json ./
COPY --from=ts-compiler-backend /usr/app/dist ./
RUN npm ci --omit=optional --quiet

FROM gcr.io/distroless/nodejs:14
WORKDIR /usr/app
COPY --from=ts-remover-backend /usr/app ./
CMD ["index.js"]