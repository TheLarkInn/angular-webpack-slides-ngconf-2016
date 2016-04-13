var path = require('path');

var entryPath = path.resolve(__dirname, './index.js');
var buildPath = path.resolve(__dirname, './build');

module.exports = {
	entry: entryPath,
	output: {
		path: buildPath,
		filename: 'bundle.js',
		// filename: '[name].bundle.js', // Name references the chunk name. In this case its "main".
		// filename: '[id].bundle.js', // Uses the chunk id defined by Webpack. Can be referenced in the terminal output (this would be 0.bundle.js)
		// filename: '[hash].bundle.js', // Unique Hash for Cachebusting
		// filename: '[chunkhash].bundle.js', // Hash for specific chunk
	}
}

