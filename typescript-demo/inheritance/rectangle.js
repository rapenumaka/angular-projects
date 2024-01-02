"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = void 0;
var shape_1 = require("./shape");
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(_length, _width) {
        var _this = _super.call(this, _length, _width) || this;
        _this._length = _length;
        _this._width = _width;
        return _this;
    }
    ;
    rectangle.prototype.getArea = function () {
        return this._length * this._width;
    };
    rectangle.prototype.getInfo = function () {
        return _super.prototype.getinfo.call(this) + ' Area is ' + this.getArea();
    };
    return rectangle;
}(shape_1.shape));
exports.rectangle = rectangle;
