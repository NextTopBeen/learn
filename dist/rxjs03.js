'use strict';

// Rxjs 操作符

var Rx = require('rxjs');

// Creation Operators（创造是操作符）
// repeat操作符
// 重复 count 次，源 Observable 发出的值。

var source1 = Rx.Observable.from(['a', 'b', 'c']).repeat(3).subscribe(function (value) {
    return console.log(value);
});
// 打印3次a b c


// 变换操作符
// map
// 对 Observable 对象发出的每个值，使用指定的 project 函数，进行映射处理。

var source2 = Rx.Observable.interval(1000).map(function (x) {
    return x * 2;
}).subscribe(function (value) {
    return console.log(value);
});

// mapTo
// 对 Observable 对象发出的每个值，映射成固定的值。

// scan
// public scan(accumulator: function(acc: R, value: T, index: number): R, seed: T | R): Observable<R>
// 对 Observable 发出值，执行 accumulator 指定的运算，可以简单地认为是 Observable 版本的 Array.prototype.reduce
// reduce? https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// 累加

var source3 = Rx.Observable.from('hello').scan(function (origin, next) {
    return origin + next;
}, '').subscribe(function (value) {
    return console.log(value);
});
// h
// he
// hel
// hell
// hello
//# sourceMappingURL=rxjs03.js.map