"use strict";
/* eslint-disable prefer-const */
Object.defineProperty(exports, "__esModule", { value: true });
3 + []; // ts(2365)
let obj = {};
obj.foo; // ts(2339)
function a(b) {
    return b / 2;
}
a("z"); // ts(2345)
