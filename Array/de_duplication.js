/**
 * Created by REN on 2016/11/12.
 */

function deDuplication(arr) {
    var tempObj = {}, result = [];
    for (var i=0;i<arr.length;i++) {
        if (!tempObj.hasOwnProperty(arr[i])) {
            tempObj[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}