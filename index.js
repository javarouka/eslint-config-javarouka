module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "react"
  ],
  // @see http://eslint.org/docs/rules/
  "rules": {
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "no-useless-rename": 2, // http://eslint.org/docs/rules/no-useless-rename
    "constructor-super": 2,          // http://eslint.org/docs/rules/constructor-super
    "no-this-before-super": 2,          // http://eslint.org/docs/rules/no-this-before-super
    "generator-star-spacing": ["error", {"before": false, "after": true}],  // http://eslint.org/docs/rules/generator-star-spacing
    "require-yield": 2,          // http://eslint.org/docs/rules/require-yield
    "no-global-assign": 2,          // disallow assignments to native objects or read-only global variables
    "no-redeclare": 2,          // disallow variable redeclaration
    "no-ex-assign": 2,          // disallow reassigning exceptions in catch clauses
    "no-obj-calls": 2,          // disallow calling global object properties as functions
    "no-shadow": 1,                   // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 1,  // disallow shadowing of names such as arguments
    "no-undef": 2,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": 1,               // disallow use of undefined when initializing variables
    "no-undefined": 2,                // disallow use of undefined variable (off by default)
    "no-unused-vars": 2,              // disallow declaration of variables that are not used in the code
    "no-use-before-define": 1,        // disallow use of variables before they are defined
    "quotes": [2, "single", { "avoidEscape": true }],
    "no-bitwise": 2,            // disallow use of bitwise operators (off by default)
    "no-var": 2,                // require let or const instead of var (off by default)
    "no-console": 1,            // disallow use of console (off by default in the node environment)
    "no-debugger": 1,           // disallow use of debugger
    "block-spacing": 2,           // disallow deleting variables
    "func-call-spacing": 2, // http://eslint.org/docs/rules/func-call-spacing
    "no-delete-var": 2,           // disallow deleting variables
    "brace-style": [2, "stroustrup"], // http://eslint.org/docs/rules/brace-style
    "no-dupe-keys": 2,          // disallow duplicate keys when creating object literals
    "no-invalid-regexp": 1,     // disallow invalid regular expression strings in the RegExp constructor
    "block-scoped-var": 2,      // treat var statements as if they were block scoped (off by default)
    "complexity": 1,            // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": 1,     // require return statements to either always or never specify values
    "curly": 1,                 // specify curly brace conventions for all control statements
    "default-case": 1,          // require default case in switch statements (off by default)
    "dot-notation": ["error", { "allowKeywords": true }], // encourages use of dot notation whenever possible
    "eqeqeq": 2,                // require the use of === and !==
    "guard-for-in": 1,          // make sure for-in loops have an if statement (off by default)
    "no-alert": 1,              // disallow the use of alert, confirm, and prompt
    "no-caller": 1,             // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 1,          // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": 1,        // disallow else after a return in an if (off by default)
    "no-eq-null": 1,            // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 2,               // disallow use of eval()
    "no-extend-native": 1,      // disallow adding to native types
    "no-loop-func": 2,          // disallow creation of functions within loops
    "no-void": 2,               // disallow use of void operator (off by default)
    "no-array-constructor": 2  // disallow use of the Array constructor
  }
}
