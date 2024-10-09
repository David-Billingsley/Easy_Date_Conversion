/**
 * @file Converts epoc time to date
 * @author David Billingsley
 * @version 0.0.1
 */

/**
 * Takes the epoc time ( integer ) and converts it into the correct corrisponding date
 * @param {int} datenumber - The epoc time.
 * @param {options} options - the values you would like to see, ie en-US, year month day, etc.
 * @returns {Date} date - The new date from the generation based on the params you pass in.
 */

const epocMilliConversion = (datenumber, options) => {
    const datestring = new Date(parseInt(datenumber))
    const formatedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(datestring);

    return formatedDate
}

module.exports = {epocMilliConversion}