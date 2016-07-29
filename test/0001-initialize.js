// @flow

import 'babel-polyfill';
import chai from 'chai';
import { describe, it } from 'mocha';
// import path from 'path';
import * as MyProject from '../dist/myproject';

chai.should();

describe('Test MyProject', () => {
  let instance = new MyProject.MyClass("Justin", 25);
  it('returns true', () => {
    chai.assert.instanceOf(instance, MyProject.MyClass, 'Valid');
  });
});
