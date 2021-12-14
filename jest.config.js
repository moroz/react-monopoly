module.exports = {
  transform: {
    "^.+\\.tsx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          ".spec.ts": "tsx"
        }
      }
    ]
  },
  moduleNameMapper: {
    "\\.(png|jpg)$": "<rootDir>/src/imageStub.ts"
  }
};
