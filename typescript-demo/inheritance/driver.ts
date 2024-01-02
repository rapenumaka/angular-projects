import { circle } from './circle';
import {rectangle} from './rectangle';
import { square } from './square';

let rect = new rectangle(10,15);
console.log(rect.getInfo())

let c1 = new circle(10);
console.log(c1.getInfo());

let s1 = new square(5);
console.log(s1.getInfo());