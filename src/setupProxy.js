const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/proxy',
        createProxyMiddleware(
            {
                target: 'https://3.39.195.116:3000/',
                changeOrigin: true,
            }
        )
    )
}