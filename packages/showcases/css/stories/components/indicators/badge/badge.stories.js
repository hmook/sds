import overview from './examples/overview.html';
import _default from './examples/default.html';
import brand from './examples/brand.html';
import reversed from './examples/reversed.html';
import accent from './examples/accent.html';
import alert from './examples/alert.html';

import { parameters } from '@vtmn/showcase-core/csf/components/indicators/badge.csf';

export default {
  title: 'Components / Indicators / Badge ',
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

export const Default = () => _default;
Default.parameters = {
  docs: {
    source: {
      code: _default,
    },
  },
};

export const Brand = () => brand;
Brand.parameters = {
  docs: {
    source: {
      code: brand,
    },
  },
};

export const Reversed = () => reversed;
Reversed.parameters = {
  docs: {
    source: {
      code: reversed,
    },
  },
  backgrounds: { default: 'primary-reversed' },
};

export const Accent = () => accent;
Accent.parameters = {
  docs: {
    source: {
      code: accent,
    },
  },
};

export const Alert = () => alert;
Alert.parameters = {
  docs: {
    source: {
      code: alert,
    },
  },
};
