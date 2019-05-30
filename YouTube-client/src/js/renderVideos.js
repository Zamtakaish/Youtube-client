import addNewElement from './addHtmlElement';
import getStatistics from './getStatistics';

export default function renderVideos(videoArray) {
  const parent = document.getElementsByClassName('main__video-preview')[0];
  const videoId = [];
  for (let i = 0; i < videoArray.length; i += 1) {
    videoId.push(videoArray[i].id.videoId);
  }
  const idRequest = videoId.join();
  const statisticsResponse = getStatistics(idRequest);
  statisticsResponse.then((response) => {
    for (let i = 0; i < videoArray.length; i += 1) {
      const video = addNewElement('li', 'main__video-preview__video', parent);
      const image = addNewElement('img', 'main__video-preview__video__image', video);
      image.setAttribute('src', videoArray[i].snippet.thumbnails.high.url);
      const title = addNewElement('p', 'main__video-preview__video__title', video);
      title.innerHTML = videoArray[i].snippet.title;
      const author = addNewElement('p', 'main__video-preview__video__author', video);
      author.innerHTML = videoArray[i].snippet.channelTitle;
      const description = addNewElement('p', 'main__video-preview__video__author', video);
      description.innerHTML = videoArray[i].snippet.description;
      const date = addNewElement('p', 'main__video-preview__video__publish-date', video);
      date.innerHTML = Date.parse(videoArray[i].snippet.publishedAt);
      const views = addNewElement('p', 'main__video-preview__video__views', video);
      views.innerHTML = response.items[i].statistics.viewCount;
    }
  });
}
