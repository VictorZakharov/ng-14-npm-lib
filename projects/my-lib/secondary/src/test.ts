import { initTestBed } from '../../test-shared';

initTestBed();
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);
