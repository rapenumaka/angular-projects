"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shape = void 0;
var shape = /** @class */ (function () {
    function shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (X) {
            this._x = X;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (Y) {
            this._y = Y;
        },
        enumerable: false,
        configurable: true
    });
    shape.prototype.getinfo = function () {
        var v1 = this._x;
        var v2 = this._y;
        return "x = ".concat(v1, " y= ").concat(v2);
    };
    return shape;
}());
exports.shape = shape;
