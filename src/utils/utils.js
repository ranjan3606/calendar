export const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
export const months = [
	null,
  'January', 
	'February',
	'March', 
	'April', 
	'May', 
	'June', 
	'July', 
	'August',
	'September',
	'October',
	'November',
	'December'
];
export const eventTypes = ['Company Events', 'Holidays', 'Birthdays', 'Miscellaneous'];
export function timesSort(times) {
	return times.sort(function (a, b) {
		return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
	});
}

export function getDaysArray(year, month) {
	const names = [ 'Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat' ];
	let date = new Date(year, month-1, 1);
  const result = [[], [], [], [], []];
  let week = 0;
  while (date.getMonth() == month-1 && week < 6) {
    /* If there are 5 rows to be rendered, create an extra week */
    if (week === 5) result[5] = []; 		
    result[week].push(date.getDate()+ '-' +names[date.getDay()]);
    if (names[date.getDay()] =='Sat') week++;
    date.setDate(date.getDate()+1);
	}
  return result;
}

/* Random key generator for lists */
export function uniqueID () {
  return '_' + Math.random().toString(36).substr(2, 7);
}

export function daysInMonth(month,year) {
	return new Date(year, month, 0).getDate();
}

export let now = new Date();

export const colorMap = {
	'Birthdays': '#AB47BC',
	'Holidays': '#FFCA28',
	'Company Events': 'green',
	'Miscellaneous': '#00BFA5',
}

/*Experimental!*/
export let defaultEvents = [
	{key: '1af23', start_amPm: "AM", end_amPm: 'AM', date: "2", start_hour: 8, end_hour: 10, start_minute: "30", end_minute: "30", month: "August", name: "Work Event", type: "Company Events", },
	{key: 'a2jfe', start_amPm: "AM", end_amPm: 'AM', date: "12", start_hour: 8, end_hour: 8, start_minute: "30", end_minute: "30", month: "August", name: "Moms Bday", type: "Birthdays"},
	{key: 'a2jfe0', start_amPm: "AM", end_amPm: 'PM', date: "19", start_hour: 10, end_hour: 8, start_minute: "30", end_minute: "30", month: "August", name: "Go To Market", type: "Miscellaneous"},
	{key: 'a93lj', start_amPm: "AM", end_amPm: 'PM',date: "10", start_hour: 10, end_hour: 8,start_minute: "30", end_minute: "30", month: "August", name: "Labor Day", type: "Holidays"},
	{key: 'bk390', start_amPm: "AM", end_amPm: 'PM', date: "7", start_hour: 10, end_hour: 8,start_minute: "30", end_minute: "30", month: "August", name: "Xmas in August", type: "Holidays"},
	{key: 'bkelan',start_amPm: "AM", end_amPm: 'PM', date: "28", start_hour: 10, end_hour: 1, start_minute: "30", end_minute: "30", month: "August", name: "Not my birthday", type: "Birthdays"},	
]


