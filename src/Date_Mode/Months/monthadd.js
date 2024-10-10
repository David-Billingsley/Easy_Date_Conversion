/**
 * @file Adds days to the number of months provided
 * @author David Billingsley
 * @version 0.0.1
 */

/**
 * Takes the date provided by the user and applies the addition of days
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfMonths - The amount of days that you would like to increase the date by
 * @returns {Date} date - The new date from the calculation
 */
const addMonthsToDate = (date, number) => {
    if (typeof date === 'string'){
    let datestring = new Date(date)
    datestring.setMonth(datestring.getMonth() + number)

    return datestring
    }
    else{
        date.setMonth(date.getMonth() + number)
        return date
    }
}

module.exports = {addMonthsToDate}