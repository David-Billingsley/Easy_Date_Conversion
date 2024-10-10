/**
 * @file subtract the number of months from the date provided
 * @author David Billingsley
 * @version 0.0.1
 */

/**
 * Takes the date provided by the user and applies the subtract of days
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfMonths - The amount of days that you would like to decrease the date by
 * @returns {Date} date - The new date from the calculation
 */
const removeMonthsFromDate = (date, numberOfMonths) => {
    if (typeof date === "string"){
    let datestring = new Date(date)
    datestring.setMonth(datestring.getMonth() - numberOfMonths)
        return datestring
    }else {
        date.setMonth(date.getMonth() - numberOfMonths)
        return date
    }

}

module.exports = {removeMonthsFromDate}