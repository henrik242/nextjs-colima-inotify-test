FROM node:18-alpine

RUN corepack enable
WORKDIR /app
COPY . .
ENV PATH="/app/node_modules/.bin:${PATH}"
ENV NODE_ENV=production
EXPOSE 4900
CMD [ "./node_modules/.bin/next", "start", "-p", "4900" ]
