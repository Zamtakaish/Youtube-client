import runScrollController from './controllers/scrollController';
import runSliderController from './controllers/sliderController';
import runRequestController from './controllers/requestController';
import renderPage from './rendering/renderPage';

export default function appStart() {
  renderPage();
  runSliderController();
  runRequestController();
}
