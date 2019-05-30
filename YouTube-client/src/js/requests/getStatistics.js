export default function getStatistics(idStr) {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA-_1EB1wVg_qlOdaekViFEMTn7HxKHAPo&id=${idStr}&part=statistics`)
    .then(response => response.json())
    .catch(alert);
}
