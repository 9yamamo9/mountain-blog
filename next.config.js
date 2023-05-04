const { createMdxImport } = require('./lib/blogs/main')
createMdxImport()

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		providerImportSource: '@mdx-js/react',
	},
})

const withTM = require('next-transpile-modules')(['react-icons'])

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	reactStrictMode: true,
}

module.exports = withTM(withMDX(nextConfig))
