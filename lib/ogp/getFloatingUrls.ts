export const getFloatingUrls = (markdown: string): string[] => {
	const reqFloatUrl = /(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;/?:@&=+$,%#]+/g
	const floatUrls = markdown.match(reqFloatUrl)

	const filteredUrls = floatUrls
		?.filter((url) => !url.includes('youtube.com'))
		.filter((url) => !url.includes('twitter.com'))

	return filteredUrls ?? []
}
