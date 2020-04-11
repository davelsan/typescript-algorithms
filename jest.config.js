module.exports = {
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
  testMatch: [
    '**/src/**/?(*.)+(spec|test).(js|ts)',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
};