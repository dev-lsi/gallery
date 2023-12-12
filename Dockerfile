# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your SPA will run on (adjust as needed)
#EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
