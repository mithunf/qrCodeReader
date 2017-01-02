module.exports = {
    entry: "./public/js/script.js",
    output: {
        path: __dirname + 'public/build/',
        filename: "bundle.js"
    },

 module: {
        loaders: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
			   loader: 'babel-loader',
			    query: {
                     presets: ['es2015']
                 }         

    		}
        ]
    }

   
};
