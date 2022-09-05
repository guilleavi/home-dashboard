module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  ignoreFiles: ["**/*.js", "**/*.json", "**/*.ts", "**/*.tsx"],
  rules: {
    "property-no-vendor-prefix": null,
    "color-hex-length": "long",
    "color-named": "always-where-possible",
    "font-weight-notation": "numeric",
    "declaration-no-important": true,
  },
};
