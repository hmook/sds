import overview from './examples/overview.html';
import topImage from './examples/top-image.html';
import sideImage from './examples/side-image.html';
import fullImage from './examples/full-image.html';

import { parameters } from '@vtmn/showcase-core/csf/components/structure/card.csf';

export default {
  title: 'Components / Structure / Card ',
  argTypes: { onchange: { action: 'write' } },
  parameters,
};

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};

export const TopImage = () => topImage;
TopImage.parameters = {
  docs: {
    source: {
      code: topImage,
    },
  },
};

export const SideImage = () => sideImage;
SideImage.parameters = {
  docs: {
    source: {
      code: sideImage,
    },
  },
};

export const FullImage = () => fullImage;
FullImage.parameters = {
  docs: {
    source: {
      code: fullImage,
    },
  },
};
