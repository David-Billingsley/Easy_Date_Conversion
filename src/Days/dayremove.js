const removeDaysFromDate = (date, number) => {
    date.setDate(date.getDate() - number)

    return date
}

module.exports = {removeDaysFromDate}