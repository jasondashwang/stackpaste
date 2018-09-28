module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb"],
    "plugins": ["react"],
    "env": {
        "browser": true
    },
    "rules": {
        "no-underscore-dangle": [2, { "allow": ["_id"] }]
    }
};
