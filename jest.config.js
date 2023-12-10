module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    modulePathIgnorePatterns: ['node_modules', 'dist'],
    testTimeout: 30000,
};
