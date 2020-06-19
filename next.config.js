module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: ['json-loader', 'yaml-loader']
    })
    return config
  }
}
