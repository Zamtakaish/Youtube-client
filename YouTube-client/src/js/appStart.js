import runEvents from './controllers/scrollController';
import runSliderController from './controllers/sliderController';
import runRequestController from './controllers/requestController';
import renderPage from './rendering/renderPage';

export default function appStart() {
  renderPage();
  runEvents();
  runSliderController();
  runRequestController();
}
