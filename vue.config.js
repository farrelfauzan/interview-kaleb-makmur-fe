const { defineConfig } = require("@vue/cli-service");

const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });
module.exports = defineConfig({
  transpileDependencies: true,
});
