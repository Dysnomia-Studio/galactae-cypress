// Numbers
const regexStr_number = '[0-9]+';
const regexStr_float = '[0-9]+(.[0-9])?';

// Quantities
const regexStr_quantityUnit = '(K|M|G|T|P|E|Z|Y)?';
const regexStr_float_quantity = regexStr_float + regexStr_quantityUnit;

// RegExp list
export default {
	isNumber: new RegExp('^' + regexStr_number + '$'),
	isNumberSlashNymber: new RegExp('^' + regexStr_number + '\\/' + regexStr_number + '$'),

	isQuantity: new RegExp('^' + regexStr_float_quantity + '$'),
	isQuantityPerHour: new RegExp('^' + regexStr_float_quantity + '\\/h$'),

	isMass: new RegExp('^' + regexStr_float_quantity + 't$'),
	isMassPerHour: new RegExp('^' + regexStr_float_quantity + 't/h$'),

	isEnergy: new RegExp('^' + regexStr_float_quantity + 'Wh$'),

	isPointsCount: new RegExp('^' + regexStr_float_quantity + ' pts$'),

	isPercentage: new RegExp('^' + regexStr_number + '%$'),
};