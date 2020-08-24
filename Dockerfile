# Build phase
FROM node:alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN yarn build

# Run phase
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
