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
exports.square = void 0;
var shape_1 = require("./shape");
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(_side) {
        var _this = _super.call(this, _side, _side) || this;
        _this._side = _side;
        return _this;
    }
    ;
    square.prototype.getArea = function () {
        return this._side * this._side;
    };
    square.prototype.getInfo = function () {
        return _super.prototype.getinfo.call(this) + ' Area is ' + this.getArea();
    };
    return square;
}(shape_1.shape));
exports.square = square;
