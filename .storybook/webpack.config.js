const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ( { config, mode } ) => {
	config.optimization = {
		...config.optimization,
		splitChunks: {
			cacheGroups: {
				style: {
					name: 'app',
					test: /app\.s?css$/,
					chunks: 'all',
					enforce: true,
				},
				editor: {
					name: 'app-rtl',
					test: /app-rtl\.s?css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	};

	config.plugins.push( new MiniCssExtractPlugin({
		filename: '[name].css',
	}) );

	config.module.rules.push(
		{
			test: /\.scss$/,
			use: [ 'style-loader', 'css-loader', 'sass-loader' ],
		},
		{
			test: /\.css$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: true,
					},
				},
				'css-loader'
			],

		},
		{
			test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
			loader: 'file-loader'
		},
	);

	config.resolve = {
		alias: {
			"elementor-app": path.resolve(__dirname, '../src/js/'),
			"@elementor/router": path.resolve(__dirname, '../src/router'),
			"e-storybook": path.resolve(__dirname, '../'),
			"@eps": path.resolve(__dirname, '../src/eps/'),
		},
		extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'],
	};

	return config;
};