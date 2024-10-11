const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '\\.(jpg|jpeg|png|gif|svg|webp)$': '<rootDir>/tests/mocks/fileMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  testEnvironment: 'jsdom',
};

module.exports = config;
