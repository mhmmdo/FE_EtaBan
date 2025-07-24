/* eslint-disable no-param-reassign */
import { createPageLoading, createSectionLoading } from '../view/templates/template-creator';
import Utils from './utils';

class Loading {
  static async loadingPage(element) {
    element.innerHTML += createPageLoading();

    await Utils.delay();
  }

  static async loadingSection(element) {
    element.innerHTML = '';

    element.innerHTML += createSectionLoading();

    await Utils.delay();
  }
}

export default Loading;
