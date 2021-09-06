FROM nginx:1.19.2-alpine

RUN apk add bash
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d