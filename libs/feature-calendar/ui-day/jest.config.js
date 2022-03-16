module.exports = {
  displayName: "feature-calendar-ui-day",
  preset: "../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/feature-calendar/ui-day",
};
