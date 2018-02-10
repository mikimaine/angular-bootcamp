# Stage 1 - the build process, new container with node8.4
FROM node:8.4.0 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN npm install
COPY . ./
RUN npm run build

# # Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
