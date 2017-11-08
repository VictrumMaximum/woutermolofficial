const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const pages = [
    "Tour",
    "Bio",
    "OutOfSkin",
    "Press",
    "Contact",
    "TourMenu"
];

const config = {
    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json", ".css"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.(tsx|ts)$/,
                loader: "ts-loader"
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: [{
                        loader: 'style-loader'
                    }],
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: 'less-loader'
                    }]
                })
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
					]
			},
            {
                test: /\.(jpe?g|png|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]'
				}
            }

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

module.exports = pages.map((page) => {
    return Object.assign({}, config, {
        context: path.join(__dirname),
        entry: "./src/" + page + "/index.tsx",
        output: {
            filename: page + ".bundle.js",
            path: __dirname + "/../build/server/client/" + page
        },

        plugins: [
            new HTMLWebpackPlugin({
                template: "./src/" + page + "/index.html"
            }),
            new ExtractTextPlugin("style.css"),
            new webpack.ProvidePlugin({
                React: "React", react: "React", "window.react": "React", "window.React": "React"
            })
        ]
    });
});
