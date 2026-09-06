import path from 'node:path';
import {fileURLToPath} from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default{
    entry:{
        app: './src/index.js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html'
        }),
    ],
    module:{
        rules:[
            {
             test: /\.css$/i,
             use:["style-loader","css-loader"],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource', // Webpack 5 built-in tool (no npm install needed)
            },
            // 2. FONTS: Handles woff, woff2, eot, ttf, otf
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            // 3. HTML: Allows you to import or reference images directly inside your source HTML templates

        ],
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};