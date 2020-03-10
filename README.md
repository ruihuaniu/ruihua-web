# Barton Web Project
> Lazy loading of images and CSS.
> Automatically optimize images.


## Languages & Libraries
 * React / Next.js 
 * D3.js
 * Chart.js
 * Ant Design
 * Node.js / Koa
 * MongoDb
 * Jest
 * Git


 ## Issues, Reasons & Solutions
 1. `require` doesn't work with images
> eg： `<img src={require("../public/images/serene.png")} />` isn't working even the Webpack has been well configured (`esModule:false` with `file-loader` doesn't work), the images just don't show up on the page.    
> The error message is 404 (Not Found), and the Elements is `<img src="[object Module]" >` on DevTools.
    * My fix is to add `.default` at the end of `src` property , like '<img src={require("../public/images/serene.png").default} />`. It's a little weird, but it works.

 2. next-optimized-images plugin doesn't work
    * This plugin must work with `require` or `import` when dealing with images
    * `require` must be statically analyzable, which means it cannot handle with variables
    * My workaround is to add `require` as a prefix in the database, so that the map loop can work well with variables.

