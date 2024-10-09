/**
 * @file Adds days to the number of days provided
 * @author David Billingsley
 * @version 0.0.1
 */

/**
 * Takes the date provided by the user and applies the subtract of days
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfDays - The amount of days that you would like to decrease the date by
 * @returns {Date} date - The new date from the calculation
 */
const removeDaysFromDate = (date, number) => {
    date.setDate(date.getDate() - number)

    return date
}

module.exports = {removeDaysFromDate}