module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "turbo",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    project: ["../../apps/home-dashboard/tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    // ESLint
    "array-callback-return": [
      "error",
      {
        checkForEach: true,
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "block-scoped-var": "error",
    camelcase: "error",
    complexity: "error",
    curly: "error",
    "default-case": "error",
    "default-case-last": "error",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "func-style": ["error", "expression"],
    "guard-for-in": "error",
    "max-params": "error",
    "multiline-comment-style": ["warn", "starred-block"],
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-else-return": "error",
    "no-implicit-coercion": "error",
    "no-nested-ternary": "error",
    "no-param-reassign": "error",
    "no-return-assign": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable-loop": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-rename": "error",
    "prefer-arrow-callback": "error",
    "prefer-destructuring": "error",
    "prefer-template": "error",
    strict: "error",
    // ESLint comments
    "eslint-comments/no-unused-disable": "error", // remove unused eslint-disable
    // Typescript
    "@typescript-eslint/array-type": ["error", { default: "generic" }], // Array[T]
    "@typescript-eslint/consistent-type-exports": "error", // export type separate
    "@typescript-eslint/no-unused-vars":
      process.env.NODE_ENV === "production" ? "error" : "warn",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": ["error"],
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      process.env.NODE_ENV === "production" ? "error" : "warn",
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    // Imports
    "import/no-unresolved": "error",
    // React
    "react/boolean-prop-naming": ["error", { validateNested: true }],
    "react/button-has-type": "error",
    "react/destructuring-assignment": [
      "error",
      "always",
      { destructureInSignature: "always" },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/no-unstable-nested-components":
      process.env.NODE_ENV === "production" ? "error" : "warn",
    // React JSX
    "react/jsx-child-element-spacing": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "react/jsx-no-useless-fragment": "error",
    // React Hooks
    // Accesibility
    // Prettier
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
      flowVersion: "0.53",
    },
    "import/extensions": [".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["../../apps/home-dashboard/tsconfig.json"],
      },
    },
  },
};
