// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
//PROBLEM 1:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -What is temp amplitude? Answer: difference between the highest and lowest temp in the array
// -How to compute max and min temperatures?
// -What's a sensor error? And what to do if one occurs?

// 2) Breaking up into sub-problems
// -How to ignore errors?
// -Find max value in temp array
// -Find min value in temp array
// -Subtract min from max(amplitude) and return it

const calcTempAmplitude = function (temps) {
	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
//Function should now receive 2 arrays of temps

// 1) Understanding the problem
// -With 2 arrays, should we implement the same functionality twice? NO! Just merge the 2 arrays

// 2) Breaking up into sub-problems
// -Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
	const temps = t1.concat(t2);
	console.log(temps);

	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//Debugging with Console and Breakpoints
const measureKelvin = function () {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		// C) FIX
		// value: Number(prompt('Degrees celsius:')),
		value: 10,
	};

	// B) FIND
	console.table(measurement);

	// console.log(measurement.value);
	// console.warn(measurement.value);
	// console.error(measurement.value);

	const kelvin = measurement.value + 273;
	return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
	const temps = t1.concat(t2);
	console.log(temps);

	let max = 0;
	let min = 0;

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

//////////////////////////////////////////////
// Coding Challenge #1

/*
given an arrary of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print ..."??17*C??in??1??days??...??21*C??in??2??days??...??23*C??in??3??days??..."

Create a function 'printForecast' which takes in the array 'arr' and logs a string like above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//SOLUTION

// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? Answer: index of the array + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with *C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

console.log(`...${t1[0]}*C ... ${t1[1]}*C ... ${t1[2]}*C ...`);

const printForecast = function (arr) {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += `${arr[i]}*C in ${i + 1} days ...`;
	}
	console.log('...' + str);
};
printForecast(t1);
