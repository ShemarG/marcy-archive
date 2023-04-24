# Our Node base image
FROM node:18-alpine

WORKDIR /app
COPY . .

# Install Node modules
RUN npm ci
RUN npm run build

# Copy over rest of the project files
COPY . .

EXPOSE 4173

# Run `yarn dev` and set the host to 0.0.0.0 so we can access the web app from outside
CMD ["npm", "run", "preview"]