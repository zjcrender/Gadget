/**
 * Created by REN on 2016/11/12.
 */

function palindrome(str) {
    var lower = str.toLowerCase().replace(/[\W]/g,"");
    var len = lower.length;
    if (len === 0 || len === 1) {
        return true;
    }
    if (lower[0] !== lower[len - 1]) {
        return false;
    }else {
        return arguments.callee(lower.slice(1, len-1));
    }
}