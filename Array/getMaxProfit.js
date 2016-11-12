/**
 * Created by REN on 2016/11/12.
 */

function getMaxProfit(arr) {
    var max = arr[0], min = arr[0];
    for (var i=1;i<arr.length;i++) {
        max = max < arr[i] ? arr[i] : max;
        min = min > arr[i] ? arr[i] : min;
    }
    return max - min;
}