/**
 * Created by REN on 2016/11/12.
 */

function RandomStr(length) {
    var str = "1234567890", result = "";
    for (var i = 65; i < 91; i++) {
        str += String.fromCharCode(i);
        str += String.fromCharCode(i + 32);
    }
    for (var i = 0; i < length; i++) {
        result += str[Math.floor(Math.random() * str.length)];
    }
    return result;
}