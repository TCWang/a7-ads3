const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/a7-ads3/" : "/",
  transpileDependencies: true,
});
