const currentTask = process.env.npm_lifecycle_event;
const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const fse = require('fs-extra');

const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-mixins'),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('postcss-hexrgba'),
	require('autoprefixer'),
];

class RunAfterCompile {
	apply(compiler) {
		compiler.hooks.done.tap('Copy images', function() {
			fse.copySync('./src/assets/images', './docs/assets/images')
		});
	}
}

let cssConfig = {
	test: /\.css$/i,
	use: ['css-loader?url=false', {
		loader: 'postcss-loader',
		options: {
			plugins: postCSSPlugins
		}
	}]
}

let pages = fse.readdirSync("./src").filter(file => {
	return file.endsWith('.html');
}).map( page => {
	return new HtmlWebpackPlugin({
		filename: page,
		template: `./src/${page}`,
	});
});

let config = {
	entry: './src/assets/scripts/App.js',
	plugins: pages,
	module: {
		rules: [
			cssConfig
		]
	},
};

if (currentTask === 'dev') {		
	cssConfig.use.unshift('style-loader');

	config.output = {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'src'),
	};

	config.devServer = {
		before: function(app, server) {
			server._watch('./src/**/*.html')
		},
		contentBase: path.join(__dirname, 'src'),
		hot: true,
		port: 3000,
		host: '0.0.0.0',
	};
	config.mode = "development";
}

if (currentTask === "prod") {
	config.module.rules.push({
		test: /\.js$/,
		exclude: /(node_modules)/,
		use: {
			loader: 'babel-loader', 
			options: {
				presets: ['@babel/preset-env']
			}
		}
	});
	cssConfig.use.unshift(MiniCssExtractPlugin.loader);

	postCSSPlugins.push(require('cssnano'));

	config.output = {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js', 
		path: path.resolve(__dirname, 'docs'),
	};
	config.mode = "production";
	config.optimization = {
		splitChunks: {chunks: 'all'}
	};

	config.plugins.push(
		new CleanWebpackPlugin(), 
		new MiniCssExtractPlugin({filename: "style.[chunkhash].css"}),
		new RunAfterCompile()
	);
}


module.exports = config;