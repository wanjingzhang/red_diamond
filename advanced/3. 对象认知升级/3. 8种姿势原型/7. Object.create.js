// ES3 垫片如何实现，Object.create是ES5出现的，创建纯净对象
if (typeof Object.create !== "function") {
    Object.create = function (proto, propertiesObject) {
        if (typeof proto !== 'object' && typeof proto !== 'function') {
            throw new TypeError('Object prototype may only be an Object: ' + proto);
        } else if (proto === null) {
            // throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
        }

        // 如果不为空，那么带参数，不属于ES3的范畴
        if (typeof propertiesObject !== 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

        function F() {}
        F.prototype = proto;

        return new F();
    };
}

