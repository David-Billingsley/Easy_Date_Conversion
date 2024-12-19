/**
 * @file Manipulates dates into formats provided by user
 * @author David Billingsley
 * @version 0.0.1
 */

const { addDaysToDate } = require("./src/Date_Mode/Days/dayadd.js");
const { removeDaysFromDate } = require("./src/Date_Mode/Days/dayremove.js");
const { addMonthsToDate } = require("./src/Date_Mode/Months/monthadd.js");
const {
  removeMonthsFromDate,
} = require("./src/Date_Mode/Months/monthremove.js");
const { DayofYear } = require("./src/Conversions/DayOfYear.js");

// Date Calculations Section

/**
 * Takes the date provided by the user and applies the addition of days
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfDays - The amount of days that you would like to increase the date by
 * @returns {Date} newDate - The new date from the calculation
 */
const dayAdd = (date, numberOfDays) => {
  const newDate = addDaysToDate(date, numberOfDays);
  return newDate;
};

/**
 * Takes the date provided by the user and subtracts the number of days
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfDays - The amount of days that you would like to decrease the date by
 * @returns {Date} newDate - The new date from the calculation
 */
const dayMinus = (date, numberOfDays) => {
  const newDate = removeDaysFromDate(date, numberOfDays);
  return newDate;
};

/**
 * Takes the date provided by the user and adds the number of months
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfMonths - The amount of months that you would like to decrease the date by
 * @returns {Date} newDate - The new date from the calculation
 */
const monthAdd = (date, numberOfMonths) => {
  const newDate = addMonthsToDate(date, numberOfMonths);
  return newDate;
};

/**
 * Takes the date provided by the user and subtracts it by the number of months
 * @param {Date} date - The Date that the user wants to modify.
 * @param {int} numberOfMonths - The amount of months that you would like to decrease the date by
 * @returns {Date} newDate - The new date from the calculation
 */
const monthMinus = (date, numberOfMonths) => {
  const newDate = removeMonthsFromDate(date, numberOfMonths);
  return newDate;
};

// Date Conversion Section

/**
 * Takes the date provided by the user and returns the day of the year
 * @param {Date} date - The Date that the user wants to get the day of year.
 * @returns {int} result - The day of year from the date provided.
 */
const DayOfYear = (date) => {
  const result = DayofYear(date);

  return result;
};

module.exports = { dayAdd, dayMinus, monthAdd, monthMinus, DayOfYear };
