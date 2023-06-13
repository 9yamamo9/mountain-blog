export const getFloatingUrls = (markdown: string) => {
	const reqFloatUrl = /(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;/?:@&=+$,%#]+/g
	const floatUrls = markdown.match(reqFloatUrl)

	console.log(floatUrls)

	const reqFloatUrlWithTitle = /\[.+\]\(https?:\/\/.*\)/g
	const urlWithTitles = markdown.match(reqFloatUrlWithTitle)

	console.log('withTitle', urlWithTitles)

	const reqExtractTitle = /\[.+\]/g
	const reqExtractUrl = /https?:\/\/[-_.!~*\\'a-zA-Z0-9;/?:@&=+$,%#]+/g
	const distributedUrlAndTitle = urlWithTitles?.map((urlWithTitle) => {
		const extractedTitle = urlWithTitle.match(reqExtractTitle)
		if (!extractedTitle) return

		const title = extractedTitle[0].replace('[', '').replace(']', '')

		return {
			Title: title,
			Url: urlWithTitle
				.match(reqExtractUrl)
				?.filter((url) => !url.includes('youtube.com'))
				.filter((url) => !url.includes('twitter.com'))[0],
		}
	})

	console.log('hoge', distributedUrlAndTitle)

	const filteredFloatUrls =
		floatUrls
			?.filter((url) => !url.includes('youtube.com'))
			.filter((url) => !url.includes('twitter.com')) || []

	return {
		FloatUrls: filteredFloatUrls,
		UrlAndTitleMap: distributedUrlAndTitle,
	}
}
