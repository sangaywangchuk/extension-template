const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss')

module.exports = {
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.tsx'),
    /*Adding Side Panel*/
    sidePanelLogin: path.resolve('src/sidePanel/sidePanelLogin.tsx'),
    sidePanelContent: path.resolve('src/sidePanel/sidePanelContent.tsx')
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              indent: "postcss",
              plugins: [tailwindcss, autoprefixer]
            }
          }
        }],
        test: /\.scss$/i
      },
      {
        type: 'styles/stylesheets',
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/public'),
          to: path.resolve('build')
        }
      ]
    }),
    /*Added 'sidePanel' here*/
    ...getHtmlPlugins(['popup', 'options', 'contentScript', 'sidePanelLogin', 'sidePanelContent'])
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'contentScript'
      },
    }
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: "React Extension",
    filename: `${chunk}.html`,
    chunks: [chunk]
  }))
}