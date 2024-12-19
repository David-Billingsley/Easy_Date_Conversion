/**
 * @file Returns the day number for the year
 * @author David Billingsley
 * @version 0.0.1
 */

/**
 * Takes the date provided by the user and applies the addition of days
 * @param {Date} date - The Date that the user wants to see the number of days
 * @returns {dayNum} int - The number of days to get to the date
 */
const DayofYear = (date) => {
  var dayNum;
  dayNum = Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  return dayNum;
};
