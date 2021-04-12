/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const { readJson, convertOptions } = require('./common')

const configFile = './capacitor.config.json'

const appInfo = readJson('./app.json')

const configInfo = readJson(configFile)
const { lang } = convertOptions(process.argv)

configInfo.appName = appInfo.appName[lang]

fs.writeFileSync(configFile, JSON.stringify(configInfo, null, 2))
