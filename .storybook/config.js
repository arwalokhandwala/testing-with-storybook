import { configure } from '@storybook/react';

import requireContext from 'require-context.macro';
import {configure as configureEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const req = requireContext('../src/components', true, /\.stories\.js$/);

// automatically import all files ending in *.stories.js
configure(req, module);

configureEnzyme({ adapter: new Adapter() });