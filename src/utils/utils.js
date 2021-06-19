import Joi from "joi";

// function documentation code example below
// consider using a single index file to export all modules - re-export

// import login/logout and immediately export them
// import {login, logout} from './helpers.js';
// export {login, logout};

// re-export login/logout
// export {login, logout} from './helpers.js';

// import default as User and export it
// import User from './user.js';
// export {User};

/**
 * Add two numbers together
 * @param  {Number} num1 The first number
 * @param  {Number} num2 The second number
 * @return {Number}      The total of the two numbers
 */
// var addTwoNumbers = function (num1, num2) {
// 	return num1 + num2;
// };

// utils
/*

1. viewport checker
2. screens selector
3. data fetching & sending library
4. live streaming 
5. network status broadcaster (online/offline)
6. social interactions utilities (tools handling n effecting)
7. slug producer - url friendly creator - take strings n turn into url friendly text

*/

// function sayHi(user) {
// 	alert(`Hello, ${user}!`);
// }

// function sayBye(user) {
// 	alert(`Bye, ${user}!`);
// }

const validateLogin = (user) => {
	const schema = Joi.object({
		username: Joi.string().min(4).max(100).required().label("Username"),
		password: Joi.string().min(6).max(100).required().label("Password"),
	});

	return schema.validate(user);
};

// @BUG: email validation isnt working when email mthd attached to key
const validateSignup = (userData) => {
	const schema = Joi.object().keys({
		firstname: Joi.string().min(3).max(255).required().label("First name"),
		lastname: Joi.string().min(3).max(255).required().label("Last name"),
		username: Joi.string().min(4).max(100).required().label("Username"),
		phoneNumber: Joi.string().min(10).max(17).required().label("Phone number"),
		email: Joi.string().required().label("Email"),
		password: Joi.string().min(6).max(100).required().label("Password"),
		confirmPassword: Joi.string()
			.min(6)
			.max(100)
			.required()
			.label("Confirm Password"),
	});

	return schema.validate(userData);
};

export { validateLogin, validateSignup };
