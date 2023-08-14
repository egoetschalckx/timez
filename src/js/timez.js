import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'

const argv = yargs(hideBin(process.argv))
    .help('h')
    .alias('h', 'help')
    .alias('tz', 'timezone')
    .default('tz', 'US/Eastern')
    .describe('tz', 'Timezone')
    .alias('ts', 'timestamp')
    .default('ts', '2023-08-09T21:51:38.625+05:00')
    .describe('ts', 'ISO-8601 timestamp')
    .command('$0', 'Converts ISO-8601 standard timestamps to an arbirary UTC offset / timezone and outputs the result.')
    .epilog('Copyright: NCR Corporation (2023)')
    .argv

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

const convertedTs = dayjs(argv.ts).tz(argv.tz)

console.log(
    // Day (eg: Wed)
    chalk.blueBright.bold(convertedTs.format('ddd')) 
    + ', ' 
    // Date (eg: Aug 09 2023)
    + chalk.magenta.bold(convertedTs.format('MMM DD YYYY')) 
    + ' @ ' 
    // Time (eg: 05:50:00.010 PM)
    + chalk.red.bold(convertedTs.format('hh:mm:ss.SSS A')) 
    + ' ' 
    // Timezone (eg: EDT (Eastern Daylight Time))
    + chalk.yellow.bold(convertedTs.format('z (zzz)')))
