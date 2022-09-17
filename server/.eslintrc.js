module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        "eslint:recommended",
        "prettier/@typescript-esling",
        "plugin:prettier",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parseOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        es6: true,
        node: true,
    },
    rules: {
        "no-var": "error",
        "semi": "error",
        "indent": ["error", 2, { SwitchCase: 1 }],
        "no-multi-spaces": "error",
        "space-in-parens": "error",
        "no-multiple-empty-lines": "error",
        "prefer-conts": "error"
    },
}