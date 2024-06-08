const { playwrightLauncher } = require("@web/test-runner-playwright");
const { fromRollup } = require("@web/dev-server-rollup");
const babel = require("@rollup/plugin-babel").default;
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const babelConfig = {
  babelHelpers: "bundled",
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};

const babelPlugin = fromRollup(babel);
const resolvePlugin = fromRollup(nodeResolve);

module.exports = {
  files: "test/**/*.test.js", // Specify the pattern to find your test files
  plugins: [
    resolvePlugin({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    babelPlugin(babelConfig),
  ],
  browsers: [playwrightLauncher({ product: "chromium" })],
  coverage: true,
  testsFinishTimeout: 10000
};
