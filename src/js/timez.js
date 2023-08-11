var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')
var advancedFormat = require('dayjs/plugin/advancedFormat')

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

const timestamp = '2023-07-14T20:22:46.697Z'
const tz = "US/Central"

let ts = dayjs(timestamp).tz(tz)
console.log(ts.format('ddd, MMM DD YYYY hh:mm:ss.SSS A z (zzz)'))
