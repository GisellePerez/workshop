const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('vue$','vue/dist/vue.esm.js')
  }
}


