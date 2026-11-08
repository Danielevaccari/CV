import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["build/**", "backend/**", "node_modules/**"] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    reactHooks.configs.flat.recommended,
    {
        files: ["src/**/*.{ts,tsx}"],
        languageOptions: { globals: globals.browser },
        rules: { "no-console": "warn" },
    },
    {
        files: ["*.js"],
        languageOptions: { globals: globals.node, sourceType: "commonjs" },
        rules: { "@typescript-eslint/no-require-imports": "off" },
    },
    prettier
);
