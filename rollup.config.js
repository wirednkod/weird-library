import typescript from "rollup-plugin-typescript2";
import json from '@rollup/plugin-json';
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.tsx";

const plugins = [
  typescript({
    typescript: require("typescript"),
  }),
  json()
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
  },
];
