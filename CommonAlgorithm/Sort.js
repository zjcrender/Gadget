/**
 * Created by REN on 2016/11/12.
 */

//冒泡排序
function bubbleSort(arr) {
    var _arr = arr.slice(0), len = _arr.length;
    for (var i = 1; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (_arr[j] > _arr[j + 1]) {
                _arr[j] += _arr[j + 1];
                _arr[j + 1] = _arr[j] - _arr[j + 1];
                _arr[j] -= _arr[j + 1];
            }
        }
    }
    return _arr;
}


//快速排序
function quickSort(arr) {
    if (!arr.length) {
        return;
    }
    var _arr = arr.slice(0);
    return (function (arr, l, r) {
        if (l<r) {
            var i = l, j = r, x = arr[i];
            while (i<j) {
                while (i<j && arr[j]>=x) {
                    j--;
                }
                if (i<j) {
                    arr[i] = arr[j];
                }
                while (i<j && arr[i]<x) {
                    i++;
                }
                if (i<j) {
                    arr[j] = arr[i];
                }
            }
            arr[i] = x;
            arguments.callee(arr,i+1,r);
            arguments.callee(arr,l,i-1);
        }
        return arr;
    })(_arr, 0, _arr.length - 1);
}