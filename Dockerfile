FROM node:14

LABEL maintener alexparco16@gmail.com

RUN git clone https://github.com/AlexParco/docker_lab04.git

WORKDIR docker_lab04

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]