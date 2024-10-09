/**
 * @file Minipulates dates into formats provided by user
 * @author David Billingsley
 * @version 0.0.1
 */

import addDaysToDate from './src/Days/dayadd'
import removeDaysFromDate from './src/Days/dayremove'
import epocMilliConversion from './src/epocToDate/epocMilli'

/**
 * Takes the date provided by the user and applies the addition of days
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfDays - The amount of days that you would like to increase the date by
 * @returns {Date} newDate - The new date from the calculation
 */
const dayAdd = async (date, numberOfDays) => {
    const newDate = await addDaysToDate(date, numberOfDays)
    return newDate
}

/**
 * Takes the date provided by the user and subtracts the number of days
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfDays - The amount of days that you would like to decrease the date by
 * @returns {Date} newDate - The new date from the calculation
 */
const dayMinus = async (date, numberOfDays) => {
    const newDate = await removeDaysFromDate(date, numberOfDays)
    return newDate
}

// const epocMilli = async(date, dateoptions) => {
//     const result = await epocMilliConversion(date, dateoptions)
//
//     return result
// }

module.exports = {dayAdd, dayMinus, epocMilli}
