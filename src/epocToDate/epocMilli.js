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