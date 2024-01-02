"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var square_1 = require("./square");
var rect = new rectangle_1.rectangle(10, 15);
console.log(rect.getInfo());
var c1 = new circle_1.circle(10);
console.log(c1.getInfo());
var s1 = new square_1.square(5);
console.log(s1.getInfo());
