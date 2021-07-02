const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./src/index.js", // string | object | array
   
  output: {
   
    path:path.resolve(__dirname, "build"), // string (default)
    
    filename: "[name].js", // string (default)
     
    
  },
  
  devtool: "source-map", // enum
   
  target: "web",  
  externals:['react','react-dom'],
  module: {
    rules: [
      {
        oneOf: [
           
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(process.cwd(),'src/'),
            exclude: /(node_modules)/,
            loader: require.resolve('babel-loader'),
            options: {
              presets:  ['@babel/preset-env','@babel/preset-react'],
              plugins:  [],
            },
          },
             
        ],
      },
    ],
  },
  
  plugins:[
    new BundleAnalyzerPlugin(),
 ]
   
}