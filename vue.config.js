const resolve = require("path").resolve;

module.exports = {
   chainWebpack(config){
        //引入图标
        config.module.rule("svg").exclude.add(resolve("./src/assets/fonts/svg"));
        config.module.rule("icon").test(/\.svg$/)
        .include.add(resolve("./src/assets/fonts/svg")).end()
        .use("svg-sprite-loader")
        .loader("svg-sprite-loader")
        .options({
            symbolId:'icon-[name]'
        });
   },
   css: {
    loaderOptions: {
        scss: {
            prependData: `@import "@/assets/scss/variable.scss";`
        },
    }
   } 
}