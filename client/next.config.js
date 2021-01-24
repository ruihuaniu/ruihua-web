
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images');
// const withImages = require('next-images')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => { }
}

module.exports = withCss(withOptimizedImages({
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //       // test: /\.(png|jpg|gif|svg|ico|eot|ttf|woff|woff2)$/,
  //       use: {
  //         loader: 'file-loader',
  //         options: {
  //           esModule: false
  //           }
  //       }
  //   })
  //   return config
  // },
}))

//module.exports = withCss(withOptimizedImages({})) //refer to https://github.com/cyrilwanner/next-compose-plugins#comparison

// module.exports = withPlugins([
//     [withOptimizedImages, {
//       // these are the default values so you don't have to provide them if they are good enough for your use-case.
//       // but you can overwrite them here with any valid value you want.
//     //   inlineImageLimit: 8192,
//     //   imagesFolder: 'images',
//     //   imagesName: '[name]-[hash].[ext]',
//     //   handleImages: ['jpeg', 'png'],
//       optimizeImages: true,
//       optimizeImagesInDev: true,
//     //   mozjpeg: {
//     //     quality: 80,
//     //   },
//     //   optipng: {
//     //     optimizationLevel: 3,
//     //   },
//     //   pngquant: false,
//     //   gifsicle: {
//     //     interlaced: true,
//     //     optimizationLevel: 3,
//     //   },
//     //   svgo: {
//     //     // enable/disable svgo plugins here
//     //   },
//     //   webp: {
//     //     preset: 'default',
//     //     quality: 75,
//     //   },
//     }],

//     //  withImages,

//     withCss,
//   ]);


// environment variable
// module.exports={
//   env:{

//   }
// }