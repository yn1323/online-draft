/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const readJson = filePath => {
  let rawdata = fs.readFileSync(filePath)
  return JSON.parse(rawdata)
}

const convertOptions = arr => {
  const options = {}
  let optionName = ''
  arr.forEach(v => {
    if (optionName) {
      options[optionName] = v
      optionName = ''
    }
    if (v.startsWith('--')) {
      options[v.replace('--', '')] = ''
      optionName = v.replace('--', '')
    }
  })
  return options
}

module.exports = {
  readJson,
  convertOptions,
}
