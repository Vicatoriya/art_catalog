import pluginJs from "@eslint/js";
import eslintPluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {files: ["**/*.{ts,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
   "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-require-imports":["off"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    },
    plugins: {
        react: eslintPluginReact,
        "simple-import-sort": simpleImportSort,
    }
  } 
];