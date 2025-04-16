# node base image
FROM node:20
# work dir id app dir.
WORKDIR /app
# my file copy app dir  flie data is all firts .(dot) my pc file path/ last dot docker file path
COPY . .
# npm install
RUN npm install
# node using port 8080
ENV PORT=8080
EXPOSE 8080
# imege start "node server.js" commed start 
CMD ["node", "server.js"]
