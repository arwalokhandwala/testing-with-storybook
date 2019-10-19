import { configure } from '@storybook/react';

import requireContext from 'require-context.macro'

const req = requireContext('../src/components', true, /\.stories\.js$/);

// automatically import all files ending in *.stories.js
configure(req, module);
