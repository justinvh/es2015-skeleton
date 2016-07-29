import 'babel-polyfill';
import chai from 'chai';
import path from 'path';
import * as MyProject from '../dist/myproject';

chai.should();

describe('Test MyProject', () => {
  let instance = new MyProject.MyClass();
  it('returns true', () => {});
});
