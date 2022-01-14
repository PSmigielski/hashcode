module.exports = {
    webpack: {
      configure: (webpackConfig, { env }) => {
        if (env === "production") {
          const instanceOfMiniCssExtractPlugin = webpackConfig.plugins.find(
            (plugin) => plugin.constructor.name === "MiniCssExtractPlugin",
          );
  
          if (instanceOfMiniCssExtractPlugin) {
            instanceOfMiniCssExtractPlugin.options.ignoreOrder = true;
          }
        }
  
        return webpackConfig;
      },
    },
  };