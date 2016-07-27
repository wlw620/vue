var webpack = require('webpack');

module.exports = {
    index: {
        entry: {
            app: './src/main'
        },
        output: {
            path: './dist',
            filename: '[name].js'
        },
        module: {
            loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            }]
        },
        babel: {
            presets: ['es2015']
        },
        plugins: [
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false
            //     }
            // }),
            new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js')
        ],
        stats: {
            // Configure the console output
            colors: false,
            modules: true,
            reasons: true
        }
    }
}
