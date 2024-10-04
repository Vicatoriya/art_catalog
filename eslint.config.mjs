import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{ts,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    "rules": {
   "@typescript-eslint/no-explicit-any": ["off"],
    }
  },
  pluginReact.configs.flat["jsx-runtime"]
];