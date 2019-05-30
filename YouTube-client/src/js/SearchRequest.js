

export default class SearchRequest {
  constructor(request) {
    this.nextPage = '';
    this.url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDo42jwo0yTyBe0eTmi832z58fG4dcrn9k&type=video&part=snippet&maxResults=15&q=${request}`;
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
      console.log(response.items);
      renderVideos(response.items);
    });
  }
}
