import {
	OgObjectInteral,
	OpenGraphScraperOptions,
} from 'open-graph-scraper/dist/lib/types'
import setOptionsAndReturnOpenGraphResults from 'open-graph-scraper/dist/lib/openGraphScraper'

export const getOpgData = async (
	floatingUrls: string[]
): Promise<OgObjectInteral[]> => {
	const ogpDataList: OgObjectInteral[] = []

	await Promise.all(
		floatingUrls.map(async (url) => {
			const options: OpenGraphScraperOptions = {
				url: url,
				onlyGetOpenGraphInfo: true,
			}

			try {
				const data = await setOptionsAndReturnOpenGraphResults(options)
				const result = data.ogObject

				if (!result.success) return
				ogpDataList.push(result)
			} catch (e) {
				console.log(e)
			}
		})
	)

	return ogpDataList
}
