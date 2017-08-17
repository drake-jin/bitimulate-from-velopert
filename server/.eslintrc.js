module.exports = {
    "extends": "airbnb-base",
    "rules": {
        // enable additional rules
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "no-unused-vars":["error","never"],
        // disable rules from base configurations
        //"no-console": "off",
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
    },
}