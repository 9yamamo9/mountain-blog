'use strict'
require('ts-node').register({
	compilerOptions: {
		module: 'commonjs',
		target: 'esnext',
	},
})
exports.createMdxImport = require('./generate.ts').createMdxImport
