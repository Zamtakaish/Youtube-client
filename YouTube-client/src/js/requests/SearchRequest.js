import renderVideos from '../rendering/renderVideos';

export default class SearchRequest {
  constructor(request) {
    this.nextPage = '';
    this.url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAF4r5PXBJWT0es6h4skG9NkkSKDguBXKQ&type=video&part=snippet&maxResults=15&q=${request}`;
  }

  doFetch() {
    return fetch(this.url + this.nextPage)
      .then(response => response.json())
      .catch(alert);
  }

  render() {
    const data = this.doFetch();
    data.then((response) => {
      this.nextPage = `&pageToken=${response.nextPageToken}`;
      renderVideos(response.items);
    });
  }
}
