/**
 * Created by REN on 2016/11/12.
 */

/**
 * Array原生方法扩展实现遍历多维数组
 * @param {Function}fn
 * @return {Array}
 */
Array.prototype.each = function (fn) {
    try {
        if (this.length > 0 && fn.constructor === Function) {
            this.count || (this.count = 0);
            while (this.count < this.length) {
                var item = this[this.count];
                if (item && item.constructor === Array) {
                    item.each(fn);
                } else {
                    fn(item);
                }
                this.count++;
            }
            this.count = null;
        }
    } catch (error) {
        //DO STH...
    }
};

//eg
var a = [3, [7, 6, [5, 2, 4]]];
a.each(function (item) {
    console.log(item);
});
//result:3,7,6,5,2,4