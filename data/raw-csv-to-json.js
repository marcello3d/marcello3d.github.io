import parse from 'csv-parse'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { safeDump } from 'js-yaml'
import { transformRawData } from './gantt-data'

parse(readFileSync(resolve(__dirname, 'raw.csv')), (error, data) => {
  if (error) {
    throw error
  }

  const yaml = safeDump(transformRawData(data.slice(1)), { skipInvalid: true })
  const path = resolve(__dirname, 'formatted.yaml')
  writeFileSync(path, yaml)
  console.log()
  console.log()
  console.log(yaml)
  console.log()
  console.log(`wrote to ${path}`)
})
