const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

module.exports = withTypescript(
	withCSS({
		webpack(config, options) {
			// Do not run type checking twice:
			if (!options.isServer) {
				/* Using next-css */
				for (let entry of options.defaultLoaders.css) {
					if (entry.loader === "css-loader") {
						entry.loader = "typings-for-css-modules-loader";
						break;
					}
				}
			}
			if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());
			config.resolve = {
				alias: {
					...config.resolve.alias,
					app: path.resolve(__dirname, "./"),
					scr: path.resolve(__dirname, "./src/")
				},
				extensions: [...config.resolve.extensions, ".ts", ".tsx", ".js", ".json", ".css"]
			};
			return config;
		},
		cssModules: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: "[name]__[local]--[hash:base64:5]",
			camelCase: true,
			namedExport: true
		}
	})
);
