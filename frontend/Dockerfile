FROM node:alpine as ts-compiler-frontend
WORKDIR /usr/app
COPY frontend/package*.json ./
COPY frontend/tsconfig*.json ./
RUN npm ci --omit=optional --quiet
COPY frontend/ ./
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=ts-compiler-frontend /usr/app/dist /usr/share/nginx/html