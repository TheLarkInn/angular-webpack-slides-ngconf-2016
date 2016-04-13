var path = require('path');

var entryPath = path.resolve(__dirname, './index.js');
var entryAltPath = path.resolve(__dirname, './index.alt.js');
var buildPath = path.resolve(__dirname, './build');

module.exports = {
	entry: {
    scriptA: entryPath,
    scriptB: entryAltPath
  },
	output: {
		path: buildPath,
		filename: '[name].bundle.js',
    libraryTarget: 'umd',
    library: 'fun'
	},
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
	progress: true,
  colors: true
}

