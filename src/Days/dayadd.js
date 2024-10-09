const addDaysToDate = (date, number) => {
    date.setDate(date.getDate() + number)

    return date
}

module.exports = {addDaysToDate}