export const getFloatingUrls = (markdown: string): string[] => {
	const reqFloatUrl =
		/(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;\\/?:\\@&=+\\$,%#]+/g
	const floatUrls = markdown.match(reqFloatUrl)

	return floatUrls ?? []
}
