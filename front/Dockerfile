FROM node:16-alpine as builder
RUN mkdir -p /app 
WORKDIR /app 
COPY package.json ./
RUN npm install 
COPY ./ ./
RUN npm run build 

FROM nginx:alpine 
COPY --from=builder /app/build /usr/share/nginx/html 