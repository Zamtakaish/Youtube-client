export default function getStatistics(idStr) {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBK8Pu1ayQ3hN7xQCQEHUyDlzz7agLZOrc&id=${idStr}&part=statistics`)
    .then(response => response.json())
    .catch(alert);
}
