/* global module, require */

"use strict";

const pluginJs = require("@eslint/js");

const eslintRules = require("./eslint-rules/eslint-rules")

module.exports = [
    pluginJs.configs.recommended,
   {
    files: ["api-server/**"],
    languageOptions: {
        parserOptions: {
          sourceType: "commonjs",
        }
      },
      ...eslintRules
   },
];
