/* global module, require */
const eslintBestPractice = require("./best-practices");
const eslintErrors = require("./errors");
const eslintStrict = require("./strict");
const eslintStyle = require("./style");

module.exports = {
    ...eslintBestPractice,
    ...eslintErrors,
    ...eslintStrict,
    ...eslintStyle,
}