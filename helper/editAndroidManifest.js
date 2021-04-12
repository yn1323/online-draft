/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const xml2js = require('xml2js')

const parser = new xml2js.Parser()
const xmlBuilder = new xml2js.Builder()

const { readJson } = require('./common')

const androidManufest = './android/app/src/main/AndroidManifest.xml'

const appInfo = readJson('./app.json')
const { permissionXML } = appInfo

fs.readFile(androidManufest, (err, data) => {
  if (err) {
    console.log(err)
  }
  parser.parseString(data, (err, result) => {
    if (err) {
      console.log(err)
    }

    permissionXML.forEach(({ tag, attr }) => {
      if (result.manifest[tag]) {
        result.manifest[tag].push({
          $: {
            [attr.name]: attr.val,
          },
        })
      } else {
        result.manifest[tag] = [
          {
            $: {
              [attr.name]: attr.val,
            },
          },
        ]
      }
    })
    var xml = xmlBuilder.buildObject(result)
    fs.writeFileSync(androidManufest, xml)
  })
})
