import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'

const argv = yargs(hideBin(process.argv))
    .default('tz', 'US/Eastern')
    .default('ts', '2023-08-09T21:51:38.625+05:00')
    .argv

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

const ts = argv.ts
const tz = argv.tz

const convertedTs = dayjs(ts).tz(tz)
const outputDay = convertedTs.format('ddd')
const outputMDY = convertedTs.format('MMM DD YYYY')
const outputHMS = convertedTs.format('hh:mm:ss.SSS A')
const outputTz = convertedTs.format('z (zzz)')

console.log(chalk.blue(outputDay) + ', ' + chalk.magenta(outputMDY) + ' ' + chalk.red(outputHMS) + ' ' + chalk.yellow(outputTz))
