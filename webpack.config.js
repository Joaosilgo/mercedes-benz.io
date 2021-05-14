
/*

const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].[contenthash:8].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]",
                },
            },
            {
                test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]",
                    outputPath: "assets/img",
                    esModule: false,
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].css",
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: "./public/favicon.ico",
        }),
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.runtime.esm.js",
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
    optimization: {
        moduleIds: "hashed",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -10,
                    chunks: "all",
                },
            },
        },
    },
    devServer: {
        historyApiFallback: true,
    },
};

*/








const HtmlwebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const { VuetifyLoaderPlugin } = require('vuetify-loader');
//const WorkboxPlugin = require('workbox-webpack-plugin');
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const { VuetifyLoaderPlugin } = require('vuetify-loader')

module.exports = {

    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                }

            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }

                    }
                ]
            },
            /*
                        {
                            test: /\.(jpeg|png|jpg)$/i,
                            use: [{
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: 'images',
                                    publicPath: 'images',
                                    emitFile: true,
                                    esModule: false
                                }
                            },]
            
            
            
            
                            // loader: 'file-loader',
                            //  use: [
                            //  'file-loader'
                            //   ],
                            // options: {
                            //  name: '[name].[hash:6].[ext]',
                            //  name: '[name].[ext]',
            
                            //  outputPath:'images',
                            //  publicPath:'images',
                            /// emitFile: true,
                            //esModule:false
            
            
                            //  }
            
                            // use: [
                            //     'file-loader'
                            // ]
            
                        },
                        */

            {
                test: /\.(woff(2)?|ttf|eot|svg|gif|png|jpe?g)$/,
                loader: 'url-loader',
                options: {
                    limit: 60,
                    fallback: 'file-loader',
                    publicPath: './img',
                    outputPath: './img',
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]

            },

            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        //« Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            indentedSyntax: true // optional
                        },
                        // Requires >= sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },



        ]
    },


    plugins: [

        // new HtmlwebPackPlugin({
        //    template: "./src/index.html",
        //   filename: "./index.html"
        //}),
        new CleanWebpackPlugin(),
        new HtmlwebPackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            inject: true
            //   favicon: "./public/favicon.ico",
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin(),

        /*
                new CopyWebpackPlugin({
                    patterns: [
                        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') ,toType: 'dir' },
        
                        
                      //  { toType: 'dir' }
                    ]
                }),
              **/

        //       new SWPrecacheWebpackPlugin({
        //           cacheId: 'my-pwa-vue-app',
        //           filename: 'service-worker-cache.js',
        //           staticFileGlobs: ['dist/**/*.{js,css}', '/'],
        //           minify: true,
        //           stripPrefix: 'dist/',
        //           dontCacheBustUrlsMatching: /\.\w{6}\./
        //      })
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,

        }),
        new WebpackPwaManifest({
            short_name: 'Mercedes-Benz.IO',
            name: 'Mercedes-Benz.IO PWA',
            description: 'Mercedes-Benz.IO ShowCase',
            start_url: '/mercedes-benz.io/?source=pwa',
            publicPath: 'https://joaosilgo.github.io/mercedes-benz.io',
            background_color: '#00adef',
            display: 'fullscreen',
            dir: 'auto',
            lang: 'pt',
            prefer_related_applications: false,
            url: 'https://joaosilgo.github.io/mercedes-benz.io',
            screenshots: [],
            shortcuts: [
                {
                    name: 'Mercedes-Benz.IO • ',
                    short_name: 'Mercedes-Benz.IO • ',
                    description: 'Mercedes-Benz.IO • ',
                    url: '/mercedes-benz.io/?utm_source=homescreen',
                    icons: [
                        {
                            src: path.resolve('public/icons/192.png'),
                            sizes: '192x192'
                        }
                    ]
                }
            ],
            categories: [
                'Vue',
                'Mercedes-Benz.IO',
                'Frontend'
            ],
            orientation: 'portrait',
            theme_color: '#00adef',
            scope: '/mercedes-benz.io/',


            icons: [
                {
                    src: path.resolve('public/icons/192.png'),
                    type: 'image/png',
                    sizes: '192x192',
                },
                {
                    src: path.resolve('public/icons/180.png'),
                    type: 'image/png',
                    sizes: '180x180',
                },
                {
                    src: path.resolve('public/icons/32.png'),
                    type: 'image/png',
                    sizes: '32x32',
                },
            ],
        }),



    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.runtime.esm.js",
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },

}


