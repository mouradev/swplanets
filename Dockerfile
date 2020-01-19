FROM node:10

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Exports
EXPOSE 3000
CMD [ "npm", "run", "start.dev" ]