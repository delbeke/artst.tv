/* globals encodeURIComponent fetch localStorage */
const key = 'AIzaSyBt2-yVmk_R4Jidpib56ohLSALWQBUSXZo'
const apiRoot = 'https://www.googleapis.com/youtube/v3/'
const channelId = 'UC3PX_OERP5ShjWXKqnN59IQ'
const cacheKey = `channel-items-${channelId}`

export default async function getVideos () {
  const cachedData = localStorage.getItem(cacheKey)
  if (cachedData) {
    return JSON.parse(cachedData)
  } else {
    const url = `${apiRoot}search?key=${encodeURIComponent(key)}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
    const response = await fetch(url)
    const data = await response.json()
    localStorage.setItem(cacheKey, JSON.stringify(data.items))
    return data.items
  }
}
