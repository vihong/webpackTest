module.exports = {
    watch: true,
    entry: "./js/script2.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
          { test: /\.txt$/, use: 'babel' }
        ]
      }
};