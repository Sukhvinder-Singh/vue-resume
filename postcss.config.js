const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        purgecss({
            content: [
                './src/html/**/*.ejs',
                './src/App/**/*.vue',
                './src/**/*.js',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
                standard: [],
                deep: [],
                greedy: [],
                keyframes: [],
                variables: []
            }
        })
    ]
}