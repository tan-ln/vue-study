/*var o ={

}
o.step = 1;
var bValue = 1;
Object.defineProperty(o, 'a', { // 一次只能设置一个属性
    get: function(){
        // 当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象
        console.log('get');
        return bValue;
    },
    set: function(val) {
        console.log('设置了新的值');
        bValue = val;
    }
});
o.a = 2;
console.log(o.a); */

/*(function () {
    'use strict';
    console.log(this); // 在严格模式下 this指向undefined 非严格模式指向全局
    var o = {};
    Object.defineProperty(o, 'a', {
        value: 7,
        writable: false
    });
    o.a = 34;// Cannot assign to read only property 'a' of object '#<Object>'
    console.log(o.a);
})()*/  
/*
var o={}
Object.defineProperty(o, 'a', {
    value: 1,
    enumerable: true
});
Object.defineProperty(o, 'b', {
    value: 1,
    enumerable: false    // 不可枚举 即通过for..in Object.keys()得到 可以通过属性选择得到
});
Object.defineProperty(o, 'c', {
    value: 1, // 不写enumerable 默认不可枚举 不可修改 不可配置
});
o.d = 4; // 动态设置的属性可枚举
console.log(Object.keys(o));
for(let key in o){
    console.log(key,o[key]);
}
console.log(o.propertyIsEnumerable('a'));
// console.log(o.c);*/ 
/*
var o={}
Object.defineProperty(o, 'a', {
    value: 1,
    configurable: true
});
Object.defineProperty(o, 'b', {
    value: 1,
    configurable: false    // 不可枚举 即通过for..in Object.keys()得到 可以通过属性选择得到
});
console.log(o.a);
delete o.a;
console.log(o.a);

// 不可以配置 ->不能删除 再严格模式下直接报错
delete o.b;
console.log(o.b);*/

function Archiver() {
    var temperature = null;
    var archive = [];

    Object.defineProperty(this, 'temperature', {
        get: function(){
            console.log('get');
            return temperature;
        },
        set:function(value){
            temperature = value;
        }
    })
    // var data ={
    //     age: 19,
    //     name: '长孙无忌'
    // }
    // for(let key in data){
    //     Object.defineProperty(data, key, {
    //         get: function(){
    //             console.log('get');
    //             return data[key];
    //         },
    //         set: function(newVal){
    //             console.log('set');
    //             data[key] = data.newVal;
    //         }
    //     })
    // }
    // data.age = 20;

}
var arc = new Archiver();
arc.temperature = 35;
console.log(arc.temperature);



