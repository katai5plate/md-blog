const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    webpack(config, options) {
        config = {
            ...config
        }
        return config
    }
})