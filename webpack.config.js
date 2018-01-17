const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const PurifyCSSPlugin = require("purifycss-webpack");
const extractTextPlugin = require("extract-text-webpack-plugin");
const providePlugin = new webpack.ProvidePlugin({$: 'jquery',jQuery: 'jquery','window.jQuery':'jquery'});

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        publicPath: "http://localhost:1717/",
       filename: 'index.js' 
    },
    module:{
        rules:[{
            test:/\.css$/,
            use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {loader: 'css-loader'},
                    {loader: "postcss-loader"}
                ]
            })
        },{
            test:/\.(png|jpg|gif|jpeg)/,
            use:[{
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    outputPath: 'images/'
                    // 默认图片打包完在dist目录下，这样写可以输出到images目录下
                }
            }]
        },{
            test:/\.(htm|html)$/i,
            use:[{
                loader: "html-withimg-loader"
            }]
        },{
            test:/\.less$/,
            use:  [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }   , {
                loader: "less-loader" // compiles Less to CSS
            }]
        },{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        providePlugin,
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new extractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        }),
        new uglify()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:1717
    }
};