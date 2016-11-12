/**
 * Created by REN on 2016/11/12.
 */

function reverseStr(str) {
    var result = "";
    for (var i=str.length-1;i>=0;i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseStr("abcdefg"));