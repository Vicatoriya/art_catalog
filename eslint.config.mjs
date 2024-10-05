import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";

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
  {
    plugins: {
        react: eslintPluginReact
    }
}

];