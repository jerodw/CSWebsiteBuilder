require('ignore-styles');
require('url-loader');
require('file-loader');
require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        'syntax-dynamic-import',
        'dynamic-import-node',
        '@babel/plugin-proposal-class-properties',
    ],
    extensions: ['.ts', '.jsx', '.tsx', '.js']
});
require('./gdocCleaner.ts');