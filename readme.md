# easy_date_conversion

## Addition to Dates
dayAdd
This function adds a provided number of days to the date that is provided.

Parameters:

date (Date): The date that you would like to modify.
numberOfDays (int): The number of days that you would like added to the date you provided.
Example:
```
const { dayAdd } = require('easy_date_conversion');
const newDate = dayAdd(new Date(), 5);
console.log(newDate);
```

## monthAdd
This function adds a provided number of months to the date that is provided.

Parameters:

date (Date): The date that you would like to modify.
numberOfMonths (int): The number of months that you would like added to the date you provided.
Example:

```
const { monthAdd } = require('easy_date_conversion');
const newDate = monthAdd(new Date(), 2);
console.log(newDate);
```

Subtraction to Dates

## dayMinus
This function subtracts a provided number of days from the date that is provided.

Parameters:

date (Date): The date that you would like to modify.
numberOfDays (int): The number of days that you would like subtracted from the date you provided.
Example:
```
const { dayMinus } = require('easy_date_conversion');
const newDate = dayMinus(new Date(), 5);
console.log(newDate);
```

## monthMinus
This function subtracts a provided number of months from the date that is provided.

Parameters:

date (Date): The date that you would like to modify.
numberOfMonths (int): The number of months that you would like subtracted from the date you provided.
Example:
```
const { monthMinus } = require('easy_date_conversion');
const newDate = monthMinus(new Date(), 2);
console.log(newDate);
```


## DayOfYear
This function takes the date provided by the user and returns the day of the year.

Parameters:

date (Date): The date that you want to get the day of the year.
Example:
```
const { DayOfYear } = require('easy_date_conversion');
const dayOfYear = DayOfYear(new Date());
console.log(dayOfYear);
```


## epocMilliConversion
This function takes the epoch time (integer) and converts it into the corresponding date.

Parameters:

datenumber (int): The epoch time.
options (object): The values you would like to see, e.g., en-US, year, month, day, etc.
Example:
```
const { epocMilliConversion } = require('easy_date_conversion');
const date = epocMilliConversion(1609459200000, { year: 'numeric', month: '2-digit', day: '2-digit' });
console.log(date);
```

Feedback / Questions / Issues / Requests
I welcome all feedback. Please add any feedback, questions, or requests to the GitHub issue tracker and I will respond as soon as I can. Thank you.

License
This project is licensed under the MIT License - see the LICENSE file for details.