export default function getStatistics(idStr) {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAF4r5PXBJWT0es6h4skG9NkkSKDguBXKQ&id=${idStr}&part=statistics`)
    .then(response => response.json())
    .catch(alert);
}
