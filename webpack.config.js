const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const rootDir = path.resolve(__dirname)


const config = {
	mode: "development",
	entry: "./index.js",
	output: {
		filename: "./bundle.js",
		path: path.resolve(__dirname, "public")
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: `${rootDir}/public/index.html`
		})
	],
	devServer: {
		port: 8001,
		open: false
	}
}

module.exports = config;
