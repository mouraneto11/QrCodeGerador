# base image
FROM node:lts-alpine

# WORKDIR /app and permissions
RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
RUN chown -R app:app /app /usr/local/lib/node_modules /usr/local/bin /usr/local/share/man
USER app

USER root
RUN set -ex && apk --no-cache add sudo

WORKDIR /app
# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY . /app/

RUN sudo npm install --location=global typescript
RUN sudo npm config set legacy-peer-deps true  
RUN sudo npm install --location=global ts-node
RUN sudo npm i typescript --save-dev

# expose app
EXPOSE 9091 9092 49153 9229

CMD ["npm", "start", "pm2-runtime", "node"]