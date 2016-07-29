// @flow

import { version } from '../package.json';
import { MyClass } from './myclass.js';

// let foo:number = "foo"; // check for fun
const MY_CONST_CLASS = new MyClass("Justin", 26);

export { MyClass, MY_CONST_CLASS, version };
