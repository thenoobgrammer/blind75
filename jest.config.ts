import { defaults } from 'jest-config'

const config = {
	transform: { '^.+\\.ts?$': 'ts-jest' },
	testEnvironment: 'node',
	testMatch: [...defaults.testMatch, '**/*.test.ts'],
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	bail: true,
	verbose: true,
}
export default config
