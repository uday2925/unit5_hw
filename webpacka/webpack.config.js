const path = require("path");

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"),
        filename:"bundle.js"
        },
    mode:"development",
    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader','css-loader']},
          {test: /\.(png|jpe?g|gif)$/i,use:'file-loader'},
          
        ],
      },        
}   
