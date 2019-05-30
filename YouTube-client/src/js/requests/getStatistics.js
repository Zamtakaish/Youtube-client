export default function getStatistics(idStr) {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDo42jwo0yTyBe0eTmi832z58fG4dcrn9k&id=${idStr}&part=snippet,statistics`)
    .then(response => response.json())
    .catch(alert);
}
