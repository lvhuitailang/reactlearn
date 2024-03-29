const path = require('path');
module.exports = {
    mode:'development'
    // mode:'production'
    , module: {
        rules: [
            {test:/\.js|jsx$/,use:['babel-loader'], exclude: /node_modules/},
            //这里exclude后面的值是一个js的正则对象，不是字符串，所以没有引号，所以一定不要以为是字符串的路径
            {
             test:/\.css/,
             use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:{
                                localIdentName:'[path][name]-[local]-[hash:5]'
                            }
                        }
                    }
             ],
            exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],
        alias: {
            '@':path.join(__dirname,'/src')
        }
    }


};