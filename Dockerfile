FROM node:16 as build-stage

WORKDIR /app
# RUN rm -rf node_modules build
COPY ./ /app/
# even though we are cpoying the whole app, we are moving only build folder into nginx image, which will be the final image
RUN npm install --verbose
ARG ENV=development

# RUN npm rebuild esbuild
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
