#Use Node v4 as the base image
FROM node:4

#add everything in the current directory to our image, in the 'app' folder
ADD . /app

#install dependencies

RUN cd /app;\
    npm install --production

#expose our server port
EXPOSE 8123

#Run our app
CMD ["node","/app/index.js"]
