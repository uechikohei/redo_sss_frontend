const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyCz8-eiW0UEmW3w5JDkEixpWmzeDLdasUY"',
  PROJECT_ID: '"redo-sss"',
  AUTH_DOMAIN: '"redo-sss.firebaseapp.com"',
  DATABASE_URL: '"**********"',
  STORAGE_BUCKET: '"redo-sss.appspot.com"',
  MESSAGING_SENDER_ID: '"1034913408284"',
  APP_ID: '"1:1034913408284:web:cd7be01092049ffb9a46d9"',
  API_ENDPOINT: '"http://localhost3001"'
})

