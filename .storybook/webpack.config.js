const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias['@'] = path.join(__dirname, '..', 'src')
  return config
}