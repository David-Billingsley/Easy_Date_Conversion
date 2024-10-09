import addDaysToDate from './src/Days/dayadd'
import removeDaysFromDate from './src/Days/dayremove'
import epocMilliConversion from './src/epocToDate/epocMilli'

const dayAdd = async (date, numberOfDays) => {
    const result = await addDaysToDate(date, numberOfDays)
    return result
}

const dayMinus = async (date, numberOfDays) => {
    const result = await removeDaysFromDate(date, numberOfDays)
    return result
}

const epocMilli = async(date, dateoptions) => {
    const result = await epocMilliConversion(date, dateoptions)

    return result
}

module.exports = {dayAdd, dayMinus, epocMilli}
