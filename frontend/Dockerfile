FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# build the app
# RUN npm run build

# CMD ["npm", "run", "start"]